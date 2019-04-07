import greenlet from "greenlet";
import { codeBlock } from "common-tags";

import { map } from "rxjs/operators";

/**
 * Run some javascript code in a web worker
 * @param {string} code Some javascript in a string
 */
export async function dispatchCodeToThread(code, globals = {}) {
  const result = await greenlet((code, globals) => {
    /* eslint-disable */
    const parsedCode = new Function(
      `
        "use strict";
        ${Object.entries(globals)
          .map(global => `const ${global[0]} = ${JSON.stringify(global[1])};`)
          .join("\n")}
        ${code}
        `
    );

    const timeBefore = self.performance.now();
    const result = parsedCode();
    const timeAfter = self.performance.now();

    return {
      result,
      timeBefore,
      timeAfter,
      duration: timeAfter - timeBefore
    };
  })(code, globals);

  return result;
}

/**
 * Stringifies a function for dispatch
 * @param {function} fn A function to stringify for dispatch
 * @return {string} A function string to be executed using the dispatcher
 */
export function stringifyFunction(fn) {
  const name = fn.name || "anonymous";
  const fnString = fn.toString();

  return codeBlock`
    ${fnString}

    return ${name}();
  `;
}

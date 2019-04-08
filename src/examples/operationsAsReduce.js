import { codeBlock } from "common-tags";
import { longStackSupport } from "q";

export const mapReducerExample = codeBlock`
// Regular map
// [1, 2, 3].map(double);

// Map function
const double = x => x * 2;

// Map reduce function
function map(mapperFn) {
  return function reducer(list, val) {
    return [...list, mapperFn(val)];
  };
}

return [1, 2, 3].reduce(map(double), []);
`;

export const filterReducerExample = codeBlock`
// Regular filter
// [1, 2, 3].filter(isEven);

// Predicate function
const isEven = x => x % 2 === 0;

// Filter reduce function
function filter(predicateFn) {
  return function reducer(list, val) {
    if (predicateFn(val)) return [...list, val];

    return list;
  }
}

return [1,2,3].reduce(filter(isEven), []);
`;

export const combinerLogic = codeBlock`
// Combiner function
const combine = (list, val) => {
  list.push(val);
  return list;
}

// Filter reduce function
function filter(predicateFn) {
  return function reducer(list, val) {
    if (predicateFn(val)) return combine(list, val);

    return list;
  }
}

// Map reduce function
function map(mapperFn) {
  return function reducer(list, val) {
    return combine(list, mapperFn(val));
  };
}

// Our reduces
const doubleMap = map(i => i * 2);
const filterUnderFive = filter(i => i < 5);

return [1,2,3]
  .reduce(doubleMap, [])
  .reduce(filterUnderFive, []);
`;

import { codeBlock } from "common-tags";

export const mapPerformanceBad = codeBlock`
// Time at the start of script execution
const TIME_BEFORE = self.performance.now();

// BIG_ARRAY is an array with 1,000,000 items
BIG_ARRAY
  .map((_, idx) => idx)
  .map(i => i * 2)
  .map(i => i * 3)
  .filter(i => i % 2 === 0);
  
// Time after processing our data
const TIME_AFTER = self.performance.now();

// Return the time to execute
return TIME_AFTER - TIME_BEFORE;
`;

export const mapPerformanceGood = codeBlock`
// Composer for our functions
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// Map as a reduce
const map = mapFn => xform => (list, val) => xform(list, mapFn(val));

// Filter as a reduce
const filter = predicateFn => xform => (list, val) => {
  if (predicateFn(val)) {
    return xform(list, val);
  }

  return list;
};

// Combiner
const combiner = (l, v) => l.push(v) && l;

// Create the transducer
const transducer = compose(
  map(() => 1),
  map(i => i * 3),
  map(i => i * Math.ceil(Math.random() * 2)),
  filter(i => i % 2 === 0)
);

// Time at the start of script execution
const TIME_BEFORE = self.performance.now();

BIG_ARRAY.reduce(transducer(combiner), [])

// Time at the end of script execution
const TIME_END = self.performance.now();


return TIME_END - TIME_BEFORE;
`;

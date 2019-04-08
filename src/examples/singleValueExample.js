import { codeBlock } from "common-tags";

export const singleValueExample = codeBlock`
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

// Business logic
const nonFreeMembership = member => member.cost !== null;
const addYearlyIncome = member => ({
  ...member,
  yearlyCost: member.cost * 12,
});

// Create the transducer
const transducer = v =>
  compose(
    filter(nonFreeMembership),
    map(addYearlyIncome)
  )((_, o) => o)(null, v);

return transducer({
  name: "Caniel Dilson",
  cost: 12
});

`;

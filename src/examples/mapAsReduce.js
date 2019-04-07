import { codeBlock } from "common-tags";

export const mapReducerExample = codeBlock`
// Regular map
// [1, 2, 3].map(x => x * 2);

// Map function
const double = x => x * 2;

// Map reduce function
function mapReducer(mapperFn) {
  return function reducer(list, val) {
    return [...list, mapperFn(val)];
  };
}

return [1, 2, 3].reduce(mapReducer(double));
`;

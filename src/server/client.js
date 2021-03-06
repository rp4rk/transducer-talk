const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8081");

ws.on("open", () => {
  console.log("Opened connection!");
});

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
const parseToJSON = str => JSON.parse(str);
const nonFreeMembership = member => member.cost !== null;
const addYearlyIncome = member => ({
  ...member,
  yearlyCost: member.cost * 12
});

// Create the transducer
const transducer = compose(
  map(parseToJSON),
  filter(nonFreeMembership),
  map(addYearlyIncome)
);

// Create our combiner
const combiner = (fn, val) => fn(val);

ws.on("message", data => transducer(combiner)(console.log, data));

ws.on("error", err => console.log(err));

const { showResult, getCsvNumbers } = require("../util");
const { solver, solver2 } = require("./solution");

const numbers = getCsvNumbers();
const part1Numbers = [ ...numbers ];
const part2Numbers = [ ...numbers ];

// part 1
const result= solver(part1Numbers, { noun: 12, verb: 2 });
showResult(result);


// part 2
const result2 = solver2(part2Numbers, 19690720);
showResult(result2, "part 2");

const { showResult, getCsvNumbers } = require("../util");
const { solver, solver2 } = require("./solution");

const numbers = getCsvNumbers();
const part1Numbers = [ ...numbers ];
const part2Numbers = [ ...numbers ];

// part 1
const { result } = solver(part1Numbers, [ 1 ]);
showResult(result);


// part 2
const { result: result2 } = solver2(part2Numbers, [ 5 ]);
showResult(result2, "part 2");

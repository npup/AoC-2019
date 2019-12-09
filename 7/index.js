const { showResult, getCsvNumbers } = require("../util");
const { solver, solver2 } = require("./solution");

const input = getCsvNumbers();

// part 1
const { max } = solver(input, [ 3, 1, 2, 4, 0 ]);
showResult(max);


// part 2
const result2 = solver2(input);
showResult(result2, "part 2");

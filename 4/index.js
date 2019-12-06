const { showResult } = require("../util");
const { solver, solver2 } = require("./solution");

const input = "134564-585159";
// part 1
const result = solver(input);
showResult(result);


// part 2
const result2 = solver2(input);
showResult(result2, "part 2");

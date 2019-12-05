const { showResult, getInputRows } = require("../util");
const { solver, solver2 } = require("./solution");

const rows = getInputRows();

// part 1
const result = solver(rows);
showResult(result);


// part 2
const result2 = solver2(rows);
showResult(result2, "part 2");

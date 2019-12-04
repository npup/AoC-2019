const { showResult, getInputRows } = require("../util");

const rows = getInputRows();

// part 1
const applySolution = require("./solution");
const result = applySolution(rows);
showResult(result);


// part 2
const applySolution2 = require("./solution2");
const result2 = applySolution2(rows);
showResult(result2, "part 2");

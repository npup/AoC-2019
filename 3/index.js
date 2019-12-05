const { showResult, getInputRows, splitRow } = require("../util");
const { solver, solver2 } = require("./solution");

const rows = getInputRows();
const [ thread1, thread2 ] = rows.map(row => splitRow(row));

// part 1

const result = solver([
    thread1, thread2
]);
showResult(result);


// part 2
const result2 = solver2([
    thread1, thread2
]);
showResult(result2, "part 2");

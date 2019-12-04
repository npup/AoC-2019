const fs = require("fs");

const inputPath = "./assignment/input.txt";

const getInput = () =>
    fs.readFileSync(inputPath, "utf-8");

const getInputRows = () => {
    const input = getInput();
    const rows = input.split("\n");
    return rows;
};

const showResult = (result, label = "part 1") => {
    console.log(`--------------------------------------
Result${ label ? `, ${ label }` : "" }: ${ result }

`);
};
module.exports = {
    getInput,
    getInputRows,
    showResult
};

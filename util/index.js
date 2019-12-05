const fs = require("fs");

const inputPath = "./assignment/input.txt";

const getInput = () =>
    fs.readFileSync(inputPath, "utf-8");

const getInputRows = () => {
    const input = getInput();
    const rows = input.split("\n");
    return rows;
};

const getCsvNumbers = () => {
    return getCsvStrings().map(Number);
};

const getCsvStrings = () => {
    const input = getInput();
    return input.split(",");
};

const splitRow = (row, sep = /\s*,\s*/) => {
  return row.split(sep);
};

const showResult = (result, label = "part 1") => {
    console.log(`--------------------------------------
Result${ label ? `, ${ label }` : "" }: ${ result }

`);
};

const addNumbers = numbers =>
    numbers.reduce((sum, number) => sum + number, 0);

module.exports = {
    getInput,
    getInputRows,
    getCsvNumbers,
    getCsvStrings,
    splitRow,
    showResult,
    addNumbers
};

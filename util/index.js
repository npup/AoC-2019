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
    const input = getInput();
    return input.split(",").map(Number);
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
    showResult,
    addNumbers
};

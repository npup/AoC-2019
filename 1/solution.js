const { addNumbers } = require("../util");

const transformNumber = number => {
    let result = number / 3;
    result = Math.floor(result);
    result -= 2;
    return result;
};

// part 1
const solver = numbers => {
    const transformed = numbers.map(transformNumber);
    const result = addNumbers(transformed);
    return result;
};


// part 2
const solver2 = numbers => {
    const transformedNumbers = numbers.map(sumTransformations);
    const sum = addNumbers(transformedNumbers);
    return sum;
};


const sumTransformations = number => {
    let candidate = transformNumber(number);
    let sum = 0;
    while (candidate > 0) {
        sum += candidate;
        candidate = transformNumber(candidate);
    }
    return sum;
};


module.exports = {
    solver,
    solver2
};
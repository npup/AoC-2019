// get operator values and destination index from array
const getData = (arr, idx) => {
    const v1 = arr[arr[idx + 1]],
        v2 = arr[arr[idx + 2]],
        destination = arr[idx + 3];
    return { v1, v2, destination };
};

 // operator factory
const Operator = (skip, fn) => ({ skip, fn });

// register operators (opcode -> function)
const Ops = {
    1: Operator(3, function add(arr, idx) {
        const { v1, v2, destination } = getData(arr, idx);
        arr[destination] = v1 + v2;
    }),
    2: Operator(3, function mul(arr, idx) {
        const { v1, v2, destination } = getData(arr, idx);
        arr[destination] = v1 * v2;
    }),
    99: Operator(1, function stop() {
        throw new Error("Stop");
    })
};

// make noun/verb substitutions in array. returns new array
const makeSubstitutions = (arr, subs = { noun: null, verb: null }) => {
    const clonedArr = [ ...arr ], { noun, verb } = subs;
    if (null != noun) { clonedArr[1] = noun; }
    if (null != verb) { clonedArr[2] = verb; }
    return clonedArr;
};

const runProgram = (input, subs) => {
    const workingData = makeSubstitutions(input, subs);
    try {
        for (let idx = 0; idx < workingData.length; ++idx) {
            const value = workingData[idx];
            const op = Ops[value];
            if (!op) { continue; }
            op.fn(workingData, idx);
            idx += op.skip;
        }
    } catch (err) {
        // "stop" operator encountered
    }
    return workingData;
};

// part 1
const solver = (input, subs) => {
    const [ result ] = runProgram(input, subs);
    return result;
};

// part 2
const solver2 = (input, goal) => {
    let result, noun, verb, max = input.length - 1;
    // try permutations of noun/verb till goal is found or cannot be found
    outer: for (noun = 0; noun < max; ++noun) {
        for (verb = 0; verb < max; ++verb) {
            [ result ] = runProgram(input, { noun, verb });
            if (goal == result) { break outer; }
        }
    }
    // goal found
    if (result == goal) { return 100 * noun + verb; }
    // goal not found
    return null;
};


module.exports = {
    solver,
    solver2,
    runProgram
};
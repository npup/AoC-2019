const getParam = (nr, idx, arr, modes) => {
    const immediateMode = 1 == modes[ nr - 1 ];
    if (immediateMode) {
        return arr[ nr + idx ];
    }
    return arr[arr[ nr + idx ]];
};

// opcodes
const OP_ADD = 1,
    OP_MUL = 2,
    OP_INPUT = 3,
    OP_OUTPUT = 4,
    OP_JUMP_IF_TRUE = 5,
    OP_JUMP_IF_FALSE = 6,
    OP_LESS_THAN = 7,
    OP_EQUALS = 8,
    OP_STOP = 99;

// Build register of operators op code => (opcode, memory locations, fn)
const Ops = [
    [
        OP_ADD, 4, (arr, idx, modes) => {
            const v1 = getParam(1, idx, arr, modes);
            const v2 = getParam(2, idx, arr, modes);
            const destination = arr[idx + 3 ];
            arr[destination] = v1 + v2;
        }
    ],
    [
        OP_MUL, 4, (arr, idx, modes) => {
            const v1 = getParam(1, idx, arr, modes);
            const v2 = getParam(2, idx, arr, modes);
            const destination = arr[idx + 3 ];
            arr[destination] = v1 * v2;
        }
    ],
    [
        OP_INPUT, 2, (arr, idx, modes, userInput) => {
            const destination = arr[idx + 1 ];
            const { value: indata } = userInput.next();
            arr[destination] = indata;
        }
    ],
    [
        OP_OUTPUT, 2, (arr, idx, modes) => {
            const value = getParam(1, idx, arr, modes);
            return value;
        }
    ],
    [
        OP_JUMP_IF_TRUE, 3, (arr, idx, modes) => {
            const v1 = getParam(1, idx, arr, modes);
            const v2 = getParam(2, idx, arr, modes);
            if (0 != v1) { return v2; }
        }
    ],
    [
        OP_JUMP_IF_FALSE, 3, (arr, idx, modes) => {
            const v1 = getParam(1, idx, arr, modes);
            const v2 = getParam(2, idx, arr, modes);
            if (0 == v1) { return v2; }
        }
    ],
    [
        OP_LESS_THAN, 4, (arr, idx, modes) => {
            const v1 = getParam(1, idx, arr, modes);
            const v2 = getParam(2, idx, arr, modes);
            const destination = arr[ idx + 3 ];
            arr[destination] = v1 < v2 ? 1 : 0;
        }
    ],
    [
        OP_EQUALS, 4, (arr, idx, modes) => {
            const v1 = getParam(1, idx, arr, modes);
            const v2 = getParam(2, idx, arr, modes);
            const destination = arr[idx + 3 ];
            arr[destination] = v1 == v2 ? 1 : 0;
        }
    ],
    [
        OP_STOP, 1, () => {}
    ]
].reduce((acc , [code, skip, fn]) => {
    acc[code] = { code, skip, fn };
    return acc;
}, {});

const getOperatorAndParameterModes = input => {
    const [ modesStr, opCodeStr ] = input.split(/(\d\d?)$/).slice(0, -1),
        // makes array of modes
        modes = Array.from(modesStr).reverse().join("").padEnd(3, "0").split("").map(Number),
        opCode = Number(opCodeStr),
        op = Ops[opCode];
    return { opCode, op, modes };
};

function* inputGenerator(arr) {
    let idx = 0;
    do {
        yield arr[idx];
        ++idx;
    } while(idx < arr.length -1);
}

const runProgram = (input, userIndata = []) => {
    const workingData = [ ...input ];
    const nextInput = inputGenerator(userIndata);
    let result;
    for (let idx = 0; idx < workingData.length; ) {
        const value = String(workingData[idx]);
        const { op, opCode, modes } = getOperatorAndParameterModes(value);
        if (!op) { throw Error("unknown op code: " + opCode); }
        if (OP_STOP == op.code) { break; }
        const outData = op.fn(workingData, idx, modes, nextInput);
        if (OP_OUTPUT == op.code) {
            if (outData != 0) { result = outData; }
        }
        else if ((OP_JUMP_IF_TRUE == op.code || OP_JUMP_IF_FALSE == op.code) && "number" == typeof outData) {
            idx = outData;
            continue;
        }
        idx += op.skip;
    }
    return { data: workingData, result };
};

// part 1
const solver = (input, userIndata) => {
    const result = runProgram(input, userIndata);
    return result;
};

// part 2
const solver2 = (input, userIndata) => {
    const result = runProgram(input, userIndata);
    return result;
};


module.exports = {
    solver,
    solver2,
    runProgram
};
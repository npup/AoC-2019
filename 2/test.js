const { assert } = require("chai");
const { runProgram } = require("./solution");

describe("assignment 2", () => {

    /*
        1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2).
        2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6).
        2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801).
        1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99.
     */
    describe("level 1", () => {

        it("should perform add operation", () => {
            const result = runProgram([ 1, 0, 0, 0, 99 ]);
            assert.deepEqual(result, [ 2, 0, 0, 0, 99 ]);
        });

        it("should perform mul operation", () => {
            const result = runProgram([ 2, 3, 0, 3, 99 ]);
            assert.deepEqual(result, [ 2, 3, 0, 6, 99 ]);
        });

        it("should perform mul operation, stop without stop token", () => {
            const result = runProgram([ 2, 4, 4, 5, 99, 0 ]);
            assert.deepEqual(result, [ 2, 4, 4, 5, 99, 9801 ]);
        });

        it("should perform add operation, stop at early stop token", () => {
            const result = runProgram([ 1, 1, 1, 4, 99, 5, 6, 0, 99 ]);
            assert.deepEqual(result, [ 30, 1, 1, 4, 2, 5, 6, 0, 99 ]);
        });


    });


    describe("level 2", () => {
        /*
                it("should do x", () => {
                    const result = solver2();
                    assert.fail(result);
                });
        */
    });

});
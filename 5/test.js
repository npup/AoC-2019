const { assert } = require("chai");
const { runProgram } = require("./solution");
const _describe = _it = () => void 0;


describe("assignment 2", () => {

    /*
        1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2).
        2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6).
        2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801).
        1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99.
     */
    describe("level 1", function ()  {


        it("should perform add operation", () => {
            const { data } = runProgram([ 1, 0, 0, 0, 99 ]);
            assert.deepEqual(data, [ 2, 0, 0, 0, 99 ]);
        });

        it("should perform mul operation", () => {
            const { data } = runProgram([ 2, 3, 0, 3, 99 ]);
            assert.deepEqual(data, [ 2, 3, 0, 6, 99 ]);
        });

        it("should perform mul operation, stop without stop token", () => {
            const { data } = runProgram([ 2, 4, 4, 5, 99, 0 ]);
            assert.deepEqual(data, [ 2, 4, 4, 5, 99, 9801 ]);
        });

        it("should perform add operation, stop at early stop token", () => {
            const { data } = runProgram([ 1, 1, 1, 4, 99, 5, 6, 0, 99 ]);
            assert.deepEqual(data, [ 30, 1, 1, 4, 2, 5, 6, 0, 99 ]);
        });

        it("should x", () => {
            const { data } = runProgram([3, 0, 4, 42, 99], [ 5 ]); // input 5
            assert.deepEqual(data, [5, 0, 4, 42, 99]);
        });


        it("should y", () => {
           const { data } = runProgram([ 1101, 100, -1, 4, 0 ]);
           assert.deepEqual(data, [ 1101, 100, -1, 4, 99 ]);
        });

        it("should z", function () {
            const { data } = runProgram( [ 1101, 100, -1, 6, 3, 7, 0 ], [ 42 ]); // input 42
            assert.deepEqual(data,        [ 1101, 100, -1, 6, 3, 7, 99, 42 ]);
        });
        it("should k", function () {
           const { data } = runProgram([3, 0, 4, 0, 99], [ 66 ]); // input 66
            assert.deepEqual(data, [ 66, 0, 4, 0, 99]);
        });

        it("should l", function () {
            const { data } = runProgram([ 1002, 4, 3, 4, 33 ]);
            assert.deepEqual(data, [ 1002, 4, 3, 4, 99 ]);
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
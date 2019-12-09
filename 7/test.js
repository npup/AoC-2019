const { assert } = require("chai");
const { solver, solver2 } = require("./solution");

const _describe = _it = () => void 0;

describe("assignment 7", () => {

    describe("level 1", () => {

        it("should find expected result 1", () => {
            const { max, iterations } = solver([
                3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15,
                4, 15, 99, 0, 0
            ], [ 4, 3, 2, 1, 0 ], true);
            assert.equal(max, 43210);
            assert.equal(iterations, 1);
        });

        it("should find expected max 1", () => {
            const { max, iterations } = solver([
                3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15,
                4, 15, 99, 0, 0
            ], [ 4, 3, 2, 1, 0 ]);
            assert.equal(max, 43210);
            assert.equal(iterations, 120);
        });

        it("should find expected result 2", () => {
            const { max, iterations } = solver([
                3, 23, 3, 24, 1002, 24, 10, 24, 1002, 23, -1, 23,
                101, 5, 23, 23, 1, 24, 23, 23, 4, 23, 99, 0, 0
            ], [ 0, 1, 2, 3, 4 ], true);
            assert.equal(max, 54321);
            assert.equal(iterations, 1);
        });

        it("should find expected max 2", () => {
            const { max, iterations } = solver([
                3, 23, 3, 24, 1002, 24, 10, 24, 1002, 23, -1, 23,
                101, 5, 23, 23, 1, 24, 23, 23, 4, 23, 99, 0, 0
            ], [ 0, 1, 2, 3, 4 ]);
            assert.equal(max, 54321);
            assert.equal(iterations, 120);
        });

        it("should find expected result 3", () => {
            const { max, iterations } = solver([
                3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,
                1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0
            ], [ 1, 0, 4, 3, 2 ], true);
            assert.equal(max, 65210);
            assert.equal(iterations, 1);
        });

        it("should find expected max 3", () => {
            const { max, iterations } = solver([
                3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,
                1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0
            ], [ 1, 0, 4, 3, 2 ]);
            assert.equal(max, 65210);
            assert.equal(iterations, 120);
        });


    });

    /*
        describe("level 2", () => {

            it("should do x", () => {
                const result = solver2();
                assert.fail(result);
            });

        });
    */

});
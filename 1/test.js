const { assert } = require("chai");
const { solver, solver2 } = require("./solution");

describe("assignment 1", () => {

    describe("level 1", () => {
        /*
            For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
            For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
            For a mass of 1969, the fuel required is 654.
            For a mass of 100756, the fuel required is 33583.
         */
        it("should transform 12 -> 2", () => {
            const result = solver([ 12 ]);
            assert.equal(result, 2);
        });
        it("should transform 14 -> 2", () => {
            const result = solver([ 14 ]);
            assert.equal(result, 2);
        });
        it("should transform 1969 -> 654", () => {
            const result = solver([ 1969 ]);
            assert.equal(result, 654);
        });
        it("should transform 100756 -> 33583", () => {
            const result = solver([ 100756 ]);
            assert.equal(result, 33583);
        });

    });

    /*
        A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
        At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
        The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
     */
    describe("level 2", () => {

        it("should transform 14 -> 2", () => {
            const result = solver2([ 14 ]);
            assert.equal(result, 2);
        });

        it("should transform 1969 -> 966", () => {
            const result = solver2([ 1969 ]);
            assert.equal(result, 966);
        });

        it("should transform 100756 -> 50346", () => {
            const result = solver2([ 100756 ]);
            assert.equal(result, 50346);
        });

    });


});
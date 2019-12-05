const { assert } = require("chai");
const { solver, solver2 } = require("./solution");

const _describe = () => void 0;
const _it = () => void 0;

describe("assignment 3", () => {

    describe("level 1", () => {

        it("should calculate the correct manhattan distance 1", () => {
            const result = solver([
                [ "R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72" ],
                [ "U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83" ]
            ]);
            assert.equal(result, 159);
        });

        it("should calculate the correct manhattan distance 2", () => {
            const result = solver([
                [ "R98", "U47", "R26", "D63", "R33", "U87", "L62", "D20", "R33", "U53", "R51" ],
                [ "U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7" ]
            ]);
            assert.equal(result, 135);
        });

    });


    describe("level 2", () => {

        it("should calculate the correct number of steps (small example)", () => {
            const result = solver2([
                [ "R8", "U5", "L5", "D3" ],
                [ "U7", "R6", "D4", "L4" ]
            ]);
            assert.equal(result, 30);
        });

        /*
            R75,D30,R83,U83,L12,D49,R71,U7,L72
            U62,R66,U55,R34,D71,R55,D58,R83 = 610 steps
         */
        it("should calculate the correct number of steps (large example)", () => {
            const result = solver2([
                [ "R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72" ],
                [ "U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83" ]
            ]);
            assert.equal(result, 610);
        });

        /*
            R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
            U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = 410 steps
        */
        it("should calculate the correct number of steps (large example2)", () => {
            const result = solver2([
                [ "R98", "U47", "R26", "D63", "R33", "U87", "L62", "D20", "R33", "U53", "R51" ],
                [ "U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7" ]
            ]);
            assert.equal(result, 410);
        });

    });


});
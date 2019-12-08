const { assert } = require("chai");
const { solver, solver2 } = require("./solution");

const _describe = _it = () => void 0;

describe("assignment 6", () => {

    describe("level 1", () => {

        it("should calculate a simple sum", () => {
            const rows = [
                "COM)B",
                "B)C",
                "C)D",
                "D)E",
                "E)F",
                "B)G",
                "G)H",
                "D)I",
                "E)J",
                "J)K",
                "K)L"
            ];
            const result = solver(rows);
            assert.equal(result, 42);
        });

    });


        describe("level 2", () => {

            it("should calculate steps between (YOU and (SAN", () => {
                const rows = [
                    "COM)B",
                    "B)C",
                    "C)D",
                    "D)E",
                    "E)F",
                    "B)G",
                    "G)H",
                    "D)I",
                    "E)J",
                    "J)K",
                    "K)L",
                    "K)YOU",
                    "I)SAN",
                ];
                const result = solver2(rows, "YOU", "SAN");
                assert.equal(result, 4);
            });

        });


});
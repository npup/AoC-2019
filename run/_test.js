const path = require("path");
const fs = require("fs");

const Mocha = require("mocha");
const mocha = new Mocha();



const runTest = (number, cb) => {
    const testDir = `./${ number }`;

    let files = [];
    try {
        files = fs.readdirSync(testDir);
    } catch (err) {
        console.error("Inget directory funnet för dag", number);
        return cb(false);
    }

    const testFiles = files.filter(fileName =>
        /^test(.*)\.js$/.test(fileName)
    );
    if (0 == testFiles.length) {
        console.error("Inget test funnet för dag", number);
        return cb(false);
    }

    testFiles.forEach(fileName =>
        mocha.addFile(path.join(testDir, fileName))
    );

    // Run the tests.
    mocha.run(failureCount => {
        cb(0 == failureCount);
    });
};

module.exports = {
    runTest
};

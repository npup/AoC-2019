const [ TYPE, NUMBER ] = process.argv.slice(2);
const isTest = /^test$/i.test(TYPE);

if (!isTest) {
    const { fork } = require("child_process");
    fork(`./index.js`, {
        cwd: `./${ NUMBER }`
    });
}
else {
    const { runTest } = require("./_test");
    runTest(NUMBER, ok => {
        process.exit(ok ? 0 : 1);
    });

}
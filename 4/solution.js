const getBounds = input => {
    const [ low, high ] = input.split("-").map(Number);
    return { low, high };
};

const validateIncreasingDigits = input => {
    const digits = input.split("").map(Number);
    return digits.reduce((acc, digit) => {
        const ok = acc.ok && digit >= acc.prev;
        return { ok, prev: digit };
    }, { ok: true, prev: -1 }).ok;
};

const validateDoubleAdjacent = input =>
    /(\d)\1/.test(input);

const validateExactlyDoubleAdjacent = input => {
    const moreThan2DigitsExpr = /(\d)\1{2,}/g;
    const cleaned = input.replace(moreThan2DigitsExpr, " ");
    return validateDoubleAdjacent(cleaned);
};

function* numberGenerator(low, high) {
    let current = low;
    while (current <= high) {
        yield current++;
    }
}

// @return valid password candidates within range, accordng to supplied validators
const findInRange = (low, high, validators) => {
    const numbers = numberGenerator(low, high);
    const candidates = [];
    while (true) {
        let { value: nr, done } = numbers.next();
        if (done) { break; }
        const str = String(nr);
        const ok = validators.every(validate => validate(str));
        if (ok) { candidates.push(str); }
    }
    return candidates;
};

// part 1
const solver = input => {
    const { low, high } = getBounds(input);
    const candidates = findInRange(low, high, [ validateDoubleAdjacent, validateIncreasingDigits ]);
    return candidates.length;
};

// part 2
const solver2 = input => {
    const { low, high } = getBounds(input);
    const candidates = findInRange(low, high, [
        validateExactlyDoubleAdjacent, validateIncreasingDigits
    ]);
    return candidates.length;
};


module.exports = {
    solver,
    solver2,
};
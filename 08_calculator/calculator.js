const add = function (a, b) {
    //if aor b isn't a integer return 0
    return a + b
};

const subtract = function (a, b) {
    return a - b
};

const sum = function (digits) {
    if (Array.isArray(digits) && digits.length === 0) {
        return 0
    }
    return digits.reduce((ac, v) => {
        return ac + v
    }, 0)
};

const multiply = function (digits) {
    if (Array.isArray(digits) && digits.length === 0) {
        return 0
    }
    return digits.reduce((ac, v) => {
        return ac * v
    }, 1);
};

const power = function (a, b) {
    let j = a < 0 ? -1 : 1;
    for (let index = 0; index < b; index++) {
        j *= a
    }
    return j
};

const factorial = function (b) {
    if (Object.is(b, -0)) {
        return -1
    }
    let j = 1;
    for (let index = 1; index <= b; index++) {
        j *= index
    }
    return b < 0 ? j * -1 : j;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
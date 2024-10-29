const repeatString = function(string, num) {
    let repeat = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let index = 0; index < num; index++) {
        repeat += string;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;

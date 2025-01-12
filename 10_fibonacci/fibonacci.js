const fibonacci = function (b) {
    let a = []
    let j = 1;

    if (b < 0) {
        return 'OOPS'
    }

    for (let index = 0; index < b; index++) {
        if (index == 0 || index == 1) {
            a.push(j)
        } else {
            a.push(a[index - 2] + a[index - 1])
        }
    }
    a.unshift(0)
    return a[a.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;

const findTheOldest = function (people) {
    let p = people.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        let aOldestYear = a.yearOfDeath
        let bOldestYear = b.yearOfDeath

        if ('yearOfDeath' in b == false) {
            bOldestYear = currentYear
        }
        if ('yearOfDeath' in a == false) {
            aOldestYear = currentYear
        }
        return (aOldestYear - a.yearOfBirth) - (bOldestYear - b.yearOfBirth)
    })
    return p[p.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;

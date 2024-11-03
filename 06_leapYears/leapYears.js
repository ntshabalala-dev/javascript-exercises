const leapYears = function(year = 0) {
let isLeapYear = false;
    if (year % 4  == 0) {
        isLeapYear = true;;
    }
    if (year % 100 == 0 ) {
        isLeapYear = false
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    }    
    return Number.isInteger(year) ? isLeapYear : false;
};
// Do not edit below this line
module.exports = leapYears;

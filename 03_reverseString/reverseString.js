const reverseString = function(text) {
    let newArray = []
    let stringArray = text.split('');
    let stringArrayLength = stringArray.length;

    for (let index = 0; index < stringArray.length; index++) {
        stringArrayLength -= 1    
        newArray[index] = stringArray[stringArrayLength]  
    }

    return newArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
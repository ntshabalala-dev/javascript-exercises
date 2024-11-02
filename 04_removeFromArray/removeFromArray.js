const removeFromArray = function(array, ...numsToRemove) {
    let copyArray = [...array]
    emptyArray = copyArray.filter(
        // does not include [1, 2].includes(element)
        (element) => ! numsToRemove.includes(element)
    );
    // copyArray.forEach(element => {
    //     index = numsToRemove.includes(element);
    //     if (!index) {
    //         console.log(element);
    //         emptyArray.push(element)
    //     }
    // });
    return emptyArray
};

// // Do not edit below this line
module.exports = removeFromArray;
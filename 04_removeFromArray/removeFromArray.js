const removeFromArray = function() {
    let prevArray = arguments[0];
    let newArray = [];
    const args = Array.prototype.slice.call(arguments, 1);
    prevArray.forEach(element => {
        if (!args.includes(element)) newArray.push(element);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

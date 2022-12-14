const reverseString = string => {
    let text = '';
    for (let i = string.length; i > 0; i--) {
        text += string[i-1];
    }
    return text;
};

// Do not edit below this line
module.exports = reverseString;

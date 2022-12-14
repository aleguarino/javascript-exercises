const repeatString = function(string, num) {
    let text = '';
    if (num < 0) return 'ERROR';
    while (num > 0) {
        text += string;
        --num;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;

const sumAll = function (a, b) {
    if (a < 0 || b < 0 || typeof(a) != 'number' || typeof(b) != 'number') return 'ERROR';
    if (b === a) return b;
    return b + sumAll(a, a > b ? b + 1 : b - 1);
};

// Do not edit below this line
module.exports = sumAll;

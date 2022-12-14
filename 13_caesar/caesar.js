Number.prototype.mod = function (b) {
    // Calculate
    return ((this % b) + b) % b;
}

const caesar = (string, cipher) => {
    let cipherString = '';
    let unicodeValue = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i].match('[a-z]')) unicodeValue = 97;
        else if (string[i].match('[A-Z]')) unicodeValue = 65;
        else {
            cipherString += string[i];
            continue;
        }
        cipherString += String.fromCharCode((string.charCodeAt(i) - unicodeValue + cipher).mod(26) + unicodeValue);
    }
    return cipherString;
}


// Do not edit below this line
module.exports = caesar;

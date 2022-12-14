const palindromes = string => {
    let palindrome = '';
    string = string.replace(/[^a-z0-9]/gi,'').toLowerCase();
    for (let i = string.length; i > 0; i--) palindrome += (string[i - 1]);
    if (palindrome === string) return true;
    return false;
}

// Do not edit below this line
module.exports = palindromes;

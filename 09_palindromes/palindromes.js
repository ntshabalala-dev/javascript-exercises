const palindromes = function (text) {
    text = text.replaceAll(' ', '').toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    let palindrome = '';
    for (let index = text.length - 1; index >= 0; index--) {
        palindrome += text[index];
    }
    return palindrome == text;
};

// Do not edit below this line
module.exports = palindromes;

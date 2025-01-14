function isDigit(char) {
    return !isNaN(char) && char.trim() !== '';
}

console.log(isDigit('5'));
console.log(isDigit('a'));
console.log(isDigit(' '));
console.log(isDigit(''))
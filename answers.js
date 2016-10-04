//This is answers.js
//Function 1: return the first character of a string
function firstLetter(str) {
    return str.substring(0, 1);
}

//function 2: return the last character of a string
function lastCharacter(str) {
    return str.substring(str.length, str.length - 1);
}

//function 3: return the character at indexOf
function getCharacter(str, num) {
    str = str.replace(/\s+/g, '');
    
    if (num > 0) {
        return str.substr(num - 1, 1);
    }
}
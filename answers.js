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

//function 4: add up two numbers
//if I pass a string as an argument, the function will concatenate the two inputs
function addUp(num1, num2) {
    return num1 + num2;
}

//function 5: multiply two numbers
//when passing a string, the function will return NaN
function multiplyThem(num1, num2) {
  return num1 * num2;
}



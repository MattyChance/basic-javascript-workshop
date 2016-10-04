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

//function 6: Numbers, do what the string tells you to!
//
function doWhatYaTold(num1, num2, str) {
    var output = 0;
    switch (str) {
        case 'add':
            // code
            output = num1 + num2;
            break;
        case 'subtract':
            output = Math.abs(num1 - num2);
            break;
        case 'mult':
            output = num1 * num2;
            break;
        case 'div':
            output = num1 / num2;
            break;
    }
    return output;
}

//function 7: repeat the string as many times as the num told!
function repeatMe(str, num){
    return str.repeat(num);
}

//function 8: return the reversed string
function reverseMe(str) {
    var arr = str.split('');
    arr = arr.reverse();
    return arr.join('');
}

//function 9: factorial
//If I pass a negative number, console prints 'error'
function factorial(num) {
    if (num < 0 ) {
        return 'Number has to be a positive integer!';
    }
    else if (num === 0) {
        return 1;
    } 
    else {
        return factorial(num - 1) * num;
    }
}

//function 10: return the longest word in a phrase
function getLongest(str) {
    //change the string into an array
    var arr = str.split(" ");
    //find the index of the longest word in that arr
    var arrOfLength = [];
    for (var i = 0; i < arr.length; i++) {
        arrOfLength.push(arr[i].length);
    
    }
    
    var indexOfTheLongest = arrOfLength.indexOf(Math.max.apply(null, arrOfLength));
    return arr[indexOfTheLongest];
}

//function 11: capitalize the first letter of each word in a phrase
function titleCase(str) {
    var strAllUppercase = str.toUpperCase();
    
    var arr = strAllUppercase.split(' ');
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0] + arr[i].substr(1).toLowerCase();
    }
    
    return arr.join(" ");
}
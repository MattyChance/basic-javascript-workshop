//return the first character of a string
function firstCharacter (str) {
	return str.slice(0, 1);
}

// console.log(firstCharacter(''));

//return the last character of a string
function lastCharacter (str) {
	return str.slice(-1);
}

// console.log(lastCharacter('prac'));

//Write a function that takes a string and a number, 
//and returns the character at the position represented by the number. 
//The indexing of number should start at 0.
function thatCharacter (str, num) {
	return str.charAt(num - 1);
}

// console.log(thatCharacter("character", 3));

//Write a function that takes two numbers and adds them together
function simpleMath(str, num1, num2) {
	switch(str) {
		case 'add':
			return num1 + num2;
			break;
		case 'subtract':
			return num1 - num2;
			break;
		case 'mult':
			return num1 * num2;
			break;
		case 'div':
			return num1 / num2;
			break;
	}	
}
// console.log(simpleMath('div', 3, 4));

function repeatMe(str, num) {
	return str.repeat(num);
}
// console.log(repeatMe('hello', 5))

//Write a function that takes a string, and returns the reverse of that string.
function reverseMe(str) {
	return str.split('').reverse().join('');
	// return Array.prototype.map.call(str, function(letter) {
	// 	return letter;
	// }).reverse().join('')
}

// console.log(reverseMe(''));

//return the factorial of a number
function factorial(num) {
	//return num * num - 1 till it's 1
	if (num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
}

// console.log(factorial(3));

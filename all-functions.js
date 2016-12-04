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

//capitalize
function capitalize(phrase) {
	var newPhraseInArray = phrase.toLowerCase().split(' ').map(function(word) {
		return word[0].toUpperCase() + word.slice(1);
	})
	return newPhraseInArray.join(' ');
}

//Write a function that takes an array and returns the largest number of the array
function findTheLargest(arr) {
	// return Math.max.apply(null, arr);
	return arr.reduce(function(prev, curr) {
		return prev < curr ? curr : prev;
	})
}

// console.log(findTheLargest([3, 45, 8]));

//Write a function that takes an array, and returns a filtered array
function onlyTruthy(arr) {
	// return arr.filter(Boolean);
	return arr.filter(function(value) {
		if(value) {
			return value;
		}
	});
}
// console.log(onlyTruthy([undefined, 3, 'hello', NaN]))

function onlyUnique(arr1, arr2) {
	return arr1.concat(arr2).reduce(function(prev, curr) {
		if (prev.indexOf(curr) === -1) {
			prev.push(curr);
		}
		return prev;
	}, []);
}

// console.log(onlyUnique([1, 2, 3], [2,3,4, 8]));

function DIYmap(arr, somefunction) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = somefunction(arr[i]);
	}
	return arr;
}

// console.log(DIYmap([1, 2, 3], function(x){return x * 3}))
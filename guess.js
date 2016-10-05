var theNum = Math.round(Math.random() * 100);

var guessHistory = [];

var output = document.getElementById('demo');

function guess() {
    var userGuess = prompt('Enter a number between 1 to 100');
    userGuess = parseInt(userGuess);

    document.getElementById('playbutton').innerHTML = 'Play again';
    guessHistory.push(userGuess);
  
//         console.log(guessHistory);

    if (userGuess === theNum) {
        output.innerHTML = 'Congrats! You are a mind reading master!';
    }
    else if (userGuess < theNum) {
        output = 'Wrong answer! Go bigger!';
    }
    else if (userGuess > theNum) {
        output.innerHTML = 'Wrong answer! Go smaller!';
    }

    if (guessHistory.length === 4) {
        output.innerHTML = 'Game Over! The correct number was ' + theNum + '. Your guesses were: ' + guessHistory[0] + ', ' + guessHistory[1] + ', ' + guessHistory[2] + ', ' + guessHistory[3] + '.';
        document.getElementById('playbutton').innerHTML = 'Play';
    }
}

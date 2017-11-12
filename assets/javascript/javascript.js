

	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var userGuess;
	var guessesLeft;
	var guessedLetters; 
	var computerChoice;


	resetGame();
	display();

	document.onkeyup = function(event) {
	var userGuess = event.key;
	if (userGuess === computerChoice) {
    	win();
	} else if (guessesLeft - 1 === 0) {
    	lost();
	} else {
    	fail(userGuess);
	}

	display();
	}

	function display() {
	var winsP = document.getElementById("wins");
	var lossesP = document.getElementById("losses");
	var guessLeft = document.getElementById("guessLeft");
	var letterGuessed = document.getElementById("guessed");
	winsP.innerHTML = wins;
	lossesP.innerHTML = losses;
	guessLeft.innerHTML = guessesLeft;
	letterGuessed.innerHTML = guessedLetters.join(',');
	}

	function win() {
    	wins++;
	resetGame();
	}

	function lost() {
    	losses++;
	resetGame();
	}

	function fail(letter) {
    	guessesLeft--;
	guessedLetters.push(letter);
	}

	function resetGame() {
    	guessesLeft = 10;
    	guessedLetters = [];
	computerChoice = letters[Math.floor(Math.random() * letters.length)];
	}

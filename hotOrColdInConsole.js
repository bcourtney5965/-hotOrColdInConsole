// Meant for play within the console

// Instructions
	// 1.) copy/past code into console
	// 2.) guess = 50; // set guess variable equal to your guess
	// 3.) play(); // call the play funciton
	// 4.) repeat steps 2 & 3 until you win
	// 5.) newGame(); // call the newGame function anytime you want a new game

var userGuesses = [];
var secretNumber;
function newGame() {
	userGuesses = [];
	secretNumber = Math.floor(Math.random() * 100) + 1;
} 
function checkInputType(userinput) {
	var boolTest = userinput;
	var convertedNumber = +userinput;
	var checkNaN = isNaN(convertedNumber);
	if(checkNaN || typeof boolTest === "boolean") {
		return ("That is not a number");
	} else if(convertedNumber >= 101 || convertedNumber <= 0) {
		return ("Please enter a number between 1- 100");
	} else {
		return convertedNumber;
	}
}
function play() {   
	var difference = Math.abs(secretNumber - guess);
	var numOfUserGuesses = userGuesses.length;
	if(userGuesses.length === 0) {
		newGame();
	}
	if(checkInputType(guess) === guess ) {
		userGuesses.push(guess);
		// providing user feedback per bullet #3
		if (secretNumber > guess) { 
		     console.log("Your guess of " + guess + " was too low!");
		} else if (secretNumber < guess) { 
		     console.log("Your guess of " + guess + " was too high!");
		}
		// providing user feedback per bullet #4
		if (secretNumber === guess) {
		     console.log("You guessed correctly! " + secretNumber + " is correct!");
		} else if (difference >= 50) {
		     console.log("You are ice cold");
		} else if (difference >= 30 && difference < 50) {
		     console.log("You are cold");
		} else if (difference >= 20 && difference < 30) {
		     console.log("You are warm");
		} else if (difference >= 10 && difference < 20) {
		     console.log("You are hot");
		} else {
		     console.log("You are very hot");
		}
	}
	if (checkInputType(guess) !== guess ) {
		console.log(checkInputType(guess));
	}
	// Providing number of guesses & which numbers were guessed
	console.log("Number of user guesses: " + numOfUserGuesses + ", numbers guessed: " + userGuesses + ".");
}
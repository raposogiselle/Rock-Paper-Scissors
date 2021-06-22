//Create variables to hold the scores
var wins = 0;
var losses = 0;
var ties = 0;

//computer options
var options = ["R", "P", "S"];

//play game function
function playGame() {

//Ask user for their choice - "Enter R, P, or S"
var userChoice = window
    .prompt("Enter R, P, or S")
    .toUpperCase();

//If user pressed cancel immediately end function.
if (!userChoice) {
    return;
} else if (!options.includes(userChoice)) {
    userChoice = window.prompt("Invalid selection. \nEnter R, P, or S.")
}

//Get random index from array of options and assign to computerChoice
var randomIndex = Math.floor(Math.random() * options.length);
var computerChoice = options[ randomIndex ];

//Alert user of computer choice
window.alert("The computer chose " + computerChoice + "!");

//If choices are the same - its a tie (add to tie and alert)
if (computerChoice === userChoice) {
    window.alert("It's a tie!");
    ties++;
} else if (
    (userchoice === "R" && computerChoice === "S")
    || (userChoice === "P" && computerChoice === "R")
    || (userChoice === "S" && computerChoice === "P")
) {
//Else if - check every win condition for the user (add to wins and alert)
    window.alert("You Won!");
    wins++;
} else {
//Else - assume user lost (add to losses and alert)
    window.alert("You lost!");
    losses++;
}

//Print stats with line breaks and
window.alert("Stats:\nWins: " + wins + " \nLosses: " + losses + " \nTies: " + ties);

//ask user to play again 
var playAgain = window.confirm("Would you like to play again?");

//if user pressed ok, run the function again
if (playAgain) {
    playGame();
}

return;
}

//Call function
playGame();
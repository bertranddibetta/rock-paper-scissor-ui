const choices = ["Rock", "Paper", "Scissor"]; // The array has to be ordered for the game() logic to work
let playerScore = 0;
let compScore = 0;
let round = 1;

function computerPlay () {
    i = Math.floor((Math.random() * 3) + 1);{
        if (i === 1) {
            return "Rock";
        }
        else if (i === 2) {
            return "Paper";
        }
        else return "Scissor";
    }
}

// Make playerInput case insensitive
function fixPlayerInput(input){
    if (input.toLowerCase() === "rock"){
        return "Rock";
    }
    else if (input.toLowerCase() == "paper"){
        return "Paper";
    }
    else if (input.toLowerCase() == "scissor"){
        return "Scissor";
    }
    else {
        return "invalid"
    }
}

// 
function game () {
    for (round; ; ++round) {
        if (playerScore == 3 || compScore == 3){ // change both number here to change needed rounds to win
            break
        }
        let playerInput = prompt("Choose between Rock, Paper or Scissor");
        let playerChoice = fixPlayerInput(playerInput);
        let compChoice = computerPlay();
        let playerIndex = choices.indexOf(playerChoice); // transform input in number according to choices array
        let compIndex = choices.indexOf(compChoice); // transform compChoice in number according to choices array
        if (playerChoice == "invalid"){ // Handles incorrect input
            alert ("Oops, you typed " + playerInput + ". Try again with a correct value !"); 
        }
        else if (playerChoice === compChoice){
            alert ("This is a tie !" + "\n" + "Computer played " + compChoice + "\n" +
            "The score is " + playerScore + " for you vs " + compScore + " for the computer.");
        }
        else if ((((playerIndex - compIndex) % 3 + 3 ) % 3) == 1 ){ // Starts by extracting the lenght then goes through modulo twice to remove negative lenght remainder
            ++playerScore;
            alert ("You win ! " + playerChoice + " beats " + compChoice + "\n" +
            "The score is " + playerScore + " for you vs " + compScore + " for the computer.");
        }
        else { // if result is neither a tie nor a player win it has to be a computer win
            ++compScore;
            alert ("You lose ! " + compChoice + " beats " + playerChoice + "\n" +
            "The score is " + playerScore + " for you vs " + compScore + " for the computer.");
        }
    }
    if (playerScore > compScore) {
        alert ("You win the game !\n" +
        "The final score is " + playerScore + " for you vs " + compScore + " for the computer.")
    }
    else {
        alert ("You lost the game !\n" +
        "The final score is " + playerScore + " for you vs " + compScore + " for the computer.")
    }
}

game();
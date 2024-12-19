// Randomly returns a string value between "rock", "paper" or "scissors"
const getComputerChoice = () => {
    // Randomly pick a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    // Return a specific string depending on which number is picked
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Prompts the user for their choice
const getHumanChoice = () => {
    const userInput = prompt("Rock, paper or scissors?", "");
    return userInput;
}

// Variables to keep track of the scores
let humanScore = 0;
let computerScore = 0;

// Takes both user and computer's choices and finds the winner of the round
const playRound = (humanChoice, computerChoice) => {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    
    // Define winner of round
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock.");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("You lose! Paper beats Rock.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors.");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        console.log("You lose! Rock beats Scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper.");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        console.log("You lose! Scissors beats Paper.");
    } else {
        console.log("It's a tie!");
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
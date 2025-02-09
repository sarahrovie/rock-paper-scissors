const divBtns = document.querySelector("#buttons");
const divResults = document.querySelector("#results");
const rockBtn = document.createElement("btn");
const paperBtn = document.createElement("btn");
const scissorsBtn = document.createElement("btn");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

divBtns.appendChild(rockBtn);
divBtns.appendChild(paperBtn);
divBtns.appendChild(scissorsBtn);

let playerScore = 0;
let computerScore = 0;

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

// Takes both user and computer's choices and finds the winner of the round
const playRound = (humanChoice, computerChoice) => {

    // Variable that returns a value depending on the winner
    let winner;
    
    // Define winner of round
    if (humanChoice === "paper" && computerChoice === "rock") {
        winner = "human";
        result.textContent = "You win! Paper beats Rock.";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        winner = "computer";
        result.textContent = "You lose! Paper beats Rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        winner = "human";
        result.textContent = "You win! Rock beats Scissors.";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        winner = "computer";
        result.textContent = "You lose! Rock beats Scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        winner = "human";
        result.textContent = "You win! Scissors beats Paper.";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        winner = "computer";
        result.textContent = "You lose! Scissors beats Paper.";
    } else {
        result.textContent = "It's a tie!";
    }

    return winner;
}

rockBtn.addEventListener("click", () => {
    const getWinner = playRound("rock", getComputerChoice());
    getScore(getWinner);
});

paperBtn.addEventListener("click", () => {
    const getWinner = playRound("paper", getComputerChoice());
    getScore(getWinner);
});

scissorsBtn.addEventListener("click", () => {
    const getWinner = playRound("scissors", getComputerChoice());
    getScore(getWinner);
})

let score = document.createElement("p");
divResults.appendChild(score);
let result = document.createElement("p");
divResults.appendChild(result);

const getScore = (winner) => {

    if (winner === "human") {
        playerScore++;
    }
    else if (winner === "computer") {
        computerScore++;
    }

    if (playerScore === 5) {
        result.textContent = "You won the game! Congrats!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        result.textContent = "You lost... Try again!";
        playerScore = 0;
        computerScore = 0;
    }

     score.textContent = `You: ${playerScore} Computer: ${computerScore}`
}
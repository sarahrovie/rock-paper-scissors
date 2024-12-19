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

// Takes both user and computer's choices and finds the winner of the round
const playRound = (humanChoice, computerChoice) => {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Variable that returns a value depending on the winner
    let winner;
    
    // Define winner of round
    if (humanChoice === "paper" && computerChoice === "rock") {
        winner = "human";
        console.log("You win! Paper beats Rock.");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        winner = "computer";
        console.log("You lose! Paper beats Rock.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        winner = "human";
        console.log("You win! Rock beats Scissors.");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        winner = "computer";
        console.log("You lose! Rock beats Scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        winner = "human";
        console.log("You win! Scissors beats Paper.");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        winner = "computer";
        console.log("You lose! Scissors beats Paper.");
    } else {
        console.log("It's a tie!");
    }

    return winner;
}

// Plays 5 rounds of the game
const playGame = () => {

    // Variables to keep track of the scores
    let humanScore = 0;
    let computerScore = 0;

    // Play round five times
    for (let i = 1; i < 6; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);

        // Increments score depending on the winner
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        };
    }

    // Outputs message depending on the final score
    if (humanScore > computerScore) {
        console.log("You won! Congratulations!");
    } else if (computerScore > humanScore) {
        console.log("You lost! Try again!");
    } else {
        console.log("It's a tie! Oops!");
    }

    // Outputs final score of both players
    console.log("Your score: " + humanScore + "\n" +
        "Computer's score: " + computerScore
    );
}

playGame();
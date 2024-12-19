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

console.log(getComputerChoice());
console.log(getHumanChoice());
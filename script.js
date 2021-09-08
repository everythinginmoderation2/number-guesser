let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    const randomInt = Math.floor(Math.random() * 10)
    return randomInt;
}

const getAbsoluteDistance = (guess, target) => Math.abs(guess - target)

const compareGuesses = (human, computer, target) => {
    const humanRange = getAbsoluteDistance(human, target)
    const computerRange = getAbsoluteDistance(computer, target)
    const result = humanRange < computerRange || humanRange == computerRange ? true : false;
    return result
}

const updateScore = (winner) => {
    winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => currentRoundNumber++
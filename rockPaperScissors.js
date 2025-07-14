function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}


function playRound(humanChoice) {
    const validChoices = ["rock", "paper", "scissors"];
    let computerChoice = getComputerChoice();

    if (!validChoices.includes(humanChoice)) {
        updateGameMessage("Invalid choice! Please enter rock, paper, or scissors.");
        return "invalid";
    }

    updateChoicesDisplay(humanChoice, computerChoice);

    if (humanChoice === computerChoice) {
        updateRoundResult(`Tie! Both chose ${humanChoice}.`);
        return "tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        updateRoundResult(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        updateRoundResult(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

//game state variables
let totalRounds = 5;
let currentRound = 0;
let humanScore = 0;
let computerScore = 0;
let gameActive = false;

function startNewGame() {
    currentRound = 0;
    humanScore = 0;
    computerScore = 0;
    gameActive = true;
    updateGameMessage(`Starting new game with ${totalRounds} rounds!`);
    updateScore();
    updateRoundCounter();
    clearRoundResult();
    clearFinalResult();
}



function playGameRound(humanChoice)  {
    if (!gameActive) {
        updateGameMessage("Please set the number of rounds first!");
        return;
    }

    if (currentRound >= totalRounds) {
        updateGameMessage("Game is over! Set new rounds to play again.");
        return;
    }

    let result = playRound(humanChoice);

    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    }

    currentRound++;
    updateScore();
    updateRoundCounter();

    if (currentRound >= totalRounds) {
        endGame();
    }
}

function endGame() {
    gameActive = false;
    let finalMessage = "";
    if (humanScore === computerScore) {
        finalMessage = "It's a tie!"
    } else if (humanScore > computerScore) {
        finalMessage = "You win the game!"
    } else {
        finalMessage = "Computer wins the game!";
    }
    updateFinalResult(finalMessage);
    updateGameMessage("Game Over! Set new rounds to play again.");
}

//UI Update Functions

function updateChoicesDisplay(humanChoice, computerChoice) {
    const choicesDisplay = document.querySelector("#choicesDisplay");
    if (choicesDisplay) {
        choicesDisplay.innerHTML = `
            <div>You chose: <strong>${humanChoice}</strong></div>
            <div>Computer chose: <strong>${computerChoice}</strong></div>
        `;
    }
}

function updateGameMessage(message) {
    const gameMessage = document.querySelector("#gameMessage");
    if (gameMessage) {
        gameMessage.textContent = message;
    }
}

function updateRoundResult(message) {
    const roundResult = document.querySelector("#roundResult");
    if (roundResult) {
        roundResult.textContent = message;
    }
}

function updateScore() {
    const scoreDisplay = document.querySelector("#score");
    if (scoreDisplay) {
        scoreDisplay.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
    }
}

function updateRoundCounter() {
    const roundCounter = document.querySelector("#roundCounter");
    if (roundCounter) {
        roundCounter.textContent = `Round: ${currentRound}/${totalRounds}`;
    }
}

function updateFinalResult(message) {
    const finalResult = document.querySelector("#finalResult");
    if (finalResult) {
        finalResult.textContent = message;
        finalResult.style.display = "block";
    }
}

function clearRoundResult() {
    const roundResult = document.querySelector("#roundResult");
    if (roundResult) {
        roundResult.textContent = "";
    }
}

function clearFinalResult() {
    const finalResult = document.querySelector("#finalResult");
    if (finalResult) {
        finalResult.textContent = "";
        finalResult.style.display = "none";
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const input = document.querySelector("#rounds");
const btn = document.querySelector("#roundsBtn");

function storeValue() {
    const rounds = parseInt(input.value);
    if (input.value === "" || isNaN(rounds) || rounds <= 0) {
        alert("Enter a valid amount of rounds!");
        return;
    }
    totalRounds = rounds;
    input.value = "";
    startNewGame();
}

btn.addEventListener("click", storeValue);
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        storeValue();
    }
})



rock.addEventListener("click", () => playGameRound("rock"));
paper.addEventListener("click", () => playGameRound("paper"));
scissors.addEventListener("click", () => playGameRound("scissors"));


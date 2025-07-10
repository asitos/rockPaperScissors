function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = (prompt("Enter your choice: ")).toLowerCase();

    return choice;
}

function playRound() {
    const validChoices = ["rock", "paper", "scissors"];
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (!validChoices.includes(humanChoice)) {
        console.log("Invalid choice! Please enter rock, paper, or scissors.");
        return "invalid";
    }

    if (humanChoice === computerChoice) {
        console.log(`Tie! Both chose ${humanChoice}.`);
        return "tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

function playGame()  {
    let humanScore = 0;
    let computerScore = 0;

    let rounds = parseInt(prompt("Enter the number of rounds: "));

    for (let i = 0; i < rounds; i++) {
        let result = playRound();
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        } else if (result === "invalid") {
            i--;
        }
    }

    if (humanScore === computerScore) {
        console.log("It is a tie");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

playGame();

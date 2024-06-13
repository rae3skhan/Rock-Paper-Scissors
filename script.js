function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice;
  while (true) {
    humanChoice = prompt("Enter the choice(rock,paper,scissors)");
    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    )
      break;
    else {
      alert("Invalid choice! please try again");
    }
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "Tie!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    return "you lose";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "you win";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    return "you lose";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "you win";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    console.log(result);

    if (result.includes("Win")) {
      humanScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();

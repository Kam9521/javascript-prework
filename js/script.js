// Scores
let playerScore = 0;
let computerScore = 0;
// Function returns move name based on number
function getMoveName(argMoveId) {
  if (argMoveId === 1) {
    return "rock";
  } else if (argMoveId === 2) {
    return "paper";
  } else if (argMoveId === 3) {
    return "scissors";
  } else {
    printMessage("Unknown move id: " + argMoveId);
    return "unknown move";
  }
}

// Function displays game result and updates score
function displayResult(argComputerMove, argPlayerMove) {
  printMessage("Computer played: " + argComputerMove);
  printMessage("You played: " + argPlayerMove);

  if (argPlayerMove === "unknown move") {
    printMessage("Wrong input!");
    return;
  }

  if (argComputerMove === argPlayerMove) {
    printMessage("Draw!");
    return;
  }

  let playerWon = false;

  if (argComputerMove === "rock" && argPlayerMove === "paper") {
    playerWon = true;
  } else if (argComputerMove === "paper" && argPlayerMove === "scissors") {
    playerWon = true;
  } else if (argComputerMove === "scissors" && argPlayerMove === "rock") {
    playerWon = true;
  }

  if (playerWon === true) {
    printMessage("You win!");
    playerScore++;
  } else {
    printMessage("Computer wins!");
    computerScore++;
  }

  document.getElementById("result").innerHTML =
    playerScore + " - " + computerScore;
}

// Function starts the game
function playGame(playerInput) {
  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);
}

// Rock button listener
document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});

// Paper button listener
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});

// Scissors button listener
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});

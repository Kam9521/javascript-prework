// Function returns move name based on number
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "rock";
  } else if (argMoveId == 2) {
    return "paper";
  } else if (argMoveId == 3) {
    return "scissors";
  } else {
    printMessage("Unknown move id: " + argMoveId);
    return "unknown move";
  }
}

// Function displays game result
function displayResult(argComputerMove, argPlayerMove) {
  printMessage("Computer played: " + argComputerMove);
  printMessage("You played: " + argPlayerMove);

  if (argComputerMove == argPlayerMove) {
    printMessage("Draw!");
  } else if (argComputerMove == "rock" && argPlayerMove == "paper") {
    printMessage("You win!");
  } else if (argComputerMove == "paper" && argPlayerMove == "scissors") {
    printMessage("You win!");
  } else if (argComputerMove == "scissors" && argPlayerMove == "rock") {
    printMessage("You win!");
  } else if (argPlayerMove == "unknown move") {
    printMessage("Wrong input!");
  } else {
    printMessage("Computer wins!");
  }
}

// Clear messages
clearMessages();

// Random number for computer
let randomNumber = Math.floor(Math.random() * 3 + 1);

// Get computer move from function
let computerMove = getMoveName(randomNumber);

// Get player move
let playerInput = prompt("Choose your move: 1-rock, 2-paper, 3-scissors");

// Convert player input to move name
let playerMove = getMoveName(playerInput);

// Display result
displayResult(computerMove, playerMove);

// Clear messages at the start
clearMessages();

// Random number from 1 to 3
let randomNumber = Math.floor(Math.random() * 3 + 1);

// Computer move
let computerMove = "unknown move";

if (randomNumber == 1) {
  computerMove = "rock";
} else if (randomNumber == 2) {
  computerMove = "paper";
} else if (randomNumber == 3) {
  computerMove = "scissors";
}

// Display computer move
printMessage("Computer played: " + computerMove);

// Player move
let playerInput = prompt("Choose your move: 1-rock, 2-paper, 3-scissors");

let playerMove = "unknown move";

if (playerInput == 1) {
  playerMove = "rock";
} else if (playerInput == 2) {
  playerMove = "paper";
} else if (playerInput == 3) {
  playerMove = "scissors";
}

// Display player move
printMessage("You played: " + playerMove);

// Game result
if (computerMove == playerMove) {
  printMessage("Draw!");
} else if (computerMove == "rock" && playerMove == "paper") {
  printMessage("You win!");
} else if (computerMove == "paper" && playerMove == "scissors") {
  printMessage("You win!");
} else if (computerMove == "scissors" && playerMove == "rock") {
  printMessage("You win!");
} else if (playerMove == "unknown move") {
  printMessage("Wrong input!");
} else {
  printMessage("Computer wins!");
}

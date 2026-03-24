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

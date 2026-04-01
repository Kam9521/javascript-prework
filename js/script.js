{
  // Store game scores
  let playerScore = 0;
  let computerScore = 0;

  // Store result element reference
  const resultElement = document.getElementById('result');
  const rockButton = document.getElementById('play-rock');
  const paperButton = document.getElementById('play-paper');
  const scissorsButton = document.getElementById('play-scissors');

  // Return move name based on move id
  const getMoveName = function (argMoveId) {
    if (argMoveId === 1) {
      return 'rock';
    } else if (argMoveId === 2) {
      return 'paper';
    } else if (argMoveId === 3) {
      return 'scissors';
    } else {
      printMessage('Unknown move id: ' + argMoveId);
      return 'unknown move';
    }
  };

  // Display round result and update score
  const displayResult = function (argComputerMove, argPlayerMove) {
    printMessage('Computer played: ' + argComputerMove);
    printMessage('You played: ' + argPlayerMove);

    if (argComputerMove === argPlayerMove) {
      printMessage('Draw!');
      return;
    }

    if (
      (argComputerMove === 'rock' && argPlayerMove === 'paper') ||
      (argComputerMove === 'paper' && argPlayerMove === 'scissors') ||
      (argComputerMove === 'scissors' && argPlayerMove === 'rock')
    ) {
      printMessage('You win!');
      playerScore++;
    } else if (argPlayerMove === 'unknown move') {
      printMessage('Wrong input!');
    } else {
      printMessage('Computer wins!');
      computerScore++;
    }

    resultElement.innerHTML = playerScore + ' - ' + computerScore;
  };

  // Start game round
  const playGame = function (playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
  };

  // Handle player move after button click
  const handleClick = function (playerMove) {
    playGame(playerMove);
  };

  // Add listener for rock button
  rockButton.addEventListener('click', function () {
    handleClick(1);
  });

  // Add listener for paper button
  paperButton.addEventListener('click', function () {
    handleClick(2);
  });

  // Add listener for scissors button
  scissorsButton.addEventListener('click', function () {
    handleClick(3);
  });
}

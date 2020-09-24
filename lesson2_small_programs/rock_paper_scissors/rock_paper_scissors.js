const readline = require('readline-sync');
const WIN_TABLE = {
  r: { long: 'rock', beats: ['sc', 'l'] },
  p: { long: 'paper', beats: ['r', 'sp'] },
  sc: { long: 'scissors', beats: ['p', 'l'] },
  l: { long: 'lizard', beats: ['sp', 'p'] },
  sp: { long: 'spock', beats: ['sc', 'r'] }
};
const VALID_CHOICES = Object.keys(WIN_TABLE);
const RESULT_PROMPTS = {
  win: 'You win!',
  lose: 'Computer wins!',
  tie: "It's a tie!"
};

let playerWins, computerWins, ties, round;

function prompt(message) {
  console.log(`=> ${message}`);
}

function whoWon(choice, computerChoice) {
  let result;
  if ((WIN_TABLE[choice].beats).includes(computerChoice)) {
    result = 'win';
  } else if ((WIN_TABLE[computerChoice].beats).includes(choice)) {
    result = 'lose';
  } else {
    result = 'tie';
  }
  return result;
}

function tallyScore(result) {
  if (result === 'win') {
    playerWins += 1;
  } else if (result === 'lose') {
    computerWins += 1;
  } else {
    ties += 1;
  }
  round += 1;
}

function displayWinner(choice, computerChoice, result) {
  let yourChoiceLong = WIN_TABLE[choice].long;
  let computerChoiceLong = WIN_TABLE[computerChoice].long;

  prompt(`You chose ${yourChoiceLong}, computer chose ${computerChoiceLong}`);
  prompt(RESULT_PROMPTS[result]);
  prompt(`Player Wins: ${playerWins}`);
  prompt(`Computer Wins: ${computerWins}`);
  prompt(`Total Ties: ${ties}\n`);
}

function isChoiceValid(choice) {
  return VALID_CHOICES.includes(choice);
}

function displayOptions() {
  prompt(`(ROUND ${round})`);
  let choicePrompt = 'Choose one:';
  for (let key in WIN_TABLE) {
    choicePrompt += ` ${WIN_TABLE[key].long}(${key})`;
  }
  prompt(choicePrompt);
}

function displayFinalWinner() {
  let finalWinner = 'Player';
  if (playerWins < computerWins) {
    finalWinner = 'Computer';
  }
  prompt(`Final Winner is: ${finalWinner}!\n`);
}

function initializeGame() {
  playerWins = 0;
  computerWins = 0;
  ties = 0;
  round = 1;
}

function playNewGame() {
  initializeGame();

  while (playerWins < 5 && computerWins < 5) {
    displayOptions();
    let choice = readline.question();

    while (!isChoiceValid(choice)) {
      prompt("That's not a valid choice");
      displayOptions();
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    let result = whoWon(choice, computerChoice);
    tallyScore(result);
    displayWinner(choice, computerChoice, result);
  }
  displayFinalWinner();
}


// Game Starts
prompt('Welcome to the Rock, Paper, Scissors ... and Spocks and Lizard game!');

let anotherGame;
do {
  playNewGame();

  while (anotherGame !== 'y' && anotherGame !== 'n') {
    prompt('Would you like to play another game? (y/n)');
    anotherGame = readline.question().trim().toLowerCase();
    if (anotherGame !== 'y' && anotherGame !== 'n') {
      prompt('Invalid Input!');
    }
  }

} while (anotherGame !== 'n ');

prompt('Thank you for trying out the game! Good Bye!');

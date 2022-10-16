const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    if (gameIsRunning) {
        return;
    }

    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`).toUpperCase();

    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
        return;
    }

    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();

    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

// Always better to define default arguments at the end of the function declaration ().
// You can also reference other arguments in the default arguments. For example:
// const getWinner = (cChoice, pChoice = cChoice === ROCK ? PAPER : DEFAULT_CHOICE) 
const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) => cChoice === pChoice ? RESULT_DRAW : 
(cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;


// By adding a name for the function, you can see where an error occurs.
startGameBtn.addEventListener('click', () => {
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;

    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice, DEFAULT_CHOICE);
    }
    
    let message = `You picked ${playerChoice || DEFAULT_CHOICE}, computer picked ${computerChoice}, therefore you `;

    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }

    alert(message);
    gameIsRunning = false;
});

// Not related to game logic.
// Rest operator (...) is used to copy an array or pass an array as arguments to a function or
// pass any number of arguments to a function.
// Rest operator must be the last parameter in a function.
const sumUp = (...numbers) => {

    // A function inside a function.
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }

    let sum = 0;

    for (const num of numbers) {
        sum += validateNumber(num);
    }

    return sum;
}

// Spread operator (...) is used to split up array elements or object properties.

// Functions have a default value of arguments if no values are passed.
const subtractUp = function() {
    let sum = 0;    
    for (const num of arguments) {
        sum -= num;
    }
    return sum;
}

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(subtractUp());

console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp());
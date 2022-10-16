const startGameBtns = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}

// Expression function and can only be called by calling the const start.
const start = function aGame() {
    console.log('A Game is starting...');
}

const anon = function() {
    console.log('Anon is starting...');
}

// You can add functions to objects like this.
// This example also contains an anonymous function.
const person = {
    greet: function() {
        console.log('Hello there!');
    },
    anonymous: () => {
        console.log('Hello there, I am anonymous!');
    }
}

// Then you can call the function like this.
person.greet();
person.anonymous();

// Functions are also objects, so you can add properties to them.
console.log(typeof startGame);
console.dir(startGame);

startGameBtns.addEventListener('click', startGame);
// startGameBtn.addEventListener('click', start);
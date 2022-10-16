const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// ` is called a template literal
// let calculationDescription = `(${defaultResult} + ${currentResult}) * 3 / 2 - 1`;

// Get the user input from the input field.
function getUserNumberInput() {
    // parseInt() converts a string to a number and  gives more control over the conversion
    // currentResult = currentResult + parseInt(userInput.value);
    // By adding the + in front of userInput.value, we are converting the string to a number.
    return +userInput.value;
}

// Create and write output to the window.
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription);
}

// Clear and focus the input field.
function clearAndFocus() {
    userInput.value = null;
    userInput.focus();
}

// Log the entries.
function logEntry(operation, initialResult, enteredNumber, currentResult) {
    const logEntry = { operation: operation, previousResult: initialResult, number: enteredNumber, result: currentResult };
    logEntries.push(logEntry);

    // To access JavaScript objects, we use the dot notation.
    console.log(logEntry.operation);

    // Log the entries to the console.
    console.log(logEntries);
}

// // Addition function.
// function add() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult += enteredNumber;
//     createAndWriteOutput('+', initialResult, enteredNumber);
//     clearAndFocus();
//     logEntry('ADD', initialResult, enteredNumber, currentResult);
// }

// // Subtract function.
// function subtract() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult -= enteredNumber;
//     createAndWriteOutput('-', initialResult, enteredNumber);
//     clearAndFocus();
//     logEntry('SUBTRACT', initialResult, enteredNumber, currentResult);
// }

// // Multiplication function.
// function multiply() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult *= enteredNumber;
//     createAndWriteOutput('*', initialResult, enteredNumber);
//     clearAndFocus();
//     logEntry('MULTIPLY', initialResult, enteredNumber, currentResult);
// }

// // Division function.
// function divide() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult /= enteredNumber;
//     createAndWriteOutput('/', initialResult, enteredNumber);
//     clearAndFocus();
//     logEntry('DIVIDE', initialResult, enteredNumber, currentResult);
// }

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (operation === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (operation === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    clearAndFocus();
    logEntry(operation, initialResult, enteredNumber, currentResult);
}

// Event listeners.
// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);

// Pre-configured function binding with the bind() method.
// Due to bind, the add, subtract etc. functions are no longer required, because the logic now resides in the calculate() function.
addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
document.addEventListener('DOMContentLoaded', () => {
    userInput.focus();
});

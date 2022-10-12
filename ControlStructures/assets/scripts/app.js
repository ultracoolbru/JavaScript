const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

document.addEventListener('DOMContentLoaded', () => {
    userInput.focus();
});

// ` is called a template literal
// let calculationDescription = `(${defaultResult} + ${currentResult}) * 3 / 2 - 1`;

// == equality operator
// === equality and type operator (preferred over ==)

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

// Calculate the result.
function calculateRestult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        // Truthy and falsy values
        !enteredNumber) {
        return;
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    logEntry(calculationType, initialResult, enteredNumber, currentResult);
    clearAndFocus();
}

// Addition function.
function add() {
    calculateRestult('ADD');

}

// Subtract function.
function subtract() {
    calculateRestult('SUBTRACT');
}

// Multiplication function.
function multiply() {
    calculateRestult('MULTIPLY');
}

// Division function.
function divide() {
    calculateRestult('DIVIDE');
}

// Event listeners.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


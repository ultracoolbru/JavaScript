const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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

// Addition function.
function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    clearAndFocus();
    logEntry('ADD', initialResult, enteredNumber, currentResult);
}

// Subtract function.
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    clearAndFocus();
    logEntry('SUBTRACT', initialResult, enteredNumber, currentResult);
}

// Multiplication function.
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    clearAndFocus();
    logEntry('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// Division function.
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    clearAndFocus();
    logEntry('DIVIDE', initialResult, enteredNumber, currentResult);
}

// Event listeners.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
document.addEventListener('DOMContentLoaded', () => {
    userInput.focus();
});

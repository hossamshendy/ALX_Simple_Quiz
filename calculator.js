// calculator.js

// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract second number from first number
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to divide first number by second number
function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Function to handle button click for the respective operation
function handleButtonClick(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;

    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
        default:
            result = 'Unknown operation';
    }

    document.getElementById('calculation-result').textContent = result;
}

// Attach event listeners to buttons
document.getElementById('add').addEventListener('click', function() {
    handleButtonClick('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    handleButtonClick('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    handleButtonClick('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    handleButtonClick('divide');
});

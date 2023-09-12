let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput !== '') {
        if (operator !== '') {
            calculate();
        }
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function clear() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function allclear() {
    currentInput = '';
    updateDisplay();
}

function allClear() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function calculate() {
    if (firstOperand !== '' && currentInput !== '') {
        secondOperand = currentInput;
        currentInput = '';
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        firstOperand = '';
        secondOperand = '';
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    if (operator) {
        display.value = `${firstOperand} ${operator} ${currentInput}`;
    } else {
        display.value = currentInput;
    }
}



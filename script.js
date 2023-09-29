let numA = '';
let numB = '';
let result = '';
let operator;
let equals = false;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return b - a;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b / a;
}
function operate() {
    if (numB) {
        switch (operator) {
            case '+': result = add(+numA, +numB); break;
            case '-': result = subtract(numA, numB); break;
            case '*': result = multiply(numA, numB); break;
            case '/': result = divide(numA, numB); break;
        }
    }
    if (!numB) {
        numB = numA;
    } else {
        const display = document.querySelector('.calculator-display');
        display.textContent = result.toString().slice(0, 9);
        numB = result;
    }
    numA = '';
}
function addButtonEvents() {
    const digitContainer = document.querySelector('.digit-container');
    const digits = digitContainer.querySelectorAll('button');
    digits.forEach(digit => {
        digit.addEventListener('click', updateDisplayNum)
    });

    const operatorContainer = document.querySelector('.operators');
    const operatorButtons = operatorContainer.querySelectorAll('button');
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', updateOperator);
        operatorButton.addEventListener('click', operate);
    })

    const clearButton = document.querySelector('.AC');
    clearButton.addEventListener('click', clear);
    clearButton.addEventListener('click', updateDisplayNum);

    const plusMinus = document.querySelector('.plus-minus');
    plusMinus.addEventListener('click', updateDisplayNum);

    const percent = document.querySelector('.percent');
    percent.addEventListener('click', updateDisplayNum);
}

function clear() {
    numA = '';
    numB = '';
    result = '';
    operator = '';
}


function updateDisplayNum(e) {
    const display = document.querySelector('.calculator-display');
    if (e.srcElement.innerHTML == 'AC') {
        display.textContent = numA;
    } else if (e.srcElement.className == 'plus-minus') {
        if (numA == '') {
            result = result * -1;
            display.textContent = result;
        } else {
            numA *= -1;
            display.textContent = numA;
        }
    }  else if (e.srcElement.className == 'percent') {
        if (numA == '') {
            result = result / 100;
            display.textContent = result;
        } else {
            numA /= 100;
            display.textContent = numA;
        }
    } else if (e.srcElement.innerHTML == '.') {
        if (!numA.includes('.')) {
            numA += e.srcElement.innerHTML;
            display.textContent = numA;
        }
    }
    
    else {
        numA += e.srcElement.innerHTML;
        display.textContent = numA;
    }
}

function updateOperator(e) {
    if (e.srcElement.innerHTML !== '=') {
        operator = e.srcElement.innerHTML;
    }
    if (numA == '') {
        numA = result;
        numB = '';
    }
    console.log(operator);
}
addButtonEvents();
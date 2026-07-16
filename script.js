function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let number1;
let operator;
let number2;

function operate(operator, number1, number2) {
    if(operator == "+")
    {
        return add(number1, number2);
    }

    else if(operator == "-")
    {
        return subtract(number1, number2);
    }

    else if(operator == "*")
    {
        return multiply(number1, number2);
    }

    else if(operator == "/")
    {
        return divide(number1, number2);
    }
}
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
    if(num2 === 0)
    {
        return "Can't divide by 0!";
    }
    
    else 
    {
        return num1 / num2;
    }
}

let number1 = "";
let operator = "";
let number2 = "";

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

const numberButtons = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operate");
const equals = document.querySelector(".equals");
const AC = document.querySelector(".delete");
const back = document.querySelector(".back")

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(operator === "")
        {
            number1 += button.textContent;
            display.textContent = number1
        }

        else
        {
            number2 += button.textContent;
            display.textContent = number2;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.textContent === "x")
        {
            operator = "*";
        }

        else
        {
            operator = button.textContent;
        }

        display.textContent = `${number1} ${button.textContent}`;
    });
});

equals.addEventListener("click", () => {
    if (number1 === "" || operator === "" || number2 === "") {
        return;
    }

    const result = operate(operator, Number(number1), Number(number2));
    
    display.textContent = result;
    number1 = result.toString();
    number2 = "";
    operator = "";
});

AC.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    operator = "";
    display.textContent = "0";
})

back.addEventListener("click", () => {
    if(operator === "")
    {
        number1 = number1.slice(0, -1);
        display.textContent = number1 || 0;
    }

    else 
    {
        number2 = number2.slice(0, -1);
        display.textContent = number2 || 0;
    }
})
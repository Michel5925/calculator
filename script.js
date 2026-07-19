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
    
    return num1 / num2;
}

let number1 = "";
let operator = "";
let number2 = "";

function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
    }
}

const numberButtons = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operate");
const equals = document.querySelector(".equals");
const AC = document.querySelector(".delete");
const back = document.querySelector(".back");
const decimal = document.querySelector(".decimal");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(operator === "")
        {
            number1 += button.textContent;
            updateDisplay(number1);

        }

        else
        {
            number2 += button.textContent;
            updateDisplay(number2);
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (number1 !== "" && operator !== "" && number2 !== "") {
            calculate();
        }

        if(button.textContent === "x")
        {
            operator = "*";
        }

        else
        {
            operator = button.textContent;
        }

        updateDisplay(`${number1} ${button.textContent}`);
    });
});

equals.addEventListener("click", () => {
    if (number1 === "" || operator === "" || number2 === "") {
        return;
    }

    calculate();
});

AC.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    operator = "";
    updateDisplay("0");
});

back.addEventListener("click", () => {
    if(number2 !== "")
    {
        number2 = number2.slice(0, -1);
        updateDisplay(number2 || 0);
    }
    else if(operator !== "")
    {
        operator = ""
        updateDisplay(number1);
    }

    else 
    {
        number1 = number1.slice(0, -1);
        updateDisplay(number1 || 0);
    }
});

decimal.addEventListener("click", () => {
    if(operator === "")
    {
        if(!number1.includes("."))
        {
            if(number1 === "")
            {
                number1 = "0.";
            }

            else
            {
                number1 += ".";
            }

            updateDisplay(number1);
        }
    }

    else 
    {
        if(!number2.includes("."))
        {
            if(number2 === "")
            {
                number2 = "0.";
            }

            else
            {
                number2 += ".";
            }

            updateDisplay(number2);
        }
    }
});

// Keyboard support
document.addEventListener("keydown", (event) => {

    // Numbers
    const button = [...numberButtons].find(
        btn => btn.textContent === event.key
    );

    // Triggering button clicks
    if(button)
    {
        button.click();
    }

    // Operators
    if (event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/") {
    
        const button = [...operatorButtons].find(btn => {
            if (event.key === "*") {
                return btn.textContent === "x";
            }
    
            return btn.textContent === event.key;
        });
    
        if (button) {
            button.click();
        }
    }

    // Equals
    if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        equals.click();
    }

    // Decimal
    if (event.key === ".") {
        decimal.click();
    }

    // Backspace
    if (event.key === "Backspace") {
        event.preventDefault();
        back.click();
    }

    // Delete
    if (event.key === "Escape") {
        AC.click();
    }
});

// Helper function for updating the display
function updateDisplay(text) {
    display.textContent = text;
    updateFontSize();
}

// Updates the font size as the number gets larger
function updateFontSize() {
    const length = display.textContent.length;

    if (length <= 16) {
        display.style.fontSize = "32px";
        return;
    }

    const size = Math.max(16, 32 - (length - 16) * 2);

    display.style.fontSize = `${size}px`;
}

function calculate() {
    const result = operate(operator, Number(number1), Number(number2));

    if (typeof result === "string") 
    {
        updateDisplay(result);
        number1 = "";
    } 
    
    else 
    {
        number1 = result.toString(); 
        updateDisplay(Number(result.toFixed(6))); // Only shows up to 6 numbers are decimal point
    }

    number2 = "";
    operator = "";
}
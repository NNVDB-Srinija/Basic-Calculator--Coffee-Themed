const display = document.getElementById("display");

function appendtoDisplay(input) {
    const lastChar = display.value.slice(-1);
    const operators = "+-*/";

    // Prevent double operators
    if (operators.includes(lastChar) && operators.includes(input)) {
        return;
    }

    // Prevent multiple decimals in a number
    const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
    if (input === "." && lastNumber.includes(".")) {
        return;
    }

    display.value += input;
}

function cleardisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR";
    }
}

// Optional: Add keyboard support
document.addEventListener("keydown", function (e) {
    if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
        appendtoDisplay(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (e.key === "Escape") {
        cleardisplay();
    }
});

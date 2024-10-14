const display = document.getElementById("display");
function setupCalculator() {
    function handleButtonClick(event) {
        if (event.target.tagName === "BUTTON") {
            const buttonText = event.target.textContent;

            if (buttonText == "CE") return cleanAllDisplay();
            if (buttonText == "⌫") return deleteLastCaracter();
            if (buttonText == "1/x") return inverse();
            if (buttonText == "x²") return pow();
            if (buttonText == "%") return percent();
            if (buttonText == "√") return sqrRootO();

            if (
                isOperator(buttonText) &&
                isOperator(display.value[display.value.length - 1])
            ) {
                return buttonText;
            }
            display.value += buttonText;
        }
    }

    document
        .querySelector("section")
        .addEventListener("click", handleButtonClick);
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function cleanAllDisplay() {
    display.value = "";
}

function deleteLastCaracter() {
    display.value = display.value.slice(0, -1);
}

function inverse() {
    if (display.value[display.value.length - 1]) {
        return (display.value = 1 / display.value);
    } else {
        return (display.value = "ERROR");
    }
}

function pow() {
    if (display.value[display.value.length - 1]) {
        return (display.value = display.value ** 2);
    } else {
        return (display.value = 0);
    }
}

function percent() {
    if (display.value[display.value.length - 1]) {
        return (display.value = display.value / 100);
    } else {
        return (display.value = "ERROR");
    }
}

function sqrRoot() {
    if (display.value[display.value.length - 1]) {
        return (display.value = Math.sqrt(display.value));
    } else {
        return (display.value = "ERROR");
    }
}

setupCalculator();

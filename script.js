function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
let display = document.getElementById("display");

// Add numbers or symbols to the screen
function appendValue(value) {
    display.value += value;
}

// Clear everything
function clearDisplay() {
    display.value = "";
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    if (
        (event.key >= "0" && event.key <= "9") ||
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "."
    ) {
        appendValue(event.key);
    }

    if (event.key === "Enter") {
        calculate();
    }

    if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});



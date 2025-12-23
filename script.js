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
<script>
    const display = document.getElementById("display");

    function appendValue(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }

    /* ===== KEYBOARD SUPPORT ===== */
    document.addEventListener("keydown", function (e) {
        if ("0123456789+-*/.".includes(e.key)) {
            appendValue(e.key);
        }

        if (e.key === "Enter") {
            e.preventDefault();
            calculate();
        }

        if (e.key === "Backspace") {
            display.value = display.value.slice(0, -1);
        }

        if (e.key === "Escape") {
            clearDisplay();
        }
    });
</script>




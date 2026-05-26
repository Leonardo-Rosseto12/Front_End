const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", () => {
    let c = parseFloat(celsius.value);

    if (!isNaN(c)) {
        fahrenheit.value = ((c * 9 / 5) + 32).toFixed(2);
    } else {
        fahrenheit.value = "";
    }
});

fahrenheit.addEventListener("input", () => {
    let f = parseFloat(fahrenheit.value);

    if (!isNaN(f)) {
        celsius.value = ((f - 32) * 5 / 9).toFixed(2);
    } else {
        celsius.value = "";
    }
});
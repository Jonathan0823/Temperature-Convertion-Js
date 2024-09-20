
const convert = document.getElementById("convert");
const result = document.getElementById("result");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const number = document.getElementById("textbox");


convert.onclick = function () {
    if (celsius.checked) {
        result.textContent = ((number.value * 9) / 5) + 32;
        celsius.checked = false;
        number.value = "";
    } else if (fahrenheit.checked) {
        result.textContent = ((number.value - 32) * 5) / 9;
        fahrenheit.checked = false;
        number.value = "";

    }
}
const convert = document.getElementById("convert");
const result = document.getElementById("result");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const number = document.getElementById("textbox");

convert.onclick = function () {
  if (celsius.checked) {
    let fahrenheit = ((number.value * 9) / 5) + 32;
    result.textContent = fahrenheit.toFixed(2) + "°F";
    celsius.checked = false;
    number.value = "";
  } else if (fahrenheit.checked) {
    let celsius = (number.value - 32) * 5 / 9;
    result.textContent = celsius.toFixed(2) + "°C";
    fahrenheit.checked = false;
    number.value = "";
  }
};

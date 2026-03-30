let inputValue = 10;
let milesToKm = true;
let result = 0;
if (milesToKm) {
    result = inputValue * 1.60934;
}
else {
    result = inputValue / 1.60934;
}
const resulteString = (inputValue + " miles are " + result + " km");
console.log (resultString);
const resultElement = document.getElementById("resultElement"); /* points to the HTML element */
resultElement.innerHTML = resultString; /* changes the content of the HTML element to the resultString */
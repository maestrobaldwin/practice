function convert(){
    let userInput = document.getElementById("userInput").value;
    let unit = document.getElementById("unit").value;
    let milesToKm = (unit === "milesToKm");
    let result = 0;
    let calculation = document.getElementById("calculation");
    if (milesToKm) {
        result = userInput * 1.60934;
        calculation.innerHTML = userInput + "miles are " + result + " km";
    }
    else {
        result = userInput / 1.60934;
        calculation.innerHTML = userInput + "km are " + result + " miles";
    }
}

function convertTemp(){
    let userInputTemp = document.getElementById("userInputTemp").value;
    let unitTemp = document.getElementById("unitTemp").value;
    let fToC = (unitTemp === "fToC");
    let resultTemp = 0;
    let calculationTemp = document.getElementById("calculationTemp");
    if (fToC) {
        resultTemp = (userInputTemp-32) * 5/9;
        calculationTemp.innerHTML = userInputTemp + "degrees Fahrenheit is " + resultTemp + " degrees Celsius";
    }
    else {
        resultTemp = (userInputTemp * 9/5) + 32;
        calculationTemp.innerHTML = userInputTemp + " degrees Celsius is " + resultTemp + " degrees Fahrenheit";
    }
}


/* My function
function convert(){
    const output = document.getElementById("calculation");
    const userInput = document.querySelector("input").value;
    const unit = document.getElementById("unit").value;
    if (unit === milesToKm){
        let calc1 = userInput / 1.60934;
        output.innerHTML = calc1;
    }
        else {
            let calc2 = userInput * 1.60934;
        output.innerHTML = calc2;}
}*/

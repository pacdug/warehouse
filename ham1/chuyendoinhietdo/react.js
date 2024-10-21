function Temperature(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("OutputCelsius").innerHTML = (valNum-32) / 1.8;
}
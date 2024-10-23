function convertTemperature(event) {
    event.preventDefault();
    const celsius = parseFloat(document.getElementById('celsius').value);
    const temp = new Temperature(celsius);

    document.getElementById('fahrenheitResult').textContent = `Độ F: ${temp.toFahrenheit().toFixed(2)}`;
    document.getElementById('kelvinResult').textContent = `Độ K: ${temp.toKelvin().toFixed(2)}`;
}

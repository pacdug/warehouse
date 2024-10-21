function ConvertFeet() {
    let a = parseFloat(document.getElementById('f').value);
    document.getElementById('feet').innerText = (3.279 * a).toFixed(2);
}
function ConvertMeter() {
    let b = parseFloat(document.getElementById('m').value);
    document.getElementById('meter').innerText = (0.305 * b).toFixed(2);
}
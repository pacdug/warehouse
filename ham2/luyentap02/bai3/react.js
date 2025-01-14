function Factorial() {
    let a = parseInt(document.getElementById("a").value);
    let b = 1;
    for (let i = 2; i <= a; i++) {
        b *= i;
    }
    document.getElementById('result').innerText = `ket qua giai thua cua ${a} la ${b}`;
}
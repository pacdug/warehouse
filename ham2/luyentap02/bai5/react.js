function Convert() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let min = a;

    if (b < min && b < c) {
        min = b;
    } else if (c < min && c < b) {
        min = c;
    } else {
        min = a;
    }
    document.getElementById().innerText = `gia tri nho nhat la : ${min}`;
}
function swapValues() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    [num1, num2] = [num2, num1];

    document.getElementById('result').textContent = `Sau khi đổi chỗ: Số thứ nhất = ${num1}, Số thứ hai = ${num2}`;
}
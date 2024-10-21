function reverseArray() {
    let input = document.getElementById("arrayInput").value;
    let arr = input.split(",").map(Number);
    arr.reverse();
    document.getElementById("result").textContent = "Mảng đã đảo ngược: " + arr.join(",");
}
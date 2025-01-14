function swapCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}

let inputString = prompt("Nhập vào một chuỗi:");
let swappedString = swapCase(inputString);

document.write(`chuoi truoc khi chuyen doi ${swappedString}`);

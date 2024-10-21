function countCharacter(arr, char) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            count++;
        }
    }
    return count > 0 ? count : -1;
}

function checkCharacter() {
    let charArray = document.getElementById('charArray').value.split(',');
    let charToCheck = document.getElementById('charToCheck').value;
    let result = countCharacter(charArray, charToCheck);
    document.getElementById('result').textContent = result > 0
        ? `Ký tự '${charToCheck}' xuất hiện ${result} lần trong mảng.`
        : `Ký tự '${charToCheck}' không có trong mảng.`;
}
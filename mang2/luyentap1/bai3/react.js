let array = [0, 12, 8, 6, 5];
let max = array[0];
let sum = 0;

for (let i = 1; i <= array.length; i++) {
    if (max < array[i]) {
        max = array[i];
        document.write(`gia tri lon nhat cua mang la ${max}` + "<br>")
    }
}

for (let i = 0; i <= array.length; i++) {
    sum += array[i];
}
let average = sum / array.length;
document.write('TBC:' + average);

let array = [0, 12, 8, 6, 5];
let max = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        document.write(`gia tri lon nhat cua mang la ${max} nam o vi tri ${i}`);
    }
}
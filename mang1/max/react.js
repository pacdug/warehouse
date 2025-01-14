let numbers = [-3, 5, 1, 3, 2, 10];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
        index = i;
    }
}
document.write("min: " + min + " at position " + index);
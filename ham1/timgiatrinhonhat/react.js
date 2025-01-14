function MinArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arr1 = [3, 5, 1, 8, -3, 7, 8];
let min = MinArray(arr1);
alert(min)
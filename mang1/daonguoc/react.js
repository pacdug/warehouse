let x = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = x.length - 1;
while (first < last) {
    let a = x[first];
    x[first] = x[last];
    x[last] = a;
    x[first]++;
    x[last]--;
}
document.write(x);


let arr = [];

function createArrayInputs() {
    const arraySize = document.getElementById('arraySize').value;
    const arrayInputsDiv = document.getElementById('arrayInputs');
    arrayInputsDiv.innerHTML = '';

    for (let i = 0; i < arraySize; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `element${i}`;
        input.name = `element${i}`;
        input.placeholder = `Phần tử thứ ${i + 1}`;
        arrayInputsDiv.appendChild(input);
    }
}

function reverseArray() {
    arr = [];
    const arraySize = document.getElementById('arraySize').value;

    for (let i = 0; i < arraySize; i++) {
        arr.push(parseInt(document.getElementById(`element${i}`).value));
    }

    const reversedArr = arr.reverse();
    document.getElementById('result').textContent = `Mảng đã đảo ngược: ${reversedArr.join(', ')}`;
}

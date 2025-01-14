let arr = [];

function createArrayInputs() {
    const arrayInputsDiv = document.getElementById('arrayInputs');
    arrayInputsDiv.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `element${i}`;
        input.name = `element${i}`;
        input.placeholder = `Phần tử thứ ${i + 1}`;
        arrayInputsDiv.appendChild(input);
    }
}

function checkElement() {
    arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(parseInt(document.getElementById(`element${i}`).value));
    }
    const elementV = parseInt(document.getElementById('elementV').value);
    const result = document.getElementById('result');

    if (arr.includes(elementV)) {
        result.textContent = `${elementV} is in the array`;
    } else {
        result.textContent = `${elementV} is not in the array`;
    }
}

createArrayInputs();
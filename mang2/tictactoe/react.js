let b = document.getElementById('carogame');
let data = '';
let board = [];
let h = 1;

for (let i = 0; i < 5; i++) {
    board[i] = new Array('(.)', '(.)', '(.)', '(.)', '(.)');
}

for (let i = 0; i < 5; i++) {
    data += '<br>';
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + '&ensp;';
    }
}
b.innerHTML = data;

function ChangeValue() {
    data = '';
    let positionX = parseInt(prompt("Enter the position of x"));
    let positionY = parseInt(prompt("Enter the position of y"));
    if (h % 2 == 0) {
        board[positionX][positionY] = 'x';
    } else {
        board[positionX][positionY] = 'o';
    }
    h++;
    for (let i = 0; i < 5; i++) {
        data += '<br>';
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + '&ensp;' + '&ensp;' + '&ensp;';
        }
    }
    b.innerHTML = data;

    //Xử lý x hay o thắng
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (board[i][j] === 'x' && board[i][j + 1] === 'x' && board[i][j + 2] === 'x' ||
                board[i][j] === 'x' && board[i + 1][j] === 'x' && board[i + 2][j] === 'x') {
                alert("x Thắng");
            } else if (board[i][j] === 'o' && board[i][j + 1] === 'o' && board[i][j + 2] === 'o' ||
                board[i][j] === 'o' && board[i + 1][j] === 'o' && board[i + 2][j] === 'o') {
                alert("o Thắng");
            }
        }
    }
}
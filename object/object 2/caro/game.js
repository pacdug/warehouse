class Cell {
    constructor() {
        this.value = '';
    }
}

class TicTacToe {
    constructor() {
        this.board = [
            new Cell(), new Cell(), new Cell(),
            new Cell(), new Cell(), new Cell(),
            new Cell(), new Cell(), new Cell()
        ];
        this.currentPlayer = 'X';
    }

    makeMove(index) {
        if (this.board[index].value === '') {
            this.board[index].value = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
        this.displayBoard();
        if (this.checkWin()) {
            setTimeout(() => alert(`${this.currentPlayer === 'X' ? 'O' : 'X'} thắng!`), 100);
            this.resetGame();
        }
    }

    displayBoard() {
        const gameBoard = document.getElementById('gameBoard');
        gameBoard.innerHTML = '';
        this.board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.textContent = cell.value;
            cellElement.addEventListener('click', () => this.makeMove(index));
            gameBoard.appendChild(cellElement);
        });
    }

    checkWin() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Hàng ngang
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Hàng dọc
            [0, 4, 8], [2, 4, 6]  // Đường chéo
        ];
        return winConditions.some(condition => {
            const [a, b, c] = condition;
            return this.board[a].value && this.board[a].value === this.board[b].value && this.board[a].value === this.board[c].value;
        });
    }

    resetGame() {
        this.board.forEach(cell => cell.value = '');
        this.currentPlayer = 'X';
        this.displayBoard();
    }
}

const game = new TicTacToe();
game.displayBoard();

function resetGame() {
    game.resetGame();
}


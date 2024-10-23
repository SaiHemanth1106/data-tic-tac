let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementById(`cell-${index}`).innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById("game-status").innerText = `${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        document.getElementById("game-status").innerText = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("game-status").innerText = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("game-status").innerText = `Player X's turn`;

    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerText = "";
    }
}

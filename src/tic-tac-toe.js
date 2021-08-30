class TicTacToe {
    gameField = [[null, null, null],
                [null, null, null],
                [null, null, null]]

    currentPlayer = 'x';

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] !== null) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer == 'o' ? 'x' : 'o';
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][2]) {
            return this.gameField[0][0];
        }
        if (this.gameField[0][2] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][0]) {
            return this.gameField[0][2];
        }
        for (let row = 0; row < this.gameField.length; row++) {
            if (this.gameField[row][0] === this.gameField[row][1] && this.gameField[row][1] === this.gameField[row][2]) {
                return this.gameField[row][0];
            }
        }
        for (let column = 0; column < this.gameField.length; column++) {
            if (this.gameField[0][column] === this.gameField[1][column] && this.gameField[1][column] === this.gameField[2][column]) {
                return this.gameField[0][column];
            }
        }
        return null;

    }

    noMoreTurns() {
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 0; j < this.gameField.length; j++) {
                if (this.gameField[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;

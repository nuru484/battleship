/* eslint-disable max-classes-per-file */
// Ship class
class Ship {
  constructor(length, hitTimes = 0) {
    this.length = length;
    this.hitTimes = hitTimes;
  }

  hit() {
    if (!this.isSunk()) {
      this.hitTimes += 1;
    }
  }

  isSunk() {
    if (this.hitTimes === this.length) {
      return true;
    }
    return false;
  }
}

// Gameboard grid function
const gameboardGrid = (rows, columns) => {
  const grid = [];
  let value = 0;

  // Two dimensional array
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < columns; j++) {
      grid[i][j] = value++;
    }
  }

  return grid;
};

// Gameboard class
class Gameboard {
  constructor() {
    this.gameGrid = gameboardGrid(10, 10);
    this.ships = [];
  }

  placeShip(ship, row, column) {
    if (
      row >= 0 &&
      row < this.gameGrid.length &&
      column >= 0 &&
      column < this.gameGrid.length
    ) {
      // Check if ship can be placed
      for (let i = 0; i < ship.length; i++) {
        if (
          this.gameGrid[row][column + i] === 'ship' ||
          this.gameGrid[row][column + i] === ''
        ) {
          return false;
        }
      }

      if (column + ship.length > this.gameGrid[row].length) {
        return false;
      }

      // Place ship
      ship.startRow = row;
      ship.startColumn = column;
      for (let i = 0; i < ship.length; i++) {
        this.gameGrid[row][column + i] = 'ship';
        if (typeof this.gameGrid[row][column + ship.length] === 'number') {
          this.gameGrid[row][column + ship.length] = '';
        }

        if (typeof this.gameGrid[row][column - 1] === 'number') {
          this.gameGrid[row][column - 1] = '';
        }
      }
      this.ships.push(ship);
      return true;
    }

    return false;
  }

  receiveAttack(row, column) {
    if (
      row >= 0 &&
      row < this.gameGrid.length &&
      column >= 0 &&
      column < this.gameGrid[0].length
    ) {
      if (this.gameGrid[row][column] === 'ship') {
        const hitShip = this.ships.find(
          (ship) =>
            row === ship.startRow &&
            column >= ship.startColumn &&
            column < ship.startColumn + ship.length
        );

        if (hitShip) {
          hitShip.hit();
          this.gameGrid[row][column] = 'hit';
        }
      } else if (
        this.gameGrid[row][column] === 'hit' ||
        this.gameGrid[row][column] === 'miss'
      ) {
        return;
      }
    }
    if (typeof this.gameGrid[row][column] === 'number') {
      this.gameGrid[row][column] = 'miss';
    }
    if (this.gameGrid[row][column] === '') {
      this.gameGrid[row][column] = 'miss';
    }
  }

  gameOver() {
    const gameIsOver = this.ships.every((ship) => ship.isSunk());

    if (gameIsOver) {
      return true;
    }
    return false;
  }
}

class Player {
  constructor() {
    this.gameBoard = null;
  }

  startGame() {
    this.gameBoard = new Gameboard();
  }

  createShip(length) {
    return new Ship(length);
  }

  placeShip(ship, row, column) {
    if (!this.gameBoard.placeShip(ship, row, column)) {
      return false;
    }
    this.gameBoard.placeShip(ship, row, column);
    return true;
  }

  attack(opponent, row, column) {
    if (this.gameBoard) {
      opponent.gameBoard.receiveAttack(row, column);
    }
  }
}

export { Ship, Gameboard, Player };

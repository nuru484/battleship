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
          this.gameGrid[row][column + i] === null ||
          this.gameGrid[row][column + i] === 'ship'
        ) {
          return;
        }
      }

      if (column + ship.length <= this.gameGrid[row].length) {
        // Place ship
        ship.startRow = row;
        ship.startColumn = column;
        for (let i = 0; i < ship.length; i++) {
          this.gameGrid[row][column + i] = 'ship';
        }
        this.ships.push(ship);
      }
    }
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
          return;
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
  }

  gameOver() {
    const gameIsOver = this.ships.every((ship) => ship.isSunk());

    if (gameIsOver) {
      return 'Game Over';
    }
    return undefined;
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
    if (this.gameBoard) {
      this.gameBoard.placeShip(ship, row, column);
      return true;
    }
    return undefined;
  }

  attack(opponent, row, column) {
    opponent.gameBoard.receiveAttack(row, column);
    // return true;
  }
}

const generatedCoordinates = new Set();
const generateCoordinates = () => {
  let x;
  let y;

  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (generatedCoordinates.has(`${x},${y}`));

  generatedCoordinates.add(`${x},${y}`);

  return { x, y };
};

export { Ship, Gameboard, Player, generateCoordinates };

// Ship class
class Ship {
  constructor(length, hitTimes) {
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
          console.log(
            `Cannot place ship at (${row}, ${column}). There's already a ship there.`
          );
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
      } else {
        console.log(`Ship does not fit within the row.`);
      }
    } else {
      console.log(`Invalid coordinates (${row}, ${column}).`);
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
          console.log('Hit!');
          return;
        }
      } else if (
        this.gameGrid[row][column] === 'hit' ||
        this.gameGrid[row][column] === 'missed'
      ) {
        console.log(`Can't hit same spot or missed spot`);
        return;
      }
    } else {
      console.log(`Invalid coordinates (${row}, ${column}).`);
    }

    if (typeof this.gameGrid[row][column] === 'number') {
      this.gameGrid[row][column] = 'missed';
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

const player = () => {
  console.log('hello world');
};

player();

const start = new Gameboard();
const myShip = new Ship(5, 0);
start.placeShip(myShip, 2, 3);

start.receiveAttack(2, 3);
start.receiveAttack(2, 4);
start.receiveAttack(2, 5);
start.receiveAttack(2, 6);
start.receiveAttack(2, 7);

start.placeShip(myShip, 2, 7);

start.gameOver();

export { Ship, Gameboard };

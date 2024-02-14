// Ship class
class Ship {
  constructor(length, hitTimes) {
    this.length = length;
    this.hitTimes = hitTimes;
  }

  hit() {
    if (!this.isSunk()) {
      this.hitTimes++;
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
  let grid = [];
  let value = 0;

  // Two dimensional array
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < columns; j++) {
      grid[i][j] = value++;
    }
  }
  console.table(grid);
  console.log(grid.length);

  return grid;
};

// Gameboard class
class Gameboard {}

const start = new Gameboard();

const myShip = new Ship(5, 0);

start.placeShip(myShip, 2, 3);

start.receiveAttack(2, 3);
start.receiveAttack(2, 4);
start.receiveAttack(2, 5);
start.receiveAttack(2, 6);
start.receiveAttack(2, 7);

start.gameOver();

export { Ship, Gameboard };

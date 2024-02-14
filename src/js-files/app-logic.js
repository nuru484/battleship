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
        this.gameGrid[row][column] === 'missed'
      ) {
        return;
      }
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

class Player {
  constructor() {
    this.gameboard = null;
  }

  startGame() {
    this.gameboard = new Gameboard();
  }

  createShip(row, column) {
    return new Ship(row, column);
  }

  placeShip(ship, row, column) {
    if (this.gameboard) {
      this.gameboard.placeShip(ship, row, column);
    }
  }

  attack(opponent, row, column) {
    opponent.gameboard.receiveAttack(row, column);
  }
}

// Creating player and computer instance from Player class
const player = new Player();
player.startGame();
const playerShip = player.createShip(5, 0);
player.placeShip(playerShip, 2, 3);

// console.table(player.gameboard.gameGrid);
// console.log(playerShip);

const computer = new Player();
computer.startGame();
const computerShip = computer.createShip(5, 0);
computer.placeShip(computerShip, 3, 3);

// Computer attacks player
computer.attack(player, 2, 3);
computer.attack(player, 2, 4);
computer.attack(player, 2, 5);
computer.attack(player, 2, 6);
computer.attack(player, 2, 7);

// Computer attacks already hit spot
computer.attack(player, 2, 7);

// Computer attacks and missed
computer.attack(player, 3, 6);

// console.table(player.gameboard.gameGrid);
// console.log(playerShip);

export { Ship, Gameboard, Player };

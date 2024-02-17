import { Player, generateCoordinates } from '/src/js-files/app-logic.js';

// Player instance
const player = new Player();
player.startGame();
const playerShip = player.createShip(5);
player.placeShip(playerShip, 4, 5);
const playerGameBoard = player.gameBoard.gameGrid;

// Computer instance
const computer = new Player();
computer.startGame();
const computerGameBoard = computer.gameBoard.gameGrid;

const placeComputerShips = () => {
  const shipLengths = [5, 4, 3, 3, 2];

  shipLengths.forEach((length) => {
    const ship = computer.createShip(length);

    if (
      computer.placeShip(
        ship,
        generateCoordinates(10).x,
        generateCoordinates(10, 10 - length).y
      ) === false
    ) {
      computer.placeShip(
        ship,
        generateCoordinates(10).x,
        generateCoordinates(10, 10 - length).y
      );
    }
  });
};

placeComputerShips();

const playerTable = document.getElementById('playerTable');
const computerTable = document.getElementById('computerTable');

const createGameBoard = (table, className) => {
  for (let i = 0; i < 10; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 10; j++) {
      const cell = row.insertCell();
      cell.textContent = ``;
      cell.classList.add(className);
    }
  }
};

createGameBoard(playerTable, 'playerCells');
createGameBoard(computerTable, 'computerCells');

const playerCells = document.querySelectorAll('.playerCells');
const computerCells = document.querySelectorAll('.computerCells');

const renderGameBoard = (gameBoardArray, cells) => {
  cells.forEach((cell, index) => {
    const row = Math.floor(index / gameBoardArray[0].length);
    const col = index % gameBoardArray[0].length;

    cell.textContent = gameBoardArray[row][col];
  });
};

renderGameBoard(playerGameBoard, playerCells);
renderGameBoard(computerGameBoard, computerCells);

const attackFunction = (gameBoard, cells, attacker, attackReceiver) => {
  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      const row = Math.floor(index / gameBoard[0].length);
      const col = index % gameBoard[0].length;
      attacker.attack(attackReceiver, row, col);
      if (cell.textContent === 'miss' || cell.textContent === 'hit') {
        return;
      }
      const attackCordinates = generateCoordinates();
      computer.attack(player, attackCordinates.x, attackCordinates.y);
      renderGameBoard(playerGameBoard, playerCells);

      renderGameBoard(gameBoard, cells);
      computer.gameBoard.gameOver();
      player.gameBoard.gameOver();
    });
  });
};

attackFunction(computerGameBoard, computerCells, player, computer);

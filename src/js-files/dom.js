import { Player, generateCoordinates } from '/src/js-files/app-logic.js';

// Player setup
const player = new Player();
player.startGame();
const playerShip = player.createShip(5);
player.placeShip(playerShip, 4, 5);
const playerGameBoard = player.gameBoard.gameGrid;

// Computer setup
const computer = new Player();
computer.startGame();
const computerGameBoard = computer.gameBoard.gameGrid;

// Place computer ships randomly
const placeComputerShips = () => {
  const shipLengths = [5, 4, 3, 3, 2];
  shipLengths.forEach((length) => {
    let placed = false;
    while (!placed) {
      const { x } = generateCoordinates(10);
      const { y } = generateCoordinates(10, 10 - length);
      placed = computer.placeShip(computer.createShip(length), x, y);
    }
  });
};
placeComputerShips();

// DOM elements
const playerTable = document.getElementById('playerTable');
const computerTable = document.getElementById('computerTable');

// Create game boards
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

// Render game boards
const renderGameBoard = (gameBoardArray, cells) => {
  cells.forEach((cell, index) => {
    const row = Math.floor(index / gameBoardArray[0].length);
    const col = index % gameBoardArray[0].length;
    cell.textContent = gameBoardArray[row][col];
  });
};
renderGameBoard(playerGameBoard, document.querySelectorAll('.playerCells'));
renderGameBoard(computerGameBoard, document.querySelectorAll('.computerCells'));

// Attack function
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
      renderGameBoard(
        playerGameBoard,
        document.querySelectorAll('.playerCells')
      );
      renderGameBoard(gameBoard, cells);
      console.log(computer.gameBoard.gameOver());
      console.log(player.gameBoard.gameOver());
    });
  });
};
attackFunction(
  computerGameBoard,
  document.querySelectorAll('.computerCells'),
  player,
  computer
);

import { Player } from '/src/js-files/app-logic.js';
import { generateCoordinates, handleGameOver } from '/src/js-files/utills.js';

// Player setup
export const player = new Player();
player.startGame();
export const playerGameBoard = player.gameBoard.gameGrid;

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
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * length);
      placed = computer.placeShip(computer.createShip(length), x, y);
    }
  });
};

placeComputerShips();

// DOM elements
const playerTable = document.getElementById('playerTable');
const computerTable = document.getElementById('computerTable');

// Create game boards
export const createGameBoard = (table, className) => {
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
export const renderGameBoard = (gameBoardArray, cells) => {
  cells.forEach((cell, index) => {
    const row = Math.floor(index / gameBoardArray[0].length);
    const col = index % gameBoardArray[0].length;
    cell.textContent = gameBoardArray[row][col];
  });
};

// renderGameBoard(playerGameBoard, document.querySelectorAll('.playerCells'));
// renderGameBoard(computerGameBoard, document.querySelectorAll('.computerCells'));

let humanTurn = true;

const computerPlayerTurn = () => {
  const { x, y } = generateCoordinates();
  computer.attack(player, x, y);

  handleGameOver(player, 'Computer');

  document.querySelectorAll('.playerCells').forEach((playerCell) => {
    if (playerCell.textContent === 'hit') {
      playerCell.style.backgroundColor = 'red';
    }
    if (playerCell.textContent === 'miss') {
      playerCell.style.backgroundColor = 'yellow';
    }

    renderGameBoard(playerGameBoard, document.querySelectorAll('.playerCells'));

    humanTurn = true;
  });
};

// Attack function
const humanPlayerAttackFunction = (
  gameBoard,
  computerCells,
  attacker,
  attackReceiver
) => {
  computerCells.forEach((computerCell, index) => {
    computerCell.addEventListener('click', () => {
      if (!humanTurn) return;

      const row = Math.floor(index / gameBoard[0].length);
      const col = index % gameBoard[0].length;

      attacker.attack(attackReceiver, row, col);

      if (
        computerCell.textContent === 'miss' ||
        computerCell.textContent === 'hit'
      ) {
        return;
      }

      handleGameOver(computer, 'Human Player');
      computerCell.style.backgroundColor = 'yellow';

      if (computerCell.textContent === 'ship') {
        computerCell.style.backgroundColor = 'red';
      }

      renderGameBoard(gameBoard, computerCells);

      humanTurn = false;

      setTimeout(computerPlayerTurn, 1000);
    });
  });
};

humanPlayerAttackFunction(
  computerGameBoard,
  document.querySelectorAll('.computerCells'),
  player,
  computer
);

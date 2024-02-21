// Import ship images
import battleshipX from '../assets/battleshipX.svg';
import carrierX from '../assets/carrierX.svg';
import cruiserX from '../assets/cruiserX.svg';
import destroyerX from '../assets/destroyerX.svg';
import submarineX from '../assets/submarineX.svg';

// Import player and game board related variables and functions
import { player, renderGameBoard, playerGameBoard } from './dom';

// Define ship data including length, ID, image URL, and name
const shipData = [
  { length: 5, id: 'ship5', shipUrl: battleshipX, shipName: 'Battleship (5f)' },
  { length: 4, id: 'ship4', shipUrl: carrierX, shipName: 'Carrier (4f)' },
  { length: 3, id: 'ship3first', shipUrl: cruiserX, shipName: 'Cruiser (3f)' },
  {
    length: 3,
    id: 'ship3second',
    shipUrl: destroyerX,
    shipName: 'Submarine (3f)',
  },
  { length: 2, id: 'ship2', shipUrl: submarineX, shipName: 'Destroyer (2f)' },
];

// Function to create human player ships
const createHumanPlayerShips = () => {
  const allShipsContainer = document.querySelector('.player-ships-class');
  shipData.forEach((data) => {
    const shipContainer = document.createElement('div');
    shipContainer.className = 'ship-container';
    shipContainer.id = data.id;

    const ship = document.createElement('img');
    ship.draggable = true;
    ship.src = data.shipUrl;
    ship.dataset.length = data.length;

    const shipName = document.createElement('p');
    shipName.textContent = data.shipName;

    shipContainer.append(ship, shipName);
    allShipsContainer.append(shipContainer);
  });
};

// Initialize player ships
createHumanPlayerShips();

// Get ships and player cells
const playerShips = document.querySelectorAll('.ship-container');
const playerCells = document.querySelectorAll('.playerCells');

// Function to highlight cells with ships
const highlightShipsOnBoard = () => {
  playerCells.forEach((playerCell) => {
    if (playerCell.textContent === 'ship') {
      playerCell.classList.add('ship-position');
    }
  });
};

const revealComputerTable = () => {
  let numberOfShipsPlaced = 0;

  playerCells.forEach((playerCell) => {
    if (playerCell.textContent === 'ship') {
      numberOfShipsPlaced += 1;
    }
  });

  if (numberOfShipsPlaced === 17) {
    const computerTableContainer = document.querySelector(
      '.computer-table-container'
    );
    computerTableContainer.classList.add('reveal-computer-tabel-container');
  }
};

// Drag start event handler
const dragStart = (e) => {
  setTimeout(() => {
    e.target.classList.add('hide-dragable');
  }, 0);
};

// Drag end event handler
const dragEnd = (e) => {
  e.target.classList.remove('hide-dragable');
};

// Attach drag event handlers to ships
playerShips.forEach((ship) => {
  ship.addEventListener('dragstart', dragStart);
  ship.addEventListener('dragend', dragEnd);
});

// Drag enter event handler
const dragEnter = (e) => {
  if (e.target.textContent === 'ship') {
    return;
  }
  e.preventDefault();
  e.target.classList.add('drag-over');
};

// Drag over event handler
const dragOver = (e) => {
  if (e.target.textContent === 'ship') {
    return;
  }
  e.preventDefault();
  e.target.classList.add('drag-over');
};

// Drag leave event handler
const dragLeave = (e) => {
  e.target.classList.remove('drag-over');
};

// Drop event handler
const drop = (e) => {
  const row = e.target.parentNode.rowIndex;
  const col = e.target.cellIndex;

  const dragable = document.querySelector('.hide-dragable');

  const shipLength = parseInt(dragable.dataset.length, 10);
  const playerShip = player.createShip(shipLength);

  if (player.placeShip(playerShip, row, col) === false) {
    e.target.classList.remove('drag-over');
    return;
  }

  e.target.classList.remove('drag-over');
  e.target.textContent = '';
  dragable.classList.remove('hide-dragable');
  dragable.parentNode.classList.add('hide-ship-container');

  player.placeShip(playerShip, row, col);
  renderGameBoard(playerGameBoard, document.querySelectorAll('.playerCells'));

  highlightShipsOnBoard();
  revealComputerTable();
};

// Attach drag and drop event handlers to player cells
playerCells.forEach((cell) => {
  cell.addEventListener('dragenter', dragEnter);
  cell.addEventListener('dragover', dragOver);
  cell.addEventListener('dragleave', dragLeave);
  cell.addEventListener('drop', drop);
  cell.addEventListener('drop', (e) => {
    e.preventDefault();
  });
});

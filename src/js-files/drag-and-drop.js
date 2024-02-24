// Import ship images
import battleshipX from '../assets/battleshipX.svg';
import carrierX from '../assets/carrierX.svg';
import cruiserX from '../assets/cruiserX.svg';
import destroyerX from '../assets/destroyerX.svg';
import submarineX from '../assets/submarineX.svg';

// Import player and game board related variables and functions
import { player, renderGameBoard, playerGameBoard } from './dom';

// Imports from utills
import {
  createHumanPlayerShips,
  highlightPlayerShipsOnBoard,
  revealComputerTable,
} from '/src/js-files/utills.js';

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

// Initialize player ships using the createHumanPlayerShips from utills
createHumanPlayerShips(shipData);

// Get ships and player cells
const playerShips = document.querySelectorAll('.ship-container');
const playerCells = document.querySelectorAll('.playerCells');

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
  // Mouse events
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

  renderGameBoard(playerGameBoard, playerCells);

  highlightPlayerShipsOnBoard(playerCells);
  revealComputerTable(playerCells);
};

// Attach drag and drop event handlers to player cells
playerCells.forEach((cell) => {
  // Mouse events
  cell.addEventListener('dragenter', dragEnter);
  cell.addEventListener('dragover', dragOver);
  cell.addEventListener('dragleave', dragLeave);
  cell.addEventListener('drop', drop);
  cell.addEventListener('drop', (e) => {
    e.preventDefault();
  });
});

playerShips.forEach((ship) => {
  ship.addEventListener('touchend', (e) => {
    if (e.target.hasAttribute('draggable')) {
      const touchLocation = e.changedTouches[0];

      // Calculate the row and column indices based on touch position
      let row;
      let col;

      playerCells.forEach((cell, index) => {
        const rect = cell.getBoundingClientRect();
        if (
          touchLocation.clientX >= rect.left &&
          touchLocation.clientX <= rect.right &&
          touchLocation.clientY >= rect.top &&
          touchLocation.clientY <= rect.bottom
        ) {
          row = Math.floor(index / 10); // Assuming gridSize is defined elsewhere
          col = index % 10; // Assuming gridSize is defined elsewhere
        }
      });

      const shipLength = parseInt(e.target.dataset.length, 10);

      const playerShip = player.createShip(shipLength);

      if (player.placeShip(playerShip, row, col) === false) {
        e.target.style.position = 'static';
        ship.append(e.target);
        return;
      }

      player.placeShip(playerShip, row, col);

      e.target.parentNode.classList.add('hide-ship-container');

      player.placeShip(playerShip, row, col);
      renderGameBoard(playerGameBoard, playerCells);
      highlightPlayerShipsOnBoard(playerCells);
      revealComputerTable(playerCells);
    }
  });
});

playerShips.forEach((ship) => {
  ship.addEventListener('touchmove', (e) => {
    if (e.target.hasAttribute('draggable')) {
      const touchLocation = e.targetTouches[0];

      e.target.style.position = 'absolute';
      e.target.style.width = '100px';
      e.target.style.height = '50px';
      e.target.style.left = `${touchLocation.pageX}px`;
      e.target.style.top = `${touchLocation.pageY}px`;
    }
  });
});

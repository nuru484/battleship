import battleshipX from '../assets/battleshipX.svg';
import carrierX from '../assets/carrierX.svg';
import cruiserX from '../assets/cruiserX.svg';
import destroyerX from '../assets/destroyerX.svg';
import submarineX from '../assets/submarineX.svg';

import { player, renderGameBoard, playerGameBoard } from './dom';

//  ship lengths in an array along with corresponding IDs
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

// Function to create ships based on ship lengths and IDs
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

//  Function call to create ships
createHumanPlayerShips();

const ships = document.querySelectorAll('.ship-container');
const playerCells = document.querySelectorAll('.playerCells');

// Events on dragged elements

// Drag start helper function.
const dragStart = (e) => {
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
};

const dragEnd = (e) => {
  e.target.classList.remove('hide');
};

// Drag Start
ships.forEach((ship) => {
  ship.addEventListener('dragstart', dragStart);
  ship.addEventListener('dragend', dragEnd);
});

// Events on drop target

// Drag enter helper function
const dragEnter = (e) => {
  if (e.target.textContent === 'ship') {
    return;
  }
  e.preventDefault();
  e.target.classList.add('drag-over');
};

// Drag over helper function
const dragOver = (e) => {
  if (e.target.textContent === 'ship') {
    return;
  }
  e.preventDefault();
  e.target.classList.add('drag-over');
};

// Drag leave helper function
const dragLeave = (e) => {
  e.target.classList.remove('drag-over');
};

// Drop helper function
const drop = (e) => {
  const row = e.target.parentNode.rowIndex;
  const col = e.target.cellIndex;

  const dragable = document.querySelector('.hide');

  const shipLength = parseInt(dragable.dataset.length, 10);

  const playerShip = player.createShip(shipLength);

  if (player.placeShip(playerShip, row, col) === false) {
    e.target.classList.remove('drag-over');
    return;
  }

  e.target.classList.remove('drag-over');
  e.target.textContent = '';
  dragable.classList.remove('hide');
  dragable.parentNode.textContent = '';

  player.placeShip(playerShip, row, col);
  renderGameBoard(playerGameBoard, document.querySelectorAll('.playerCells'));
};

// Drop target events on the cells
playerCells.forEach((cell) => {
  cell.addEventListener('dragenter', dragEnter);
  cell.addEventListener('dragover', dragOver);
  cell.addEventListener('dragleave', dragLeave);
  cell.addEventListener('drop', drop);

  cell.addEventListener('drop', (e) => {
    e.preventDefault();
  });
});

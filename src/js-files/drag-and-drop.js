import { player, renderGameBoard, playerGameBoard } from './dom';

const ships = document.querySelectorAll('.ship');
const playerCells = document.querySelectorAll('.playerCells');

// Events on dragged elements

// Drag start helper function
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

  const playerShip2 = player.createShip(5);

  if (player.placeShip(playerShip2, row, col) === false) {
    e.target.classList.remove('drag-over');
    return;
  }

  e.target.classList.remove('drag-over');
  const dragable = document.querySelector('.hide');
  e.target.textContent = '';
  e.target.append(dragable);
  dragable.classList.remove('hide');

  player.placeShip(playerShip2, row, col);

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

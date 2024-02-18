const ships = document.querySelectorAll('.ship');
const playerCells = document.querySelectorAll('.playerCells');

// Events on dragged elements

// Drag start helper function
const dragStart = (e) => {
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
};

// Drag Start
ships.forEach((ship) => {
  ship.addEventListener('dragstart', dragStart);
});

// Events on drop target

// Drag enter helper function
const dragEnter = (e) => {
  e.preventDefault();
  e.target.classList.add('drag-over');
};

// Drag over helper function
const dragOver = (e) => {
  e.preventDefault();
  e.target.classList.add('drag-over');
};

// Drag leave helper function
const dragLeave = (e) => {
  e.target.classList.remove('drag-over');
};

// Drop helper function
const drop = (e) => {
  e.target.classList.remove('drag-over');
  const dragable = document.querySelector('.hide');
  e.target.append(dragable);
  dragable.classList.remove('hide');
};

// Drop target events on the cells
playerCells.forEach((cell) => {
  cell.addEventListener('dragenter', dragEnter);
  cell.addEventListener('dragover', dragOver);
  cell.addEventListener('dragleave', dragLeave);
  cell.addEventListener('drop', drop);
});

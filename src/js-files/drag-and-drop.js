const ships = document.querySelectorAll('.ship');
const playerCells = document.querySelectorAll('.playerCells');

const dragStart = (e) => {
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
};

ships.forEach((ship) => {
  ship.addEventListener('dragstart', dragStart);
});

const dragEnter = (e) => {
  e.preventDefault();
  e.target.classList.add('drag-over');
};

const dragOver = (e) => {
  e.preventDefault();
  e.target.classList.add('drag-over');
};

const dragLeave = (e) => {
  e.target.classList.remove('drag-over');
};

const drop = (e) => {
  e.target.classList.remove('drag-over');
  const dragable = document.querySelector('.hide');
  e.target.append(dragable);
  dragable.classList.remove('hide');
};

playerCells.forEach((cell) => {
  cell.addEventListener('dragenter', dragEnter);
  cell.addEventListener('dragover', dragOver);
  cell.addEventListener('dragleave', dragLeave);
  cell.addEventListener('drop', drop);
});

const generatedCoordinates = new Set();
const generateCoordinates = (col = 10, row = 10) => {
  let x;
  let y;

  do {
    x = Math.floor(Math.random() * col);
    y = Math.floor(Math.random() * row);
  } while (generatedCoordinates.has(`${x},${y}`));

  generatedCoordinates.add(`${x},${y}`);

  return { x, y };
};

// Function to create human player ships
const createHumanPlayerShips = (shipData) => {
  const allShipsContainer = document.querySelector('.player-ships-class');

  shipData.forEach((data) => {
    const shipContainer = document.createElement('div');
    shipContainer.className = 'ship-container';
    shipContainer.id = data.id;

    const shipName = document.createElement('p');
    shipName.textContent = data.shipName;

    const ship = document.createElement('img');
    ship.draggable = true;
    ship.src = data.shipUrl;
    ship.dataset.length = data.length;

    shipContainer.append(shipName, ship);
    allShipsContainer.append(shipContainer);
  });
};

// Function to highlight cells with ships
const highlightPlayerShipsOnBoard = (playerCells) => {
  playerCells.forEach((playerCell) => {
    if (playerCell.textContent === 'ship') {
      playerCell.classList.add('ship-position');
    }
  });
};

const revealComputerTable = (playerCells) => {
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

export {
  generateCoordinates,
  createHumanPlayerShips,
  highlightPlayerShipsOnBoard,
  revealComputerTable,
};

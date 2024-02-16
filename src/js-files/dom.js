import { Player, generateCoordinates } from '/src/js-files/app-logic.js';

// Player instance
const player = new Player();
player.startGame();
const playerShip = player.createShip(5);
player.placeShip(playerShip, 3, 3);
const playerGameBoard = player.gameBoard.gameGrid;

// Computer instance
const computer = new Player();
computer.startGame();
const computerShip = computer.createShip(5);
computer.placeShip(computerShip, 5, 4);
const computerGameBoard = computer.gameBoard.gameGrid;

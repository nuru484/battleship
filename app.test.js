import {
  Ship,
  Gameboard,
  Player,
  generateCoordinates,
} from './src/js-files/app-logic.js';

describe('Ship class', () => {
  test('properties and methods', () => {
    const myShip = new Ship(4);

    // Properties
    expect(myShip.length).toBe(4);
    expect(myShip.hitTimes).toBe(0);

    // Methods
    myShip.hit();
    expect(myShip.hitTimes).toBe(1);

    expect(myShip.isSunk()).toBe(false);

    myShip.hit();
    myShip.hit();
    myShip.hit();

    expect(myShip.isSunk()).toBe(true);
  });
});

describe('Gameboard class', () => {
  let start;

  beforeEach(() => {
    start = new Gameboard();
  });

  test('Properties and methods of Gameboard class', () => {
    // Properties
    expect(start.gameGrid).toHaveLength(10);
    expect(start.gameGrid[0]).toHaveLength(10);
    expect(start.ships).toEqual([]);

    // Methods
    const myShip = new Ship(5, 0);
    start.placeShip(myShip, 2, 3);

    expect(start.gameGrid[2][3]).toBe('ship');
    expect(start.gameGrid[2][4]).toBe('ship');
    expect(start.gameGrid[2][5]).toBe('ship');
    expect(start.gameGrid[2][6]).toBe('ship');
    expect(start.gameGrid[2][7]).toBe('ship');
    expect(start.ships).toHaveLength(1);

    start.receiveAttack(2, 3);
    start.receiveAttack(2, 4);
    start.receiveAttack(2, 5);
    start.receiveAttack(2, 6);
    start.receiveAttack(2, 7);

    expect(start.gameOver()).toBe('Game Over');
  });

  test('Cannot place ship on top of another ship', () => {
    const myShip = new Ship(3);
    const otherShip = new Ship(4);

    start.placeShip(myShip, 3, 4);

    // Trying to place another ship on top of the previous one
    start.placeShip(otherShip, 3, 4);

    expect(start.gameGrid[3][4]).toBe('ship');
    expect(start.gameGrid[3][5]).toBe('ship');
    expect(start.gameGrid[3][6]).toBe('ship');
    expect(start.gameGrid[3][7]).not.toBe('ship');
    expect(start.ships).toHaveLength(1);
  });

  test('Cannot place ship if it does not fit within the row', () => {
    const ship = new Ship(5);

    expect(start.placeShip(ship, 2, 7)).toBeUndefined();
    expect(start.placeShip(ship, 2, 8)).toBeUndefined();
    expect(start.placeShip(ship, 2, 9)).toBeUndefined();
    expect(start.placeShip(ship, 2, 10)).toBeUndefined();
    expect(start.placeShip(ship, 2, 11)).toBeUndefined();
  });
});

describe('Player class', () => {
  test('Player creation', () => {
    const player = new Player();
    player.startGame();

    expect(player.gameBoard.gameGrid).toHaveLength(10);

    const playerShip = player.createShip(5);
    expect(playerShip.length).toBe(5);

    player.placeShip(playerShip, 2, 3);
    expect(playerShip.startRow).toBe(2);

    const computer = new Player();
    computer.startGame();
    computer.attack(player, 2, 3);

    expect(playerShip.hitTimes).toBe(1);

    computer.attack(player, 2, 4);
    computer.attack(player, 2, 5);
    computer.attack(player, 2, 6);
    computer.attack(player, 2, 7);

    expect(playerShip.isSunk()).toBe(true);
  });

  test('Attacking Already Hit Spot', () => {
    const player = new Player();
    player.startGame();
    const playerShip = player.createShip(5);
    player.placeShip(playerShip, 2, 3);

    const computer = new Player();
    computer.startGame();
    computer.attack(player, 2, 3);

    // Attack a spot that has already been hit
    const initialHitTimes = playerShip.hitTimes;
    computer.attack(player, 2, 3);

    // Verify that ship's hit count remains the same
    expect(playerShip.hitTimes).toBe(initialHitTimes);
  });

  test('Attacking Missed Spot', () => {
    const player = new Player();
    player.startGame();
    const playerShip = player.createShip(5);
    player.placeShip(playerShip, 2, 3);

    const computer = new Player();
    computer.startGame();

    // Attack a spot that was missed
    computer.attack(player, 3, 6);

    // Verify that the game grid remains unchanged
    expect(player.gameBoard.gameGrid[3][6]).not.toBe('hit');
    expect(player.gameBoard.gameGrid[3][6]).toBe('miss');
  });
});

describe('generateCoordinates function', () => {
  test('should return an object with x and y properties', () => {
    const coordinates = generateCoordinates();
    expect(coordinates).toHaveProperty('x');
    expect(coordinates).toHaveProperty('y');
  });

  test('should return unique coordinates', () => {
    const generated = new Set();

    for (let i = 0; i < 10; i++) {
      const coordinates = generateCoordinates();
      const key = `${coordinates.x},${coordinates.y}`;
      expect(generated.has(key)).toBe(false);
      generated.add(key);
    }
  });
});

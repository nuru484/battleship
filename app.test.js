import { Ship, Gameboard } from './src/js-files/app-logic.js';

describe('Ship class', () => {
  test('properties and methods', () => {
    const myShip = new Ship(4, 0);

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
    const myShip = new Ship(3, 0);
    const otherShip = new Ship(4, 0);

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
    const ship = new Ship(5, 0);

    expect(start.placeShip(ship, 2, 7)).toBeUndefined();
    expect(start.placeShip(ship, 2, 8)).toBeUndefined();
    expect(start.placeShip(ship, 2, 9)).toBeUndefined();
    expect(start.placeShip(ship, 2, 10)).toBeUndefined();
    expect(start.placeShip(ship, 2, 11)).toBeUndefined();
  });
});

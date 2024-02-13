import Ship from './src/js-files/app-logic.js';

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

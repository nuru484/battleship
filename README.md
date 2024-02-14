# The Odin Project Battleship Game Assignment

## Overview

This assignment aims to develop a Battleship game application using object-oriented programming principles. The game will involve creating ships, gameboards, players, and implementing a main game loop along with a basic user interface.

## Assignment Details

### Ship Class/Factory:

- Create a Ship class or factory to represent individual ships in the game.
- Ships should have properties such as length, hits, and sunk status.
- Implement methods:
  - `hit()`: Increase the number of hits on the ship.
  - `isSunk()`: Check if the ship is sunk based on its length and hits.

### Gameboard Class/Factory:

- Implement a Gameboard class or factory to manage the game state.
- Functionality includes:
  - Placing ships at specific coordinates.
  - Handling attacks and updating ship states accordingly.
  - Tracking missed attacks.
  - Determining if all ships are sunk.

### Player:

- Create a Player class to manage player actions.
- Players can take turns attacking the enemy gameboard.
- Implement basic AI for the computer player to make random legal plays.

### Main Game Loop and DOM Interaction:

- Set up the main game loop to orchestrate gameplay.
- Develop a module for DOM interaction to create a user interface.
- Display gameboards and handle user input for attacking.

### Additional Features:

- Implement a system to allow players to place their ships.
- Enhance AI intelligence by improving attack strategies.
- Optionally, create a 2-player mode for local multiplayer.

## Getting Started

- Clone the repository and open the project in your preferred development environment.
- Run tests to ensure functionality and identify any bugs.
- Start implementing classes and functionalities according to the assignment details.

## Technologies Used

- JavaScript
- HTML/CSS (for UI)
- Testing framework (e.g., Jest)

## Credits

- Inspired by The Odin Project's Battleship assignment.
- Credits to contributors for libraries and resources used in development.

## Author

- [Nurudeen Abdul-Majeed](https://www.linkedin.com/in/abdul-majeed-nurudeen-78266a182/)

## Acknowledgments

- Special thanks to mentors, peers, and online resources for guidance and support during development.

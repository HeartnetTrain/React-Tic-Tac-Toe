/**
 * Game Configuration Constants
 * Centralized configuration for easy maintenance and scaling
 */

export const BOARD_SIZE = 3; // 3x3 board
export const TOTAL_SQUARES = BOARD_SIZE * BOARD_SIZE; // 9 squares
export const SQUARE_SIZE = 80; // pixels
export const BORDER_SIZE = 2; // pixels

export const PLAYERS = {
  X: 'X',
  O: 'O',
};

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

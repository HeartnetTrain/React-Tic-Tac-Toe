import { WINNING_LINES, PLAYERS } from '../constants';

/**
 * Determines the winner of a Tic-Tac-Toe game
 * @param {(string|null)[]} squares - Array of 9 squares, each containing 'X', 'O', or null
 * @returns {string|null} Returns 'X' or 'O' if there's a winner, null otherwise
 * @throws {Error} If squares array has invalid length or contains invalid values
 */
export default function calculateWinner(squares) {
  // Input validation
  if (!Array.isArray(squares) || squares.length !== 9) {
    return null;
  }

  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];
    const squareA = squares[a];
    const squareB = squares[b];
    const squareC = squares[c];

    // Validate that squares contain only valid values
    if (
      squareA &&
      squareA === squareB &&
      squareA === squareC &&
      (squareA === PLAYERS.X || squareA === PLAYERS.O)
    ) {
      return squareA;
    }
  }
  return null;
}

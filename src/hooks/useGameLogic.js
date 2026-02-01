import { useState, useCallback } from 'react';
import { TOTAL_SQUARES, PLAYERS } from '../constants';
import calculateWinner from '../utils/calculateWinner';

/**
 * Custom hook to manage Tic-Tac-Toe game logic and state
 * Separates business logic from UI rendering concerns
 * 
 * @returns {Object} Game state and handlers
 */
export function useGameLogic() {
  const [squares, setSquares] = useState(Array(TOTAL_SQUARES).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const moveCount = squares.filter(square => square !== null).length;
  const winner = calculateWinner(squares);
  const isBoardFull = moveCount === TOTAL_SQUARES;
  const isGameOver = winner || isBoardFull;

  /**
   * Handle square click with game logic validation
   */
  const handleSquareClick = useCallback((index) => {
    // Prevent move if square is occupied or game is over
    if (squares[index] || isGameOver) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[index] = isXNext ? PLAYERS.X : PLAYERS.O;

    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }, [squares, isXNext, isGameOver]);

  /**
   * Reset the game to initial state
   */
  const resetBoard = useCallback(() => {
    setSquares(Array(TOTAL_SQUARES).fill(null));
    setIsXNext(true);
  }, []);

  /**
   * Generate human-readable status message
   */
  const getStatus = useCallback(() => {
    if (winner) {
      return `Player ${winner} won!`;
    }
    if (isBoardFull) {
      return "It's a draw!";
    }
    return `Next player: ${isXNext ? PLAYERS.X : PLAYERS.O}`;
  }, [winner, isBoardFull, isXNext]);

  /**
   * Check if board is empty (for reset button state)
   */
  const isBoardEmpty = squares.every(square => square === null);

  return {
    squares,
    isXNext,
    winner,
    moveCount,
    isGameOver,
    isBoardEmpty,
    handleSquareClick,
    resetBoard,
    getStatus,
  };
}

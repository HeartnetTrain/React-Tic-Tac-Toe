import Square from '../Square/Square';
import styles from './Board.module.css';
import { useGameLogic } from '../../hooks/useGameLogic';
import { BOARD_SIZE } from '../../constants';

/**
 * Board Component
 * Renders the Tic-Tac-Toe game board and manages game flow
 * Game logic is delegated to useGameLogic hook
 */
export default function Board() {
  const {
    squares,
    winner,
    isBoardEmpty,
    handleSquareClick,
    resetBoard,
    getStatus,
  } = useGameLogic();

  return (
    <section className={styles.gameContainer}>
      <div
        className={styles.status}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {getStatus()}
      </div>
      <button
        onClick={resetBoard}
        disabled={isBoardEmpty}
        aria-label="Reset the game board"
        className={styles.resetButton}
      >
        Reset Game
      </button>
      <div
        className={styles.board}
        role="main"
        aria-label="Tic-tac-toe game board"
      >
        {Array.from({ length: BOARD_SIZE }, (_, i) => (
          <div key={`row-${i}`} className={styles.boardRow} role="row">
            {Array.from({ length: BOARD_SIZE }, (_, j) => {
              const squareIndex = i * BOARD_SIZE + j;
              const row = i + 1;
              const col = j + 1;
              return (
                <Square
                  key={squareIndex}
                  value={squares[squareIndex]}
                  onSquareClick={() => handleSquareClick(squareIndex)}
                  position={{ row, col }}
                  isDisabled={winner !== null}
                />
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

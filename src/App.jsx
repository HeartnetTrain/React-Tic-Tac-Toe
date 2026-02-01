import { Board } from './features/game';
import styles from './App.module.css';

/**
 * Main App Component
 * Serves as the entry point for the Tic-Tac-Toe game
 */
export default function App() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Tic-Tac-Toe Game</h1>
      </header>
      <main className={styles.gameBoard}>
        <Board />
      </main>
    </div>
  );
}


import Board from './components/Board';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <h1>My Tic-Tac-Toe Game</h1>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}


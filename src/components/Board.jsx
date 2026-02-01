import Square from './Square';
import styles from './Board.module.css';

export default function Board() {
  return (
    <div className={styles.board}>
      {Array.from({ length: 3 }, (_, i) => (
        <div key={`row-${i}`} className={styles.boardRow}>
          {Array.from({ length: 3 }, (_, j) => {
            const squareIndex = i * 3 + j; // Calculate 0 through 8
            return (
                <Square key={squareIndex}/>
            );
          })}
        </div>
      ))}
    </div>
  );
}
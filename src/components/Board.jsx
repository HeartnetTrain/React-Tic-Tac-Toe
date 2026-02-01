import Square from './Square';
import styles from './Board.module.css';

export default function Board() {
  return (
  <div className={styles.board}>
    <div className={styles.boardRow}>
      <Square />
      <Square />
      <Square />
    </div>
    <div className={styles.boardRow}>
      <Square />
      <Square />
      <Square />
    </div>
    <div className={styles.boardRow}>
      <Square />
      <Square />
      <Square />
    </div>
  </div>);
}

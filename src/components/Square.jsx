import styles from './Square.module.css';

export default function Square({value,SquareBoxClicked}) {
  return <button className={styles.square} onClick={SquareBoxClicked}>{value}</button>;
}

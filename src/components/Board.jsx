import Square from './Square';
import styles from './Board.module.css';
import { useState } from 'react';

export default function Board() {
  const [squares,setSquares] = useState(Array.from(9).fill(null));
  const [isXNext,setIsXNext] = useState(true);

  function handleClick(index) {
    if(squares[index] ) {
      return;
    }
    const nextSquares = squares.slice();

    if(isXNext) {
        nextSquares[index] = 'X';
    }
    else {
      nextSquares[index] = 'O';
    }
    setSquares(nextSquares);
    setIsXNext(!isXNext);

  }
  return (
    <div className={styles.board}>
      {Array.from({ length: 3 }, (_, i) => (
        <div key={`row-${i}`} className={styles.boardRow}>
          {Array.from({ length: 3 }, (_, j) => {
            const squareIndex = i * 3 + j; // Calculate 0 through 8
            return (
                <Square key={squareIndex} 
                value = {squares[squareIndex]}
                SquareBoxClicked = {() => handleClick(squareIndex)} />
            );
          })}
        </div>
      ))}
    </div>
  );
}
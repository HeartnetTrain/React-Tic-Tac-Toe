import Square from './Square';
import styles from './Board.module.css';
import { useState } from 'react';
import calculateWinner from '../utils/calculateWinner';

export default function Board() {
  const [squares,setSquares] = useState(Array.from(9).fill(null));
  const [isXNext,setIsXNext] = useState(true);
  const [nextMove,setNextMove] = useState(0);

  const winner = calculateWinner(squares);
  let status = winner ? `Player ${winner} winned ! ` : nextMove < 9 ? `Next Player is: ${isXNext ? 'X': 'O'}` : "It's a draw !" ; 

  function handleClick(index) {
    if(squares[index] || winner) {
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
    setNextMove(nextMove+1);
  }

  function resetBoard() {
    setSquares(Array.from(9).fill(null));
    setIsXNext(true);
    setNextMove(0);
  }
  return (
    <>
    <div className="status">{status}</div>
    <button onClick={resetBoard} disabled={!squares.length}> Reset Game </button>
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
    </>
  );
}
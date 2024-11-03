import React from 'react'
import Square from './Square'
import './Board.css'

const Board = ({squares, onClick}) => {

    //const [squares, setSquares] = useState(Array(9).fill(null));
    //const [xIsNext, setXIsNext] = useState(true);
    //const nextPlayer = `Next player : ${xIsNext ? 'X':'O'}`;

    // const handleClick = (i) => {
    //     if ( winner ) {
    //         return;
    //     }
    //     const newSquares = squares.slice();
    //     newSquares[i] = xIsNext ? 'X' : 'O';
    //     setSquares(newSquares);
    //     setXIsNext(current => !current);
    // }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />
    }
    
    return (
        <div className='board-wrapper'>            
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
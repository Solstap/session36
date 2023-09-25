import { useState } from 'react'
import { nanoid } from 'nanoid'

const numbers = [1,2,3,4,5,6,7,8,9,10]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

function Game() {
    const [numberToGuess] = useState(() => getRandomInt(1,10)) 
    const [currentGuess, setCurrentGuess] = useState(-1)

    if(currentGuess === numberToGuess) {
        return <p>You won! The number was {numberToGuess}</p>
    }

 return (
    <>
        <h1>Guess the number</h1>
        {numbers.map(n => <button key={nanoid()} onClick={() => setCurrentGuess(n)}>{n}</button>)}
    </>
 )
}
export default Game;
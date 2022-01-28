import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

    const [allDices, setAllDices] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
          const allHeld = allDices.every(die => die.isHeld)
          const firstValue = allDices[0].value
          const allSameValue = allDices.every(die => die.value === firstValue)
          if (allHeld && allSameValue) {
              setTenzies(true)
              console.log("you won")
          }
     
    }, [allDices])
    


    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice(){
        const newDice = []

        for (let i = 0; i < 10; i++) {
            newDice.push(
               generateNewDie() 
            )
        }
        return newDice
    }

    const diceElements = allDices.map(die => (
        <Die key={die.id}  
        value={die.value} 
        hold={die.isHeld}
        holdDice={() => holdDice(die.id)}
        
        />
    ))

    function rollNewDices() {
        if(!tenzies) {
            setAllDices(oldDices => oldDices.map(die => {
                if (die.isHeld) {
                    return die
                } else {
                    return {...die, value: Math.ceil(Math.random() * 6)}
                }
            })) 
        } else {
            setTenzies(false)
            setAllDices(allNewDice())
        }
        
    }

    function holdDice(id) {
        setAllDices(oldDices => oldDices.map(die => {
            return id === die.id ? {...die, isHeld: !die.isHeld} : die
        }))    
    }
    
    
    return (
        <div className="page--wrapper">
            <main>
                {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="die--container">
                   {diceElements}
                </div> 
                <div className="btn--section">
                    <button className="page--button" onClick={rollNewDices}> {tenzies ? "New Game" : "Roll"}</button>
                </div>
            </main>
        </div>
    )
}
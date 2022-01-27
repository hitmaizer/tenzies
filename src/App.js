import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"

export default function App() {

    const [allDices, setAllDices] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
          const allHeld = allDices.every(die => die.isHeld)
          const allNumber = allDices.every(die => die.value)
          if (allHeld && allNumber) {
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
        setAllDices(oldDices => oldDices.map(die => {
            if (die.isHeld) {
                return die
            } else {
                return {...die, value: Math.ceil(Math.random() * 6)}
            }
        }))
    }

    function holdDice(id) {
        setAllDices(oldDices => oldDices.map(die => {
            return id === die.id ? {...die, isHeld: !die.isHeld} : die
        }))    
    }
    
    
    return (
        <div className="page--wrapper">
            <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="die--container">
                   {diceElements}
                </div> 
                <div className="btn--section">
                    <button className="page--button" onClick={rollNewDices}> Roll </button>
                </div>
            </main>
        </div>
    )
}
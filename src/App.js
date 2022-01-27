import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"

export default function App() {

    const [allDices, setAllDices] = React.useState(allNewDice())
    
    function allNewDice(){
        const newDice = []

        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            })
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
        setAllDices(allNewDice())
    }

    function holdDice(id) {
        setAllDices(oldNotes => oldNotes.map(note => {
            return id === note.id ? {...note, isHeld: !note.isHeld} : note
        }))    
    }
    
    console.log(allDices)
    return (
        <div className="page--wrapper">
            <main>
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
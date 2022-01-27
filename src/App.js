import React from "react"
import Die from "./components/Die"

export default function App() {

    const [allDices, setAllDices] = React.useState(allNewDice())
    
    function allNewDice(){
        const newDice = []

        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false
            })
        }
        return newDice
    }

    const diceElements = allDices.map(die => <Die value={die.value} />)

    function rollNewDices() {
        setAllDices(allNewDice())
    }

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
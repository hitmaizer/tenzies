import React from "react"
import Die from "./components/Die"

export default function App() {

    const [allDices, setAllDices] = React.useState(allNewDice())
    const dieElements = allDices.map(dice => <Die value={dice} />)

    function allNewDice(){
        const newDice = []
        for (let i = 0; i < 10; i++){
            newDice.push(Math.ceil(Math.random() * 6))
        } 
        return newDice
    }

   

    return (
        <div className="page--wrapper">
            <main>
                <div className="die--container">
                   {dieElements}
                </div> 
            </main>
        </div>
    )
}
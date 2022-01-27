import React from "react"

export default function Die(props) {
    return (
    <div className="die--wrapper" onClick={(event) => props.holdDice(props.id)}>
        <p className={props.hold ? "held--die" : "die--number"}>
            {props.value}
        </p>
    </div>
    )
}
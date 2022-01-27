import React from "react"

export default function Die(props) {
    return (
    <div className="die--wrapper">
        <p className="die--number">{props.value}</p>
    </div>
    )
}
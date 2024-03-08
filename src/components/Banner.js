import { useState } from "react"
import './banner.css'
import Circle from "./Circle"

const Banner = props => {

    return(
        <div>
            <p>{props.number} of 8</p>
            <div className="circle-contanier">
                <Circle status={props.guess[0]}/>
                <Circle status={props.guess[1]}/>
                <Circle status={props.guess[2]}/>
                <Circle status={props.guess[3]}/>
                <Circle status={props.guess[4]}/>
                <Circle status={props.guess[5]}/>
                <Circle status={props.guess[6]}/>
                <Circle status={props.guess[7]}/>
            </div>
        </div>
    )
}

export default Banner
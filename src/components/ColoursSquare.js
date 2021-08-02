import React from "react"
import ColorBox from "./ColorBox"

const ColoursSquare = ({boxColors, setBoxColors}) => {
    return ( 
        <div className="box-container">
            <ul className="box-list">
                {
                    boxColors.map((boxColour) => (
                        <ColorBox
                            color = {boxColour}
                            text = {boxColour.text}
                            key = {boxColour.key}
                            boxColors = {boxColors}
                            setBoxColors = {setBoxColors}
                        />  
                    ))
                }
            </ul>
        </div>
    )
}

export default ColoursSquare
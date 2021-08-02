import { BackgroundColor } from 'chalk'
import React from 'react'

const ColorBox = ({color, text, key, boxColors, setBoxColors}) =>{
  const deleteHandler = () => {
    setBoxColors(boxColors.filter((el) => el.key != color.key))
  }
  return (
    <div className="box-list-container">
      <li>
        <div className="box" style={{backgroundColor:`${color.color}`}}></div>
        <div className="text">
          {text} <button className="delete" onClick={deleteHandler}>x</button>
        </div>
      </li>
    </div>
  )
}

export default ColorBox;
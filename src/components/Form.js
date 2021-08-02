import React from 'react'

const Form = ({inputColor, setInputColor, boxColors, setBoxColors}) => {
  const allowKeys = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  const inputColorHandler = (e) => {
    setInputColor(e.target.value)
  }
  const submitColor = (e) => {
    e.preventDefault()
    setBoxColors([
      {
        color: '#'+inputColor.toUpperCase(),
        text: '#'+inputColor.toUpperCase(),
        key: Math.random()*1000
      },...boxColors,
    ])
    setInputColor('')
  }
  return (
    <form action="">
      <label htmlFor="inputColor">Add new color : </label>
      <input type="text" id="inputColor" onChange={inputColorHandler} value={inputColor} />
      <button type="submit" onClick={submitColor}>Add</button>
    </form>
  )
}

export default Form;
import React from 'react'

const Form = ({inputColor, setInputColor, boxColors, setBoxColors}) => {
  const inputColorHandler = (e) => {
    setInputColor(e.target.value)
  }
  const submitColor = (e) => {
    e.preventDefault()
    setBoxColors([
      ...boxColors,
      {
        color: '#'+inputColor,
        text: '#'+inputColor,
        key: Math.random()*1000
      },
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
import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import ColoursSquare from './components/ColoursSquare';
import './style/myStyle.css';

function App() {
  const [inputColor, setInputColor] = useState('')
  const [boxColors, setBoxColors] = useState([])
  useEffect(() => {
    getLocalBoxColors()
  }, [])
  useEffect(() => {
    saveLocalBoxColors()
  }, [boxColors])
  const saveLocalBoxColors = () => {
    localStorage.setItem('boxColors', JSON.stringify(boxColors))
  }
  const getLocalBoxColors = () => {
    if (localStorage.getItem('boxColors') === null) {
      localStorage.setItem('boxColors', JSON.stringify([]))
    } else {
      let localBoxColors = JSON.parse(localStorage.getItem('boxColors'))
      setBoxColors(localBoxColors)
    }
  }
  return (
    <div>
      <div className="form">
        <Form
          inputColor={inputColor}
          setInputColor={setInputColor}
          boxColors={boxColors}
          setBoxColors={setBoxColors}
        />
      </div>
      <div className="container">
        <ColoursSquare 
          boxColors = {boxColors}
          setBoxColors = {setBoxColors}
        />
      </div>
    </div>
  );
}

export default App;
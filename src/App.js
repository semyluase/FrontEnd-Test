import React, {useState} from 'react';
import Form from './components/Form';
import ColoursSquare from './components/ColoursSquare';
import './style/myStyle.css';

function App() {
  const [inputColor, setInputColor] = useState('')
  const [boxColors, setBoxColors] = useState([])
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
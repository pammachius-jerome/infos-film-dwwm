import { useState } from 'react';
import './App.css';
import Home from './Home/Home';

function App() {
  const [animation, setAnimation] = useState(true)
  // console.log("état de animation : " + animation)
  const toggleAnimation = () => {
    setAnimation(animation => !animation)
  }
  // console.log("après : " + animation)
  return (
    <div className="App">
      <Home animate = {animation} />
      <header className="App-header">
        <img src={"../images/dwwm_1.png"} className="App-logo" alt="logo" />
        <p>
          TP React Développeur Web et Web Mobile
        </p>
        <button className='App-button' onClick={toggleAnimation}>Modifier l'animation</button>
      </header>
    </div>
  );
}

export default App;
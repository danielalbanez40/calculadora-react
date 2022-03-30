import './App.css';
import { useState } from 'react';
import Logo from './assets/img/calculator-logo.svg'
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const handleInput = (val) => setInput(input + val);
  const handleClear = () => setInput('');
  
  const handleResult = () => {
   (input) ? setInput(evaluate(input)) : alert('Debe ingresar un valor');
       
  }

  return (
    <div className="App">
      <div className="container-logo">
        <img src={Logo} alt="Logo de calculadora" className="logo" />
        <h1>Mi Calculadora</h1>
      </div>
      <div className="calculator-container">
        
        <Screen input={input}/>

        <div className="row">
          <Button handleInput={handleInput}>1</Button>
          <Button handleInput={handleInput}>2</Button>
          <Button handleInput={handleInput}>3</Button>
          <Button handleInput={handleInput}>+</Button>
        </div>

        <div className="row">
          <Button handleInput={handleInput}>4</Button>
          <Button handleInput={handleInput}>5</Button>
          <Button handleInput={handleInput}>6</Button>
          <Button handleInput={handleInput}>-</Button>
        </div>

        <div className="row">
          <Button handleInput={handleInput}>7</Button>
          <Button handleInput={handleInput}>8</Button>
          <Button handleInput={handleInput}>9</Button>
          <Button handleInput={handleInput}>*</Button>
        </div>

        <div className="row">
          <Button handleInput={handleResult}>=</Button>
          <Button handleInput={handleInput}>0</Button>
          <Button handleInput={handleInput}>.</Button>
          <Button handleInput={handleInput}>/</Button>
        </div>

        <div className="row">
          <ClearButton handleClear={handleClear}>
            Clear (AC)
          </ClearButton>
        </div>

      </div>
    </div>
  );
}

export default App;

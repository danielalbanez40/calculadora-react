import './App.css';
import Logo from './assets/img/calculator-logo.svg'
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App">
      <div className="container-logo">
        <img src={Logo} alt="Logo de calculadora" className="logo" />
        <h1>Mi Calculadora</h1>
      </div>
      <div className="calculator-container">
        <Screen/>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <ClearButton>
            Clear (AC)
          </ClearButton>
        </div>

      </div>
    </div>
  );
}

export default App;

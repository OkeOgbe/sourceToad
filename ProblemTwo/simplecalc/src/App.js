import React, {useState} from 'react'
import './App.css';

function App() {

  //please run on mobile screen for best experience

  const [value, setValue] = useState('')

  const setNumber = (input) => {
    setValue(value + input);
  } 

  const calculate = () => {
    //pardon my use of eval, can't think of an alternative
    let result = eval(value);
    setValue(result);
  }

    return (
        <div className="App">

            <div className="calc">
                <div className="screen">
                    <h2 className="value">{value}</h2>
                </div>
                <div className="keypad">
                    <div className="d-flex">
                        <button className="btn" onClick={() => setValue('')}>AC</button>
                        <button className="btn">+/-</button>
                        <button className="btn" >%</button>
                        <button className="btn orange" onClick={() => setNumber("/")}>\</button>
                    </div>
                    <div className="d-flex">
                        <button className="btn" onClick={() => setNumber(7)}>7</button>
                        <button className="btn" onClick={() => setNumber(8)}>8</button>
                        <button className="btn" onClick={() => setNumber(9)}>9</button>
                        <button className="btn orange" onClick={() => setNumber("*")}>*</button>
                    </div>
                    <div className="d-flex">
                        <button className="btn" onClick={() => setNumber(4)}>4</button>
                        <button className="btn" onClick={() => setNumber(5)}>5</button>
                        <button className="btn" onClick={() => setNumber(6)}>6</button>
                        <button className="btn orange" onClick={() => setNumber("-")}>-</button>
                    </div>
                    <div className="d-flex">
                        <button className="btn" onClick={() => setNumber(1)}>1</button>
                        <button className="btn" onClick={() => setNumber(2)}>2</button>
                        <button className="btn" onClick={() => setNumber(3)}>3</button>
                        <button className="btn orange" onClick={() => setNumber('+')}>+</button>
                    </div>
                    <div className="d-flex">
                        <button className="btn long" onClick={() => setNumber(0)}>0</button>
                        <button className="btn" onClick={() => setNumber('.')}>.</button>
                        <button className="btn orange" onClick={() => calculate()}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

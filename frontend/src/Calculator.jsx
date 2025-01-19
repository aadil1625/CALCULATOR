import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (err) {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input
          type="text"
          value={input}
          placeholder="0"
          readOnly
          id="inputBox"
        />
        <div>
          <button className="button operator" onClick={() => handleButtonClick('AC')}>AC</button>
          <button className="button operator" onClick={() => handleButtonClick('DEL')}>DEL</button>
          <button className="button operator" onClick={() => handleButtonClick('%')}>%</button>
          <button className="button operator" onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick('7')}>7</button>
          <button className="button" onClick={() => handleButtonClick('8')}>8</button>
          <button className="button" onClick={() => handleButtonClick('9')}>9</button>
          <button className="button operator" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick('4')}>4</button>
          <button className="button" onClick={() => handleButtonClick('5')}>5</button>
          <button className="button" onClick={() => handleButtonClick('6')}>6</button>
          <button className="button operator" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick('1')}>1</button>
          <button className="button" onClick={() => handleButtonClick('2')}>2</button>
          <button className="button" onClick={() => handleButtonClick('3')}>3</button>
          <button className="button operator" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick('00')}>00</button>
          <button className="button" onClick={() => handleButtonClick('0')}>0</button>
          <button className="button" onClick={() => handleButtonClick('.')}>.</button>
          <button className="button equalBtn" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

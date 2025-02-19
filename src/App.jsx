import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold input values, result, and operator
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState('');

  // Function to handle number input
  const handleNumberChange = (e, value) => {
    if (value === 'first') {
      setFirstValue(e.target.value);
    } else {
      setSecondValue(e.target.value);
    }
  };

  // Function to handle operator selection and calculation immediately
  const handleOperatorClick = (op) => {
    setOperator(op);
    
    // Perform the calculation when the operator is selected
    if (firstValue && secondValue) {
      const num1 = parseFloat(firstValue);
      const num2 = parseFloat(secondValue);
      let calcResult;
      
      if (op === '+') {
        calcResult = num1 + num2;
      } else if (op === '-') {
        calcResult = num1 - num2;
      } else if (op === '*') {
        calcResult = num1 * num2;
      } else if (op === '/') {
        if (num2 === 0) {
          calcResult = 'Cannot divide by 0';
        } else {
          calcResult = num1 / num2;
        }
      }
      
      setResult(calcResult);
    }
  };

  // Function to clear the input fields and result
  const handleClear = () => {
    setFirstValue('');
    setSecondValue('');
    setResult(null);
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="input-section">
        <input
          type="number"
          value={firstValue}
          onChange={(e) => handleNumberChange(e, 'first')}
          placeholder="Enter first number"
        />
        <span>{operator}</span>
        <input
          type="number"
          value={secondValue}
          onChange={(e) => handleNumberChange(e, 'second')}
          placeholder="Enter second number"
        />
      </div>

      <div className="operator-buttons">
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>

      <div className="result-display">
        <p>Result: {result !== null ? result : 'No result yet'}</p>
      </div>

      <div className="result-section">
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;

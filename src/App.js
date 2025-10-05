import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('add');

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    if (operation === 'add') {
      setResult(number1 + number2);
    } else if (operation === 'subtract') {
      setResult(number1 - number2);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>React Calculator</h1>
        <div className="input-group">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
          <select 
            className="operator-select"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="add">+</option>
            <option value="subtract">-</option>
          </select>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>
        <button onClick={handleCalculate}>Calculate</button>
        {result !== '' && (
          <div className="result">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

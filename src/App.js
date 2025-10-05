import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Simple Calculator</h1>
        <div className="input-group">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
          <span className="operator">+</span>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>
        <button onClick={handleAddition}>Calculate</button>
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

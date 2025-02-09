import { useState } from 'react'
import './App.css'

function App() {
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxIn">
          <input type="text" />
          <button className='cpyBtn'>COPY</button>
        </div>

        <div className="passwordLength">
          <label>Password length</label>
          <input type="number" max={20} />
        </div>

        <div className="includeNumber checkBoxSection">
          <label>Include Numbers</label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
        </div>

        <div className="includeUpperCase checkBoxSection">
          <label>Include Upper Case</label>
          <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)} />
        </div>

        <div className="includeLowerCase checkBoxSection">
          <label>Include Lower Case</label>
          <input type="checkbox" checked={lowerCase} onChange={() => setLowerCase(!lowerCase)} />
        </div>

        <div className="includeSymbols checkBoxSection">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
        </div>

        <button className='btn'>Generate Password</button>

      </div>
    </>
  )
}

export default App

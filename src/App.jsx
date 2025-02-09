import { useState } from 'react'
import './App.css'
import { NC, SC, UC, LC } from './data/passChar';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [numbers, setNumbers] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passLength, setPassLength] = useState(10);
  const [resultPass, setResultPass] = useState('');

  const createPassword = () => {
    let charPass = '';
    let finalPass = '';

    if (numbers || upperCase || lowerCase || symbols) {
      if (numbers) charPass += NC;
      if (upperCase) charPass += UC;
      if (lowerCase) charPass += LC;
      if (symbols) charPass += SC;

      for (let i = 0; i < passLength; i++) {
        finalPass += charPass.charAt(Math.floor(Math.random() * charPass.length))
      }

      setResultPass(finalPass);
    }
    else {
      alert("Please select any password type");
    }
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(resultPass);
    toast.info("password copied.");
  }


  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxIn">
          <input type="text" defaultValue={resultPass} />
          <button className='cpyBtn' onClick={copyPassword}>COPY</button>
        </div>

        <div className="passwordLength">
          <label>Password length</label>
          <input type="number" value={passLength} min={10} onChange={(event) => setPassLength(event.target.value)} max={20} />
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

        <button className='btn' onClick={createPassword}>Generate Password</button>

      </div>
      <ToastContainer />
    </>
  )
}

export default App

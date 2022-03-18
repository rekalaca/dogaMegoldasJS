import { useState } from "react";
import './App.css';

function App() {

  const [nev, setNev] = useState('');
  const [joNev, setjoNev] = useState(true);
  const [kod, setKod] = useState('');
  const [joKod, setjoKod] = useState(true);
  const [ar, setAr] = useState(0);
  const [joAr, setjoAr] = useState(true);

  function vizsgal() {
    if (nev.length < 1) setjoNev(false)
    else setjoNev(true);

    if (kod.length == 4) setjoKod(true)
    else setjoKod(false);

    if (ar >= 100 && ar <= 10000) setjoAr(true)
    else setjoAr(false);
  }


  return (
    <>
      <div>
        <input type="text" placeholder="nev" onChange={(e) => setNev(e.target.value)} /><label>{joNev ? '*' : 'Hibás név!'}</label>
      </div>
      <div>
        <input type="text" placeholder="kod" onChange={(e) => setKod(e.target.value)} /><label>{joKod ? '*' : 'Hibás kód!'}</label>
      </div>
      <div>
        <input type="number" placeholder="ar" onChange={(e) => setAr(e.target.value)} /><label>{joAr ? '*' : 'Hibás ár!'}</label>
      </div>
      <button onClick={() => vizsgal()}>Bevitel</button>
      <div>
        <p>Név: {joNev ? nev : ''}</p>
        <p>Ár: {joAr ? ar * 1.27 : 0}</p>
      </div>

    </>
  );
}

export default App;

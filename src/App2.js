import { useState } from "react";
import './App.css';

function App2() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [osszeg, setOsszeg] = useState('');

    function vizsgal() {

        if ((a + b) % 2 == 1) {
            setOsszeg(`Az összeg: ${a + b} A külnbség: ${a - b} A szorzat: ${a * b}`)
        }
        else setOsszeg('Hiba');

    }

    return (
        <>
            <input placeholder="A" type="number" onChange={(e) => setA(e.target.valueAsNumber)} />
            <input placeholder="B" type="number" onChange={(e) => setB(e.target.valueAsNumber)} />
            <button onClick={() => vizsgal()}>Bevitel</button>

            <div><p>{osszeg}</p></div>
        </>
    )

}

export default App2;
import { useState } from "react";
import './App.css';
import Adat from "./data.json";

function App3() {

    const [nev, setNev] = useState('');
    const [jonev, setJonev] = useState(false);
    const [datum, setDatum] = useState(0);
    const [jodatum, setjoDatum] = useState(true);
    const [nem, setNem] = useState("Nő");
    const [vegz, setVegz] = useState('');
    const [adat, setAdat] = useState({});
    const [ki, setKi] = useState(null);

    const send = () => {
        setAdat(Adat.push({ nev: nev, datum: datum, nem: nem, vegz: vegz }));
    }

    function vizsgal() {

        if ((nev.length != 0) && (datum >= 1920 && datum <= 2022) && (vegz != "")) {
            return send();
        }
        else
            setKi("Nem jó adatot, vagy adatokat adtál meg !")
    }

    return (

        <>
            <input placeholder="Név" type="text" onChange={(e) => setNev(e.target.value)} />
            <input placeholder="Születési dátum" type="number" onChange={(e) => setDatum(e.target.valueAsNumber)} />
            <label>Ha a neme férfi:</label>
            <input id="Férfi" type="checkbox"
                onChange={(e) => (setNem(e.target.checked ? "Férfi" : "Nő"))} />
            <select onClick={(e) => setVegz(e.target.value)}>
                <option value="">Válassz!</option>
                <option value="Általános iskola">Általános iskola</option>
                <option value="Gimnázium">Gimnázium</option>
                <option value="Szakmunkásképző">Szakmunkásképző</option>
                <option value="Egyetem">Egyetem</option>
            </select>
            <button onClick={() => vizsgal()}>Bevitel</button>

            <div>
                <p>{ki}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Név:</th>
                            <th>Dátum:</th>
                            <th>Végzettség:</th>
                            <th>Neme:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Adat.map((elem, index) => (
                            <tr key={index}>
                                <td>{elem.nev}</td>
                                <td>{elem.datum}</td>
                                <td>{elem.vegz}</td>
                                <td>{elem.nem}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    )


}

export default App3;
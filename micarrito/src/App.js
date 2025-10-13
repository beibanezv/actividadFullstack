import logo from './logo.svg';
import './App.css';
import Boton from './componentes/atomos/Boton';
import Checkbox from './componentes/atomos/Checkbox';
import React, { useState } from 'react';
import Imagen from './componentes/atomos/Imagen';
import Input from './componentes/atomos/Input';
import Titulo from './componentes/atomos/Titulo';

function App() {
  const [opt1, setOpt1] = useState(true);
  const [opt2, setOpt2] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Boton manejarClic={() => alert('Botón clickeado!')}>
          Clickeame
        </Boton>

        {/* Ejemplo controlado: el estado se mantiene en App */}
        <Checkbox label="Opción 1" id="opt1" checked={opt1} onChange={(e) => setOpt1(e.target.checked)} />
        <Checkbox label="Opción 2" id="opt2" checked={opt2} onChange={(e) => setOpt2(e.target.checked)} />

        <Imagen src={"./logo192.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

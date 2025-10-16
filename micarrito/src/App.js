import './App.css';
import React from 'react';
import Layout from './componentes/plantillas/Layout';
import PanelResumen from './componentes/plantillas/PanelResumen';
import ListadoHabitos from './componentes/paginas/ListadoHabitos';

function App() {
  return (
    <div className="App">
      <Layout side={<PanelResumen totalToday={2} totalWeek={8} />}>
        <ListadoHabitos />
      </Layout>
    </div>
  );
}

export default App;

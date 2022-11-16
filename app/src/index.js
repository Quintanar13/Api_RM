import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Title from './components/Title';
import Personajes from './components/Personajes';
import Cuerpo from './styles/Cuerpo';
import Nav from './components/Nav';
import Buscar from './components/Buscar';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  const[npage, setNpage] = useState(1);
  const [busqueda,setBusqueda] = useState("");

  return (
    <>
      <Cuerpo>
      <Title/>
      <Buscar busqueda = {busqueda} setBusqueda = {setBusqueda}/>
      <Personajes pagina={npage} busqueda={busqueda}/>
      <Nav pagina={npage} npagina={setNpage}/>
      </Cuerpo>
    </>
  );
};

root.render(<Jsx/>);
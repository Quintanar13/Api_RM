import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Title from './components/Title';
import Personajes from './components/Personajes';
import Body from './styles/Body';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  const[npage, setNpage] = useState(1);
  return (
    <>
      <Body>
      <Title/>
      <Personajes pagina={npage}/>
      <Nav pagina={npage} npagina={setNpage}/>
      </Body>
    </>
  );
};

root.render(<Jsx/>);
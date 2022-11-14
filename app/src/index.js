import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from './components/Title';
import Personajes from './components/Personajes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './styles/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  return (
    <>
      <Body>
      <Title/>
      <Personajes/>
      </Body>
    </>
  );
};

root.render(<Jsx/>);
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Article from './my blog/Article/Article'

// Css
import './index.scss';

// Pravila:
// Pocinju sa use (useState, useEffect...)
// Ne mogu da se pozivaju u kondicionalu (if else)
// Moraju da se pozovu unutar komponente
// Ime komponente u kojoj se pozivaju mora biti sa pocetnim velikim slovom

function Listing() {

  // if (true) {
  //   const [state, setState] = useState(1)
  // }

  const handleTitleClick = () => {

    if (title === 'NASLOV') {
      setTitle(111);
    } else {
      setTitle('NASLOV');
    }
  }

  // Naslov
  const [title, setTitle] = useState('NASLOV');

  return <h1 onClick={handleTitleClick}>{title}</h1>
}

ReactDom.render(<Listing />, document.getElementById('root'));
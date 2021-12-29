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

  // let title = 'NASLOV';

  const handleTitleClick = () => {
    // title = 'NOV NASLOV';
    // console.log(title);
    setTitle('NOV NASLOV');
  }

  const stringState = useState('proba');
  const arrayState = useState([1, 2, 3]);

  const stringStateValue = stringState[0];
  const stringStateFunction = stringState[1];

  // console.log(stringStateValue);
  // console.log(stringStateFunction);

  // -------------------- State destructured --------------------------- //

  // const [state, setState] = [vrednost, funkcija];
  const [state, setState] = useState('nas state');

  // console.log(state, setState);

  // Naslov
  const [title, setTitle] = useState('NASLOV');

  return <h1 onClick={handleTitleClick}>{title}</h1>
}

ReactDom.render(<Listing />, document.getElementById('root'));
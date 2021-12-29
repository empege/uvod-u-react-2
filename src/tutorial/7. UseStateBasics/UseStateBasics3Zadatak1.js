import React, { useState } from 'react';
import ReactDom from 'react-dom';

// Css
import './index.scss';

// Pravila:
// Pocinju sa use (useState, useEffect...)
// Ne mogu da se pozivaju u kondicionalu (if else)
// Moraju da se pozovu unutar komponente
// Ime komponente u kojoj se pozivaju mora biti sa pocetnim velikim slovom

/* 
Napravite jedan js fajl npr. data.js u kom cete imati niz, koji isto moze da se zove data / people i uradite named export da moze da se koristi dalje.
Neka to bude niz objekata koja imaju po 4 coveka npr. I svaki neka ima id i ime.
Zatim napravite novu komponntu koja se zove People. U nju importujte ovu datu.
Koristecu useState napravite svoju promenljivu people sa fjom setPeople. Defaulta vrednost ce biti taj importovani niz objekata.
Na kraju koristeci map() fju, izvrtite ceo taj niz da prikazuje imena h3 tagovima i neka svaki ima svoj key (id), i neka prikazuje ime tog coveka. Dajte i klasu da mozete lako da stilizujete to.
Ako ovo uspete: napravite button koji je na dnu komponente i kojim cete izbrisati sva imena, tacnije sve ljude, tako da se nista vise ne prikazuje. (tip: people ce biti prazan niz :D)
Neka se listing sad nazove App, i u njega cete gore da importujete tu komponentu people.
Pazite na export default samo dole.
*/

function App() {

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

ReactDom.render(<App />, document.getElementById('root'));
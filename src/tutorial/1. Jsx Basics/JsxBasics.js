import React from 'react';
import ReactDom from 'react-dom';

/* PRAVILA JSX-a: */
// 1. Element/komponenta uvek mora da ima closing tag, ukljucujuci i img, br tagove koji obicno to ne moraju da imaju.
// 2. Uvek vracamo jedan element/fragment (<React.Fragment> / <>)
// 3. Koristimo camelCase za atribute (onclick = onClick!)
// 4. class = className
// 5. return mora imati ( ) ako idemo u vise redova

function Pozdrav() {
  return (
    <>
      <h1 className='pozdrav__naslov'>Pozdrav</h1>
      <div>
        Random tekst.
      </div>
    </>
  )

  // JSX nije HTML vec JS koji izgleda kao HTML da bi nama bilo lakse!
  // return React.createElement('h1', {}, React.createElement('p', {}, 'jsx nije html!'));
}

ReactDom.render(<Pozdrav />, document.getElementById('root'));
import React from 'react';
import ReactDom from 'react-dom';

function Listing() {
  return (
    <>
      <h1 className='pozdrav__naslov'>My Blog</h1>
      <section>
        <Article />
        <Article />
        <Article />
        <Article />
      </section>
    </>
  )
}

// explicit return
const Article = () => {
  return (
    <article>
      <h3>Article 1</h3>
      <img src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" width="250" alt="article" />
      <p>This is article text.</p>
    </article>
  )
}

// implicit return - implicira - jedna linija i return se podrazumeva. Vise linija mora u { } i da se napise eksplicitno => { return ... }
const Proba = () => <h1>Proba</h1>

ReactDom.render(<Listing />, document.getElementById('root'));
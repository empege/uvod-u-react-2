import React from 'react';
import ReactDom from 'react-dom';

// Css
import './index.scss';

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

  function functionReturn() {
    const x = 5;
    return 2 + x;
  }

  const title = 'Article 1'
  const src = 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
  const text = 'This is article text.';

  return (
    <article style={{ background: 'white', border: '5px solid rgb(17, 37, 81)', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <img src={src} width="250" alt={title} />
      <p>{text}</p>

      <div>{2 + 2}</div>
      <div>{functionReturn()}</div>
      {/* <div>{{ a: 1, b: 2 }}</div> */}
    </article>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'));
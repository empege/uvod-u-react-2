import React from 'react';
import ReactDom from 'react-dom';

// Default export import
import Pera from './my blog/Article/Article'

// Css
import './index.scss';

// Named export import
import { articles } from './articlesData';
import { pozdrav } from './tutorial/testingImport/testingImport'
console.log(articles);

function Listing() {
  return (
    <section className="o-listing">
      <h1 className='pozdrav__naslov'>{pozdrav}</h1>
      <section>
        {
          articles.map((current, index) => {
            return <Pera key={current.id} {...current} />
          })
        }
      </section>
    </section>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'));
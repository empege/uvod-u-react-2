import React from 'react';
import ReactDom from 'react-dom';

// Css
import './index.scss';

function saberi(a, b) {
  console.log(a + b);
}
saberi(5, 10)

const article2 = {
  title: 'Article 2 - Objekat',
  src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
  text: 'This is article text',
  date: `Mesec je: ${Number(new Date().getMonth().toString()) + 1}`
}

function Listing() {
  return (
    <section className="o-listing">
      <h1 className='pozdrav__naslov'>My Blog</h1>
      <section>
        <Article
          title='Article 1 Direktno u pozivu'
          src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
          text='This is article 1 text'
          date={`Mesec je: ${Number(new Date().getMonth().toString()) + 1}`}
        />
        <Article
          title={article2.title}
          src={article2.src}
          text={article2.text}
          date={article2.date}
        />
        <Article
          title='Article 3'
          src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
          text='This is article 3 text'
          date={`Mesec je: ${Number(new Date().getMonth().toString()) + 1}`}
        />
        <Article
          title='Article 4'
          src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
          text='This is article 4 text'
          date={`Mesec je: ${Number(new Date().getMonth().toString()) + 1}`}
        />
      </section>
    </section>
  )
}

const Article = (props) => {

  console.log(props.title);

  return (
    <article className="m-article" style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      <h3>{props.title}</h3>
      <div className="m-article__content">
        <img src={props.src} width="250" alt={props.title} />
        <p>{props.text}</p>
      </div>
      <p>{props.date}</p>
    </article>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'));
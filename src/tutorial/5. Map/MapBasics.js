import React from 'react';
import ReactDom from 'react-dom';

// Css
import './index.scss';

function saberi(a, b) {
  console.log(a + b);
}
saberi(5, 10)

const articles = [
  {
    id: '1',
    title: 'Article 1',
    src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    text: 'This is article text',
    date: `Mesec je: ${Number(new Date().getMonth().toString()) + 1}`
  },
  {
    id: '2',
    title: 'Article 2',
    src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    text: 'This is article text',
    date: `Mesec je: ${Number(new Date().getMonth().toString()) + 1}`
  },
  {
    id: '3',
    title: 'Article 3',
    src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    text: 'This is article text',
    date: `Mesec je: ${Number(new Date().getMonth().toString()) + 1}`
  },
  {
    id: '4',
    title: 'Article 4',
    src: 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg',
    text: 'This is article text',
    date: `Mesec je: ${Number(new Date().getMonth().toString()) + 1}`
  },
]

const arr = ['prvi', 'drugi', 'treci']
// Objekat nije validno dete react elementa
const obj = { a: '1' }

function Listing() {
  return (
    <section className="o-listing">
      <h1 className='pozdrav__naslov'>My Blog</h1>
      <section>
        {
          articles.map((current, index) => {

            // const { id, title, src, text, date } = current;

            // console.log(index, current);
            // return <Article key={id} title={title} src={src} text={text} date={date} />
            return <Article key={current.id} {...current} />
          })
        }
      </section>
    </section>
  )
}

const Article = (props) => {

  console.log(props);

  const { src, title, text, date } = props;

  return (
    <article className="m-article" style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      <h3>{title}</h3>
      {props.children}
      <div className="m-article__content">
        <img src={src} width="250" alt={title} />
        <p>{text}</p>
      </div>
      <p>{date}</p>
    </article>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'));
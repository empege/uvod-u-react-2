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

// const Article = ({ title, src, text, date }) => {
const Article = (props) => {

  // Destructuring an Object:
  const { src, title, text, date } = props;

  // 1 linija === svemu ovom dole! Destructuring
  // const title = props.title;
  // const src = props.src;
  // const text = props.text;
  // const date = props.date;


  // Destructuring an Array:
  const arr = ['jedan', 'dva', 'tri'];

  // Ide po redu, za razliku od objekta gde to nije vazno
  const [prvi, drugi, treci] = arr;
  console.log(prvi, drugi, treci);

  // const prvi = arr[0];
  // const drugi = arr[1];
  // const treci = arr[2];

  // Temporary value with destructuring:
  let x = '1';
  let y = '2';
  console.log(x, y);

  // let temp = y;
  // x = y;
  // y = temp;

  [x, y] = [y, x]
  console.log(x, y);

  return (
    <article className="m-article" style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      <h3>{title}</h3>
      <div className="m-article__content">
        <img src={src} width="250" alt={title} />
        <p>{text}</p>
      </div>
      <p>{date}</p>
    </article>
  )
}

ReactDom.render(<Listing />, document.getElementById('root'));
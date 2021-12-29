import React from 'react';

const Article = (props) => {

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

export const namedKolikoHoces1 = 'Mozemo named exporta koliko zelimo, ali samo jedan default';
export const namedKolikoHoces2 = 'Mozemo named exporta koliko zelimo, ali samo jedan default';
export const namedKolikoHoces3 = 'Mozemo named exporta koliko zelimo, ali samo jedan default';

export default Article;
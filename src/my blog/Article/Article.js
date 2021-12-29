import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Article = (props) => {

  const { src, title, text, date } = props;

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    document.documentElement.style.overflow = 'hidden';
    return <Modal setShowModal={setShowModal} {...props} />
  }

  return (
    <article className="m-article" style={{ border: '5px solid rgb(17, 37, 81)', marginBottom: '20px' }}>
      <h3 className="m-article__title">
        <span>{title}</span>
        <span onClick={() => { setShowModal(!showModal) }}>Open Me!</span>
      </h3>
      {/* {props.children} */}
      <div className="m-article__content">
        <img src={src} width="250" alt={title} />
        <p style={{ lineHeight: '2' }}>
          {show ? text : `${text.slice(0, 80)}...`}
          <button style={{ border: 'none' }} className="btn" onClick={() => { setShow(!show) }}>{show ? 'Show less' : 'Show more'}</button>
        </p>

      </div>
      <p>{date}</p>
    </article>
  )
}

// export const namedKolikoHoces1 = 'Mozemo named exporta koliko zelimo, ali samo jedan default';
// export const namedKolikoHoces2 = 'Mozemo named exporta koliko zelimo, ali samo jedan default';
// export const namedKolikoHoces3 = 'Mozemo named exporta koliko zelimo, ali samo jedan default';

export default Article;
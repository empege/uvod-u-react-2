import React, { useState } from 'react'

const Slide = ({ img, title, description, position }) => {

  const [show, setShow] = useState(false);

  return (
    <article className={`slider__slide ${position}`}>
      <h3>{title}</h3>
      <div className="slider__image-wrapper">
        <img className='slider__image' src={img} alt={title} />
      </div>
      <p className='slider__desc'>{show ? description : `${description.slice(0, 180)}...`}
        <button className="slider__show-more" onClick={() => setShow(!show)}>{show ? 'Manje' : 'Jos'}</button>
      </p>

    </article>
  )
}

export default Slide

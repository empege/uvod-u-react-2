import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Panel = (props) => {

  const { id, title, info } = props;

  const [isActive, setIsActive] = useState(false);

  const togglePanel = () => {
    setIsActive(!isActive);
  }

  return (
    <article key={id} className="m-accordion__panel">
      <div className="m-accordion__header" onClick={togglePanel}>
        <h4>{title}</h4>
        <button className="m-accordion__btn">{isActive ? <AiFillMinusCircle /> : <AiFillPlusCircle />}</button>
      </div>
      <p className={`m-accordion__info ${isActive && 'm-accordion__info--active'}`}>{info}</p>
    </article>
  )
}

export default Panel

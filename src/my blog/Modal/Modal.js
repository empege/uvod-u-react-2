import React from 'react'
import './modal.scss'

const Modal = (props) => {

  const { src, title, text, date, setShowModal } = props;

  const hideModal = () => {
    document.documentElement.style.overflow = '';
    setShowModal(false);
  }

  return (
    <div className="m-modal">
      <div className="m-modal__close" style={{ display: 'flex' }}>
        <button className="btn" onClick={hideModal}>X</button>
      </div>
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={src} alt={title} width="500" />
      <p>{text}</p>
    </div>
  )
}

export default Modal

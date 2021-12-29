import React, { useState, useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import Slide from './Slide'

import './slider.scss'

import { data } from './sliderData'

const Slider = () => {

  const [slideData, setSlideData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSlideData(data);
      setIsLoaded(true);
    }, 2000)
  }, [])

  const nextSlide = () => {
    setSlideIndex((prev) => {
      if (prev === slideData.length - 1) {
        return 0
      }
      return prev + 1;
    })
  }

  const prevSlide = () => {
    setSlideIndex((prev) => {
      if (prev === 0) {
        return slideData.length - 1
      }
      return prev - 1;
    })
  }

  if (isLoaded) {
    return (
      <section className="slider">
        <h1>Planete</h1>
        {
          slideData.map((slide, index) => {

            let position = 'slider__slide--next';

            if (slide.id === slideIndex) {
              position = 'slider__slide--active';
            }

            if (slide.id < slideIndex) {
              position = 'slider__slide--prev'
            }


            return <Slide key={slide.id} {...slide} position={position} />
          })
        }
        <div className="slider__btn-wrapper">
          <button className="slider__btn slider__btn--prev" onClick={prevSlide}>{'<'}</button>
          <button className="slider__btn slider__btn--next" onClick={nextSlide}>{'>'}</button>
        </div>
      </section>
    )
  }

  return (
    <section className="h-loader">
      <FaSpinner style={{ marginRight: '30px' }} />
      <h1 style={{ marginTop: '20px' }}>LOADING...</h1>
    </section>)
}

export default Slider

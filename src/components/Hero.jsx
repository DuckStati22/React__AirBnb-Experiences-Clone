import React from 'react';
import img from '../img/hero-image.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__img-cont">
        <img className="hero__img" src={img} alt="heroes" />
      </div>
      <div className="hero__info">
        <h1 className="hero__title">Online Experiences</h1>
        <p className="hero__para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  )
}

export default Hero
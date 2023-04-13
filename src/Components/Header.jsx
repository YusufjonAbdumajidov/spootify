import React from 'react';
import HeroImage from '../images/hero.svg';
import { BiSun, BiMoon } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='header'>
        
        <img src={HeroImage} alt="hero" />

        <section>
            <h1>Your favourite tunes</h1>
            <p>All <BiSun /> and all <BiMoon/> </p>
        </section>
    </div>
  )
}

export default Header
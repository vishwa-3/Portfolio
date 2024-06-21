import React from 'react'
import bg from '../assets/Logo.png'

function Hero() {
  return (
    <div className='hero'>
        <img src={bg} alt="logo" />
        <h1 className='txt'>VISHWA</h1>
    </div>
  )
}

export default Hero
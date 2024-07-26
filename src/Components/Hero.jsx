import React from 'react'
import bg from '../assets/Logo.png'

import { motion } from "framer-motion"

function Hero() {
  return (
    <div className='hero'>
      <motion.img
        src={bg} alt="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [.8,1.1,1] }}
        transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      />
      <h1 className='txt'>VISHWA</h1>
    </div>
  )
}

export default Hero
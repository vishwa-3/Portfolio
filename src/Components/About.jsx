import React from 'react'
import profile from '../assets/profile.jpg'
import Resume from '../assets/Resume.pdf'

import { motion } from "framer-motion"

function About() {
    return (
        <motion.div
            className='about' id="about"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true }}
        >
            <h1 className='heading'>About</h1>
            <img src={profile} alt="profile" />
            <p className='para'>I am Vishwa, a recent BCA graduate with a strong foundation in web development, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have completed a 4-month internship as a frontend developer at Postulate Info Tech, where I gained hands-on experience in building and managing web applications.

                I am passionate about technology and constantly seek to expand my skill set. While I enjoy web development, my dream is to delve into game development, combining my programming skills with my creativity.
                <a href={Resume} download='Resume'><button>Resume</button></a>
            </p>
        </motion.div>
    )
}

export default About
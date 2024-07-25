import React from 'react'
import profile from '../assets/profile.jpg'
import Resume from '../assets/Resume.pdf'

function About() {
    return (
        <div className='about' id="about">
            <h1 className='heading'>About</h1>
            <img src={profile} alt="profile" />
            <p className='para'>I am Vishwa, a recent BCA graduate with a strong foundation in web development, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have completed a 4-month internship as a frontend developer at Postulate Info Tech, where I gained hands-on experience in building and managing web applications.

            I am passionate about technology and constantly seek to expand my skill set. While I enjoy web development, my dream is to delve into game development, combining my programming skills with my creativity.
            <a href={Resume} download='Resume'><button>Resume</button></a>
            </p>
        </div>
    )
}

export default About
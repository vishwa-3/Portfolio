import React from 'react'
import profile from '../assets/profile.jpg'
import Resume from '../assets/ResumeWebDev.pdf'

function About() {
    return (
        <div className='about' id="about">
            <h1 className='heading'>About</h1>
            <img src={profile} alt="profile" />
            <p className='para'>Hello! I'm Vishwa, a 20-year-old with a passion for game development and a keen interest in web development. Currently exploring the exciting world of web development to broaden my skill set and take on new challenges. Armed with strong frontend skills and a hunger to master backend development. Seeking an entry-level role to apply frontend expertise, embrace backend challenges, and contribute to innovative projects in a dynamic and supportive environment.
            <a href={Resume} download='Resume'><button>Resume</button></a>
            </p>
        </div>
    )
}

export default About
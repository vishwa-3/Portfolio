import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { motion } from "framer-motion"

function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
    const projects = [
        {
            img: p1,
            heading: 'Flashy Cabs',
            para: 'I developed a comprehensive full-stack MERN web application as part of a college project, seamlessly integrating Leaflet for interactive maps and Clerk for robust authentication. The application features a smooth booking flow, incorporating dynamic car availability checks, and automated email notifications, ensuring a streamlined user experience.',
            tags: 'MERN, Scss, Clerk, Leaflet',
            date: 'Mar 2024',
            link: 'https://github.com/vishwa-3/FlashyCabs'
        },
        {
            img: p2,
            heading: 'D Not Fall',
            para: 'Navigate through obstacles with precision and avoid falling or touching the borders. Its straightforward mechanics make it easy to understand, but the difficulty ramps up quickly, putting your skills to the test. Prepare for a satisfying and rewarding experience as you strive to conquer this hard-to-win game. Can you master the intricacies and emerge victorious? Play "D NOT FALL" and find out!',
            tags: 'Unity, C#, Photoshop',
            date: 'Jun 2023',
            link: 'https://vishwa3.itch.io/d-not-fall'

        },
        {
            img: p3,
            heading: 'F For Freeze',
            para: 'I have developed this game for "Do you WANNA Jam?! 2023" Game Jam Hosted by Manisha W, a game where you control time to save the innocent. Freeze the world, then strategically reposition objects like bullets and crates to alter outcomes and overcome challenges. Are you prepared to freeze time and rewrite fate to ensure justice prevails? ',
            tags: 'Unity, C#, Photoshop',
            date: 'Aug 2023',
            link: 'https://vishwa3.itch.io/f-for-freeze'

        },
        {
            img: p4,
            heading: 'Wing Line',
            para: 'I developed this game for the "Wanna x Yam Game Jam 2022," an event hosted by Manisha W and Samyam. In the game, players take on the role of a bird, serving as the main character, with the objective of navigating through various challenges to reunite with its scattered relatives within a minute. the game offers an entertaining and challenging experience for players of all ages.',
            tags: 'Unity, C#, Photoshop, Blender',
            date: 'Aug 2022',
            link: 'https://vishwa3.itch.io/wing-line'

        }
    ];

    const handleNext = () => {
        setCurrentProject(prevProject => (prevProject === projects.length - 1 ? 0 : prevProject + 1));
    };

    const handlePrev = () => {
        setCurrentProject(prevProject => (prevProject === 0 ? projects.length - 1 : prevProject - 1));
    };

    return (
        <motion.div
            className='project' id='project'
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true }}
        >
            <h1 className='heading'>Project</h1>
            <div className='card-container'>
                <ProjectCard
                    img={projects[currentProject].img}
                    heading={projects[currentProject].heading}
                    para={projects[currentProject].para}
                    tags={projects[currentProject].tags}
                    date={projects[currentProject].date}
                    link={projects[currentProject].link}
                />
                <div className='arrow-button'>
                    <button onClick={handlePrev}><ArrowCircleLeftIcon className='prev' /></button>
                    <button onClick={handleNext}><ArrowCircleRightIcon className='next' /></button>
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;

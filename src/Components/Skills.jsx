import React from 'react'
import Rating from '@mui/material/Rating';

import { motion } from "framer-motion"

function Skills() {
    return (
        <motion.div
            className='skill' id="skill"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true }}
        >
            <h1 className='heading'>Skills</h1>
            <div className='set'>
                <ul>
                    <h1>Frontend</h1>
                    <li>HTML
                        <Rating value={4.5} precision={0.5} readOnly />
                    </li>
                    <li>SCSS
                        <Rating value={4.5} precision={0.5} readOnly />
                    </li>
                    <li>Javascript
                        <Rating value={4.5} precision={0.5} readOnly />
                    </li>
                    <li>React Js
                        <Rating value={4} readOnly />
                    </li>
                    <li>Bootstrap
                        <Rating value={3.5} precision={0.5} readOnly />
                    </li>
                </ul>
                <ul>
                    <h1>Backend</h1>
                    <li>C++
                        <Rating value={4} readOnly />
                    </li>
                    <li>MongoDB
                        <Rating value={2.5} precision={0.5} readOnly />
                    </li>
                    <li>My SQL
                        <Rating value={2.5} precision={0.5} readOnly />
                    </li>
                    <li>Node Js
                        <Rating value={2.5} precision={0.5} readOnly />
                    </li>
                    <li>Express Js
                        <Rating value={2.5} precision={0.5} readOnly />
                    </li>
                </ul>
                <ul>
                    <h1>Design</h1>
                    <li>Photoshop
                        <Rating value={4.5} precision={0.5} readOnly />
                    </li>
                    <li>Blender
                        <Rating value={3.5} precision={0.5} readOnly />
                    </li>
                    <li>Figma
                        <Rating value={2} readOnly />
                    </li>
                </ul>
                <ul>
                    <h1>Game Dev</h1>
                    <li>Unity
                        <Rating value={4.5} precision={0.5} readOnly />
                    </li>
                    <li>C#
                        <Rating value={3.5} precision={0.5} readOnly />
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Skills
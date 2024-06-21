import React from 'react'
import LinkIcon from '@mui/icons-material/Link';

function ProjectCard({ img, heading, para, tags, date, link }) {
    const tag_arr = tags.split(',')
    return (
        <div className='card'>
            <img src={img} alt="p1" />
            <div className='txt-container'>
                <h1><a href={link} target='blank'>{heading} <LinkIcon /></a>
                </h1>
                <div className='tags'>
                    {
                        tag_arr.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))
                    }
                </div>
                <p className="para">{para}</p>
            </div>
            <span className='date'>{date}</span>
        </div>
    )
}

export default ProjectCard
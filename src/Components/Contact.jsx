import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div className='contact'>
      <ul>
        <li><a href="https://www.linkedin.com/in/vishwa3"><LinkedInIcon /></a></li>
        <li><a href="https://github.com/vishwa-3"><GitHubIcon /></a></li>
        <li><a href="https://x.com/vishwa3_"><XIcon /></a></li>
        <li><a href="https://in.pinterest.com/vishwa3_"><PinterestIcon /></a></li>
        <li><a href="mailto:thisisvishwa3@gmail.com"><MailOutlineIcon /></a></li>
      </ul>
    </div>
  )
}

export default Contact
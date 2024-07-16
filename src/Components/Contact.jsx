import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact() {
  return (
    <div className='contact'>
      <ul>
        <li><a href="https://www.linkedin.com/in/vishwa3"><LinkedInIcon sx={{ fontSize: '50px' }}/></a></li>
        <li><a href="https://vishwa3.itch.io/"><SportsEsportsIcon sx={{ fontSize: '50px' }}/></a></li>
        <li><a href="https://x.com/vishwa3_"><XIcon sx={{ fontSize: '50px' }}/></a></li>
        <li><a href="https://in.pinterest.com/vishwa3_"><PinterestIcon sx={{ fontSize: '50px' }}/></a></li>
        <li><a href="mailto:thisisvishwa3@gmail.com"><MailOutlineIcon sx={{ fontSize: '50px' }}/></a></li>
      </ul>
    </div>
  )
}

export default Contact
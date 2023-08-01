import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
  return (
    <div className="footer">
      <img src={wave} alt="" />
      <div className="f-content">
        <span>sherningtan@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/ShernNing" target="_blank">
            <Github/>
          </a>
          <a href="https://www.linkedin.com/in/shern-ning-tan-942527106/" target="_blank">
            <Linkedin/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
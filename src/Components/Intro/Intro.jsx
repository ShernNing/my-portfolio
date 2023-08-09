import React, { useContext, useState } from 'react'
import './Intro.css'
import Resume from './Shern Ning Tan CV.pdf'
import designer from '../../img/designer.png'
import uidesign from '../../img/uidesign.png'
import coding from "../../img/coding.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import { Link } from 'react-scroll'
import Triangle from '../Triangle/Triangle'

function Intro() {
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  return (
    <div className="container">
      <div className="intro" id='Intro'>
        <div className="i-left">
          <div className="i-name">
            <h1 style={{color: darkMode? 'white' : ''}}>Hi, I am </h1>
            <h1>Shern Ning </h1>
            <h1 style={{color: darkMode? 'white' : ''}}>A Frontend developer and Web Designer.
            <br/>
            <br/>
            I am a highly motivated and enthusiastic Front End Developer with a strong passion for creating engaging and user-friendly web applications. 
            <br/>
            <br/>
            Proficient in HTML, CSS, JavaScript, and modern front-end framework such as React. 
            <br/>
            <br/>
            Eager to contribute my skills and creativity to a dynamic development team and grow as a professional in the field of web development.
            </h1>
            <a href={Resume} download className='downloadCv'>
              <button className="button s-button">
                Download CV
              </button>
            </a>
            <div className="i-icons">
              <div className="f-icon">
              </div>
                <a href="https://github.com/ShernNing" target="_blank" className='github'>
                  <Github/>
                </a>
                <a href="https://www.linkedin.com/in/shern-ning-tan-942527106/" target="_blank" className='linkedin'>
                  <Linkedin/>
                </a>
            </div>
          </div>
        </div>
        <div className="i-right">
          <motion.div 
          initial={{top: '-5rem'}}
          whileInView={{top: '0'}}
          transition={{duration: '3', type: 'spring', delay: '0.1'}}
          className='floating-div bounce'
          >
            <FloatingDiv image={coding} text1="Front End" text2="Developer"/>
          </motion.div>

          <motion.div 
          initial={{top: '8rem', right:'-1rem'}}
          whileInView={{right:'4rem'}}
          transition={{duration: '3', type: 'spring', delay: '0.3'}}
          className='floating-div bounce'
          >
            <FloatingDiv image={designer} text1="Web Designer"/>
          </motion.div>
          
          <motion.div 
          initial={{top:'21rem', left: '10rem'}}
          whileInView={{top: '16rem'}}
          transition={{duration: '3', type: 'spring', delay: '0.5'}}
          className='floating-div bounce'
          >
            <FloatingDiv className="float3" image={uidesign} text1="UI / UX "/>
          </motion.div>
        </div>
          {/* blur background */}
          <div className="blur"/>
          <div className="blur2"/>

        <Link spy={true} to='Services' smooth={true} activeClass='activeClass' className='triangle triangleIntro'>
          <Triangle/>
        </Link>
      </div>
    </div>
  )
}

export default Intro

import React, { useContext } from 'react'
import './Intro.css'
import Resume from './Shern Ning Tan CV.pdf'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
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
              {/* <div className='triangles'>
                <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="triangles" clip-path="url(#clip0_1_2)">
                  <g id="pink">
                  <path id="pink1" d="M83.5 47.4019C85.5 48.5566 85.5 51.4434 83.5 52.5981L7 96.7654C5 97.9201 2.5 96.4767 2.5 94.1673L2.5 5.8327C2.5 3.5233 5 2.07992 7 3.23462L83.5 47.4019Z" fill-opacity="0.75"/>
                  </g>
                  <g id="blue">
                  <path id="blue1" d="M140.5 47.4019C142.5 48.5566 142.5 51.4434 140.5 52.5981L64 96.7654C62 97.9201 59.5 96.4767 59.5 94.1673L59.5 5.8327C59.5 3.5233 62 2.07992 64 3.23462L140.5 47.4019Z" fill-opacity="0.75"/>
                  <path id="blue2" d="M83.5 47.402C85.5 48.5567 85.5 51.4434 83.5 52.5981L7 96.7654C5 97.9201 2.5 96.4767 2.5 94.1673L2.5 5.83273C2.5 3.52333 5 2.07995 7 3.23465L83.5 47.402Z" fill-opacity="0.75"/>
                  </g>
                  </g>
                  <defs>
                  <clipPath id="clip0_1_2">
                  <rect width="200" height="100" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div> */}
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
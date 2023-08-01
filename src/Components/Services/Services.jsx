import React, { useContext } from 'react'
import './Services.css'
import ui from '../../img/ui.png'
import illustration from '../../img/illustration.png'
import webdevelopment from '../../img/webdevelopment.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
// import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Triangle from '../Triangle/Triangle'

function Services() {
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  return (
    <div className="container">
      <div className="services" id='Services'>
        <div className="left">
          <h1 style={{color: darkMode? 'white' : ''}}>About Me</h1>
          <h1>What I Do</h1>
          <h1 style={{color: darkMode? 'white' : ''}} className='aboutMe'>
            As a front-end developer, I am the architect of the visual face of the digital world. With a keen eye for design and a passion for coding, I bring creativity and functionality together to build interactive and captivating user experiences. 
            <br />
            <br />
            Armed with proficiency in HTML, CSS, and JavaScript, I transform static designs into dynamic and responsive web pages that engage and delight users across various devices and browsers. 
            <br />
            <br />
            My expertise extends to utilizing popular front-end framework such as React, enabling me to develop scalable and efficient web applications. 
            <br />
            <br />
            I thrive on problem-solving, continuously seeking innovative solutions to optimize web performance, enhance usability, and address cross-browser compatibility challenges. 
            <br />
            <br />
            As a front-end developer, I find joy in creating a virtual world where aesthetics, interactivity, and functionality converge, leaving a lasting impression on users and driving digital success for businesses and organizations.
          </h1>
        </div>
        <div className="right">
          <div className='card1'>
            <Card emoji={webdevelopment} heading={'Developer'} detail={"React, Javascript, CSS, HTML"}/>
          </div>

          <div className='card2'>
            <Card emoji={illustration} heading={'Designer'} detail={"Figma, Photoshop"} />
          </div>

          <div className='card3'>
            <Card emoji={ui} heading={'UI/UX'} detail={"Figma, Photoshop"}/>
          </div>

          {/* <motion.div className='card1' 
          initial={{left: '15rem', top: '0rem'}}
          whileInView={{top: '8rem'}}
          transition={{duration: '3', type: 'spring', delay: '0.1'}}
          >
            <Card emoji={webdevelopment} heading={'Developer'} detail={"React, Javascript, CSS, HTML"}/>
          </motion.div>

          <motion.div className='card2'
          initial={{left: '38rem', top: '20rem'}}
          whileInView={{left: '33rem'}}
          transition={{duration: '3', type: 'spring', delay: '0.3'}}
          >
            <Card emoji={illustration} heading={'Designer'} detail={"Figma, Photoshop"} />
          </motion.div>

          <motion.div className='card3'
          initial={{left: '2rem', top: '31rem'}}
          whileInView={{left: '12rem'}}
          transition={{duration: '3', type: 'spring', delay: '0.5'}}
          >
            <Card emoji={ui} heading={'UI/UX'} detail={"Figma, Photoshop"}/>
          </motion.div> */}

          <div className="blur3 s-blur3"></div>
          <div className="blur4 s-blur4"></div>
        </div>
        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass' className='triangle' >
          <Triangle/>
        </Link>
      </div>
    </div>
  ) 
}

export default Services
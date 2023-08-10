import React, { useContext } from 'react'
import styles from './Services.css'
import ui from '../../img/ui.png'
import illustration from '../../img/illustration.png'
import webdevelopment from '../../img/webdevelopment.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { Link } from 'react-scroll'
import Triangle from '../Triangle/Triangle'
import { useInView } from 'react-intersection-observer'

function Services() {
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  const { ref, inView } = useInView({
    rootMargin: '500px'
  });

  return (
    <div className="container">
      <div className="services" id='Services'>
        <div className="left">
          <h1 style={{color: darkMode? 'white' : ''}} className='aboutHead'>About Me</h1>
          <h1 className='aboutHead2'>What I Do</h1>
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
          <div ref={ref} className={`${inView ? 'card1' : '' }`}>
            <Card emoji={webdevelopment} heading={'Developer'} detail={"React, Javascript, CSS, HTML" }/>
          </div>
          <div ref={ref} className={`${inView ? 'card2' : '' }`}>
            <Card emoji={illustration} heading={'Designer'} detail={"Figma, Photoshop"} />
          </div>
          <div ref={ref} className={`${inView ? 'card3' : '' }`}>
            <Card emoji={ui} heading={'UI/UX'} detail={"Figma, Photoshop"}/>
          </div>
          <div className="blur5"></div>
          <div className="blur6"></div>
        </div>
        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass' className='triangle' >
          <Triangle/>
        </Link>
      </div>
    </div> 
  ) 
}

export default Services
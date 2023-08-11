import React, { useContext, useState } from 'react'
import './Intro.css'
import Resume from './Shern Ning Tan CV.pdf'
import designer from '../../img/designer.png'
import uidesign from '../../img/uidesign.png'
import coding from "../../img/coding.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Plx from 'react-plx'
import { useInView } from 'react-intersection-observer'

function Intro() {
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  const { ref, inView } = useInView(
    { trackVisibility: true, delay: 100, fallbackInView: true, rootMargin: '700px' }
  );

  const heading1 = [
    {
      start: '0vh',
      end: '50vh',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacityFilter",
        },
      ],
    },
    {
      start: '0vh',
      end: '50vh',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];

  const heading3 = [
    {
      start: '0vh',
      end: '50vh',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacityFilter",
        },
      ],
    },
  ];

  const blur1 = [
    {
      start: '0vh',
      end: '80vh',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacityFilter",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="intro" id='Intro'>
        <div className="i-left">
          <div className="i-name">
            <Plx className="Parallax" parallaxData={heading1}>
              <h1 style={{color: darkMode? 'white' : ''}}
              className='introText'>Hi, I am </h1>
            </Plx>
            <div ref={ref}>
              <h1 className={`${inView ? 'introName' : '' }`}>Shern Ning </h1>
            </div>
            <Plx className="ParallaxText" parallaxData={heading3} ref={ref}>
              <h1 style={{color: darkMode? 'white' : ''}} className={`${inView ? 'ParallaxText1' : '' }`}>A Frontend developer and Web Designer.
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
            </Plx>
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
        <div className="i-right" ref={ref}>
          <div  className={`${inView ? 'floating-div1' : ''}`}>
            <FloatingDiv image={coding} text1="Front End" text2="Developer"/>
          </div>

          <div className={`${inView ? 'floating-div2' : ''}`}>
            <FloatingDiv image={designer} text1="Web Designer"/>
          </div>
          
          <div  className={`${inView ? 'floating-div3' : ''}`}>
            <FloatingDiv className="float3" image={uidesign} text1="UI / UX "/>
          </div>
          
          {/* <div  className={`${inView ? 'floating-div1' : ''}`}>
            <FloatingDiv image={coding} text1="Front End" text2="Developer"/>
          </div>

          <div className={`${inView ? 'floating-div2' : ''}`}>
            <FloatingDiv image={designer} text1="Web Designer"/>
          </div>
          
          <div  className={`${inView ? 'floating-div3' : ''}`}>
            <FloatingDiv className="float3" image={uidesign} text1="UI / UX "/>
          </div> */}
        </div>

        <Plx className="Parallax" parallaxData={blur1}>
          <div className="blur3"/>
          <div className="blur4"/>
        </Plx>
      </div>
    </div>
  )
}

export default Intro

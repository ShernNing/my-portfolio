import React, { useState, useRef, useContext } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Plx from 'react-plx'
import { useInView } from 'react-intersection-observer';

function Contact() {
      
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7cjdzts', 'template_b264yn6', form.current, 'O8kYTGGV06dj341Zy')
      .then((result) => {
          console.log(result.text);
          setSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  const blur4 = [
    {
      start: '10vh',
      end: '200vh',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacityFilter",
        },
      ],
    },
  ]

  const {ref, inView} = useInView(
    { trackVisibility: true, delay: 100, fallbackInView: true}
  );


  return (
    <div className="container">
      <div className="contact-form" id='Contact'>
        <div className="w-left">
          <div className="left" ref={ref}>
            <span style={{color: darkMode? 'white' : ''}}  className={`${inView ? 'contact1' : '' }`}>GET IN TOUCH!</span>
            <span className={`${inView ? 'contact2' : '' }`}>Contact me</span>
            <div className="f-icons">
              <a  href="https://github.com/ShernNing" target="_blank" rel="noreferrer">
                <Github/>
              </a>
              <a href="https://www.linkedin.com/in/shern-ning-tan-942527106/" target="_blank" rel="noreferrer">
                <Linkedin/>
              </a>
            </div>
            <a href="mailto: sherningtan@gmail.com" className='c-email'>sherningtan@gmail.com</a>
          </div>
        <Plx className="Parallax" parallaxData={blur4}>
          <div className="blur7"/>
          <div className="blur8"/>
        </Plx>
        </div>

        <div className="c-right">
          <form action="" ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name="message" className='user' placeholder='Message'/>
            <input type="submit" value="Send" className='button s-button' />
            <span className='sentToast' style={{color: darkMode? 'white' : ''}}>{sent && "Thank you for your email!"}
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
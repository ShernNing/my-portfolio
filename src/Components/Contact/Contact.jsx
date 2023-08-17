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

    const [score, setScore] = useState('4');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (Number(score) <5 && comment.length < 10) {
        alert('Please enter a comment');
        return
      }
      console.log('Form submitted')
      setComment('');
      setScore('5');
    }

    const isDisabled = Number(score) < 5 && comment.length <= 10;
    const disableComment = comment.length <= 10;

    const textArea = isDisabled ? "Feedback please" : 'thank you'


  return (
    <div className="container">
      <div className="contact-form" id='Contact'>
        <div className="w-left">
          <div className="left" ref={ref}>
            <span style={{color: darkMode? 'white' : ''}}  className={`${inView ? 'contact1' : '' }`}>GET IN TOUCH!</span>
            <span className={`${inView ? 'contact2' : '' }`}>Contact me</span>
            <div className="f-icons">
              <a href="https://github.com/ShernNing" target="_blank">
                <Github/>
              </a>
              <a href="https://www.linkedin.com/in/shern-ning-tan-942527106/" target="_blank">
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
      <div className="contactForm">
        <form action="submit" onSubmit={handleSubmit}>
          <fieldset>
            <h2>Score: {score}</h2>
            <input type="range" min={0} max={10} value={score} onChange={(e) => setScore(e.target.value)} />
            <label htmlFor="comment">Comments: </label>
            <textarea name="comment" id="comment" cols="30" rows="10" placeholder={textArea} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <button type='submit' disabled={isDisabled}>Submit</button>
          </fieldset>
        </form>
        
      </div>
    </div>
  )
}

export default Contact
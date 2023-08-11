import React from 'react'
import './Portfolio.css'
import {Swiper} from 'swiper/react'
import 'swiper/css'
import yourtube from '../../img/yourtube.png'
import ecommerce from '../../img/ecommerce.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import Github from '@iconscout/react-unicons/icons/uil-github'
import { useInView } from 'react-intersection-observer'

function Portfolio() {
  
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  const { ref, inView } = useInView(
    { trackVisibility: true, delay: 100, fallbackInView: true, rootMargin: '700px' }
  )

  return (
    <div className="container">
      <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode? 'white' : ''}} ref={ref} className={`${inView ? 'span1' : '' }`}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper spaceBetween={550} slidesPerView={3} grabCursor={true} className='portfolio-slider' >
          <div>
            <a href="https://yourtube.online/" target="_blank" >
              <img src={yourtube} alt="" ref={ref} className={`${inView ? 'sliderImg' : '' }`}/>
            </a>
            <a href="https://yourtube.online/" target="_blank" className='desc'>
              <h3 style={{color: darkMode? 'white' : ''}}>Youtube</h3>
              <h4 style={{color: darkMode? 'white' : ''}}>React, Javascript, CSS, HTML, Git</h4>
            </a>
            <a href="https://github.com/ShernNing/youtube.git" target="_blank" className='githubPortfolio' style={{color: darkMode? 'white' : ''}}>
              <Github/>
            </a>
          </div>
          <div>
            <a href="https://shernning.pro/" target="_blank" ref={ref}>
              <img src={ecommerce} alt=""  className={`${inView ? 'sliderImg' : '' }`}/>
            </a>
            <a href="https://shernning.pro/" className='desc' >
              <h3 style={{color: darkMode? 'white' : ''}}>E-Commerce Store</h3>
              <h4 style={{color: darkMode? 'white' : ''}}>React, Javascript, CSS, HTML, Git</h4>
            </a>
            <a href="https://github.com/ShernNing/ecommerce.git" target="_blank" className='githubPortfolio' style={{color: darkMode? 'white' : ''}}>
              <Github/>
            </a>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Portfolio
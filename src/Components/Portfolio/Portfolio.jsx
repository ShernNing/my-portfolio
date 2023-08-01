import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import yourtube from '../../img/yourtube.png'
import ecommerce from '../../img/ecommerce.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { Link } from 'react-scroll'
import Triangle from '../Triangle/Triangle'

function Portfolio() {
  
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  return (
    <div className="container">
      <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper spaceBetween={550} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
          <div>
            <a href="https://yourtube.online/" target="_blank">
              <img src={yourtube} alt="" className='sliderImg'/>
            </a>
            <a href="https://yourtube.online/" target="_blank" className='desc'>
              <h3 style={{color: darkMode? 'white' : ''}}>Youtube</h3>
              <h4 style={{color: darkMode? 'white' : ''}}>React, Javascript, CSS, HTML</h4>
            </a>
          </div>
          {/* <SwiperSlide>
            <a href="https://yourtube.online/" target="_blank">
              <img src={yourtube} alt="" className='sliderImg'/>
            </a>
            <a href="https://yourtube.online/" target="_blank" className='desc'>
              <h3 style={{color: darkMode? 'white' : ''}}>Youtube</h3>
              <h4 style={{color: darkMode? 'white' : ''}}>React, Javascript, CSS, HTML</h4>
            </a>
          </SwiperSlide> */}
          <div>
            <a href="" target="_blank">
              <img src={ecommerce} alt="" className='sliderImg'/>
            </a>
            <a href="" className='desc' >
              <h3 style={{color: darkMode? 'white' : ''}}>E-Commerce Store</h3>
              <h4 style={{color: darkMode? 'white' : ''}}>React, Javascript, CSS, HTML</h4>
            </a>
          </div>
          {/* <SwiperSlide>
            <a href="" target="_blank">
              <img src={ecommerce} alt="" className='sliderImg'/>
            </a>
            <a href="" className='desc' >
              <h3 style={{color: darkMode? 'white' : ''}}>E-Commerce Store</h3>
              <h4 style={{color: darkMode? 'white' : ''}}>React, Javascript, CSS, HTML</h4>
            </a>
          </SwiperSlide> */}
        </Swiper>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass' className='triangle' >
          <Triangle/>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
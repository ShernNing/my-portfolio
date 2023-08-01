import React, { useContext } from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import fiverr from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

function Works() {
  const theme = useContext(themeContext);
  
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="left">
        <span style={{color: darkMode? 'white' : ''}}>Works for all these</span>
        <span>Brans & Clients</span>
        <span style={{color: darkMode? 'white' : ''}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ut laudantium, asperiores aspernatur corporis, illo amet odit, saepe eveniet ex optio laboriosam explicabo suscipit nisi!
        </span>
        <button className="button s-button">
          Hire me
        </button>
      </div>

      <div className="w-right">
        <motion.div className="w-mainCircle"  initial={{rotate: 90}}
      whileInView={{rotate: 0}}
      viewport={{margin: '200px'}}
      transition={{duration: 3.5, type: 'spring'}}>
          <div className="w-secCircle" >
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle" >
            <img src={fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>

      </div>
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle pinkCircle"></div>
    </div>
  )
}

export default Works
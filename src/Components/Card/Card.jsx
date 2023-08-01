import React, { useContext } from 'react'
import './Card.css'
import { themeContext } from '../../Context'

function Card({emoji, heading, detail}) {

  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{color: darkMode? 'white' : ''}}>{detail}</span>
    </div>
  )
}

export default Card
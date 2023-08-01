import React from 'react'
import './Heading.css'
import { Link } from 'react-scroll'
import Triangle from '../Triangle/Triangle'

function Heading() {
  return (
    <div id='heading'>
      <h1 className='h-name'>Hello, my name is Shern Ning</h1>
      <h2>Welcome to my Portfolio!</h2>
      <Link spy={true} to='Intro' smooth={true} activeClass='activeClass' className='triangleNext' >
        <Triangle/>
      </Link>
    </div>
  )
}

export default Heading
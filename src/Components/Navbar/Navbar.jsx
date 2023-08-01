import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <Link spy={true} to='Intro' smooth={true} activeClass='activeClass'>
          <div className="n-name">Shern Ning</div>
        </Link>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' to='Intro' className='bounce1'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true} activeClass='activeClass' className='bounce1'>
              <li>About</li>
            </Link>
            {/* <Link spy={true} to='Experience' smooth={true} activeClass='activeClass' className='bounce1'>
              <li>Experience</li>
            </Link> */}
            <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass' className='bounce1'>
              <li>Portfolio</li>
            </Link>
            {/* <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass' className='bounce1'>
              <li>Testimonials</li>
            </Link> */}
          </ul>
        </div>
        <Link py={true} to='Contact' smooth={true} activeClass='activeClass'>
          <button className="button n-button">
            Contact
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
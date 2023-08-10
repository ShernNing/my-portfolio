import React from 'react'
import './Heading.css'
import { Link } from 'react-scroll'
import Triangle from '../Triangle/Triangle'
import Plx from 'react-plx'

function Heading() {
  const heading1 = [
    {
      start: '10vh',
      end: '40vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacityFilter",
        },
      ],
    },
    {
      start: '10vh',
      end: '80vh',
      properties: [
        {
          startValue: 1,
          endValue: 3,
          property: "scale",
        },
      ],
    },
  ];

  const heading2 = [
    {
      start: '20vh',
      end: '40vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacityFilter",
        },
      ],
    },
        {
      start: '20vh',
      end: '100vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "scale",
        },
      ],
    },
  ];

  const heading3 = [
    {
      start: '20vh',
      end: '40vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacityFilter',
        },
      ],
    },
  ];

  const blur = [
    {
      start: '10vh',
      end: '100vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacityFilter",
        },
      ],
    },
    {
      start: '10vh',
      end: '80vh',
      properties: [
        {
          startValue: 1,
          endValue: 3,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div id='heading'>
        <Plx className="Parallax" parallaxData={heading1}>
          <h1 className='h-name'>Hello, my name is Shern Ning</h1>
        </Plx>
        <Plx className="Parallax" parallaxData={heading2}>
          <h2 className='h-welcome'>Welcome to my Portfolio!</h2>
        </Plx>
        <Plx className="ParallaxTriangle" parallaxData={heading3}>
          <Link spy={true} to='Intro' smooth={true} activeClass='activeClass' className='triangleNext' >
            <Triangle/>
          </Link>
        </Plx>
        <Plx className="Parallax" parallaxData={blur}>
          <div className="blur"/>
          <div className="blur2"/>
        </Plx>
      </div>
    </div>
  )
}

export default Heading
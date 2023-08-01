import React from 'react'
import './Triangle.css'

function Triangle() {
  return (
    <div>
      <div className='trianglesNext'>
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="triangles" clip-path="url(#clip0_1_2)">
          <g id="pink">
          <path id="pink1" d="M83.5 47.4019C85.5 48.5566 85.5 51.4434 83.5 52.5981L7 96.7654C5 97.9201 2.5 96.4767 2.5 94.1673L2.5 5.8327C2.5 3.5233 5 2.07992 7 3.23462L83.5 47.4019Z" fill-opacity="0.75"/>
          </g>
          <g id="blue">
          <path id="blue1" d="M140.5 47.4019C142.5 48.5566 142.5 51.4434 140.5 52.5981L64 96.7654C62 97.9201 59.5 96.4767 59.5 94.1673L59.5 5.8327C59.5 3.5233 62 2.07992 64 3.23462L140.5 47.4019Z" fill-opacity="0.75"/>
          <path id="blue2" d="M83.5 47.402C85.5 48.5567 85.5 51.4434 83.5 52.5981L7 96.7654C5 97.9201 2.5 96.4767 2.5 94.1673L2.5 5.83273C2.5 3.52333 5 2.07995 7 3.23465L83.5 47.402Z" fill-opacity="0.75"/>
          </g>
          </g>
          <defs>
          <clipPath id="clip0_1_2">
          <rect width="200" height="100" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Triangle
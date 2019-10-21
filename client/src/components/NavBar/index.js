import React from 'react'
import "./style.css"

function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        Home
      </a>
      <a className='navbar-brand' href='/galleria'>
        Gallery
      </a>
      <a className='navbar-brand' href='/about'>
        About
      </a>
    </nav>
  )
}

export default Navbar

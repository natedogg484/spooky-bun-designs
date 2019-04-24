import React from 'react'
import "./style.css"

function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='https://www.linkedin.com/in/nathan-schmidt-6a294a114/'>
        LinkedIn Profile
      </a>
      <a className='navbar-brand' href='https://github.com/natedogg484'>
        Github Profile
      </a>
      <a className='navbar-brand' href='https://docs.google.com/document/d/1VMtq_k8sHVKxWfwsh741hllx3c1lx86M1CUhcx3mYrI/edit?usp=sharing'>
        Resume
      </a>
    </nav>
  )
}

export default Navbar

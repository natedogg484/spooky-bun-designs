import React from 'react'


export default function Jumbotron(props) {
  return (
    <div className='jumbotron jumbotron-fluid' id="jumbotron">{props.children}</div>
  )
} 
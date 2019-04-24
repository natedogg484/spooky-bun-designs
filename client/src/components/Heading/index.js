import React from 'react'


export function Header(props) {
  return (
    <h2 id="title">{props.children}</h2>
  )
}

export function Title(props){
  return(
    <h4 id="header">{props.children}</h4>
  )
}


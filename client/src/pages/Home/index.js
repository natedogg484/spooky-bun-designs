import React, { Component } from 'react'
// components
import { Header, Title } from '../../components/Heading'
import Jumbotron from '../../components/Jumbotron'
import Wrapper from '../../components/Wrapper'

export default class Home extends Component {
  render () {
    return (
      <Wrapper>
        <div className='row'>
          <div className='col-md-1' />
          <div className='col-md-10 text-center'>
            <Jumbotron>
              <Header>Home of Spooky Bun's Art</Header>
            </Jumbotron>
          </div>
          <div className='col-md-1' />
        </div>
      </Wrapper>
    )
  }
}

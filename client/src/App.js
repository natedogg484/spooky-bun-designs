import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import { Col, Row, Container } from './components/Grid'
import { Header, Title } from './components/Heading'
import Navbar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar/>
      </Wrapper>
      );
  }
}

export default App;

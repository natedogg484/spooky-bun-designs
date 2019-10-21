import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// basic components
import Wrapper from './components/Wrapper'
import Navbar from './components/NavBar'
// overarching style sheets
import './App.css'
// pages
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'

class App extends Component {
  render () {
    return (
      <Router>
        <Wrapper>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/about' component={About} />
        </Wrapper>
      </Router>
    )
  }
}

export default App
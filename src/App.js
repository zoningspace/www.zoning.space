import React, { Component } from 'react'
import './App.css'
import Navbar from './navbar.js'
import Map from './map.js'
import Page from './page.js'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Map />
        <Page />
      </div>
    );
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import Navbar from './navbar.js'
import Map from './map.js'
import Page from './page.js'
import Footer from './footer.js'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Map />
        <Page />
        <Footer />
      </div>
    );
  }
}

export default App

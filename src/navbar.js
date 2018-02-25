import React, { Component } from 'react'

/** top nav */

export default class Navbar extends Component {
  render () {
    return <nav>
      <h2>Zoning.Space</h2>
      <ul>
        <li><a href='https://zoningspace.readthedocs.io/en/latest/'>Docs</a></li>
      </ul>
    </nav>
  }
}

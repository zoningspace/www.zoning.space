import React, { Component } from 'react'
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl'

// please don't steal my mapbox key, I'm a poor grad student
// https://geoplan.asu.edu/matthew-conway
const GlMap = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoibWF0dHdpZ3dheSIsImEiOiJjamUweXRnOHkwenMxMnhxbDVhNjByZms5In0.WSXmPLgk-icDoMoY7zkz2Q' })

const SACRAMENTO = [-121.469, 38.556, 11]
const SAN_FRANCISCO = [-122.423, 37.763, 12]
const OAKLAND = [-122.271, 37.804, 11]
const SAN_JOSE = [-121.9, 37.333, 11]
const LOS_ANGELES = [-118.5, 34.05, 9]
const SAN_DIEGO = [-117.163, 32.9, 10]

const LEGENDS = {
  PARKING: [
    { color: '#bdd7e7', label: 'Less than 0.5 spaces/unit' },
    { color: '#6baed6', label: 'At least 0.5, less than 1 spaces/unit' },
    { color: '#3182bd', label: 'At least 1, less than 2 spaces/unit' },
    { color: '#08519c', label: 'At least 2 spaces/unit'}
  ],
  HEIGHT: [
    { color: '#bdd7e7', label: '0–10 meters (0-33 feet)' },
    { color: '#6baed6', label: '10–20 meters (33-66 feet)' },
    { color: '#3182bd', label: '20–30 meters (66-98 feet)' },
    { color: '#08519c', label: 'More than 30 meters (98 feet)' }
  ],
  DENSITY: [
    { color: '#bdd7e7', label: '0–40 units/hectare (0-16 units/acre)' },
    { color: '#6baed6', label: '40–80 units/hectare (16-32 units/acre)' },
    { color: '#3182bd', label: '80-120 units/hectare (32–49 units/acre)' },
    { color: '#08519c', label: 'More than 120 units/hectare (49 units/acre)' }
  ]
}

const STYLES = {
  'PARKING': 'mapbox://styles/mattwigway/cje107x6x3cuf2rqqx4jopwnv',
  'DENSITY': 'mapbox://styles/mattwigway/cje23i5ok87ku2snrj6evxgc3',
  'HEIGHT': 'mapbox://styles/mattwigway/cje232hm31lm72rm2680motp6'
}

/** The map */
export default class Map extends Component {
  state = {
    location: LOS_ANGELES, /* out of deference to Policy Club */
    layer: 'PARKING' /* out of deference to Donald Shoup */
  }

  render () {
    const {location, layer} = this.state

    return <div className='map-container'>
      <div className='map-layers'>
        {/* TODO assistive technology */}
        <ul>
          <li>
            <a
               className={layer == 'PARKING' ? 'map-layer-selected' : null}
               href='#' title='Parking'
               onClick={e => this.setState({ layer: 'PARKING' })}>
               Parking
             </a>
          </li>
          <li>
            <a
              className={layer == 'HEIGHT' ? 'map-layer-selected' : null}
              href='#' title='Height Limits' onClick={e => this.setState({ layer: 'HEIGHT' })}>
              Height
            </a>
          </li>
          <li>
            <a
              className={layer == 'DENSITY' ? 'map-layer-selected' : null}
              href='#' title='Density Restrictions'
              onClick={e => this.setState({ layer: 'DENSITY' })}>
              Density
            </a>
          </li>
        </ul>

        {/* Links to jump to parts of the state, thanks @esiroky for the idea */}
        <ul>
          <li><a href='#' title='Sacramento' onClick={e => this.setState({ location: SACRAMENTO })}>Sac</a></li>
          <li><a href='#' title='San Francisco' onClick={e => this.setState({ location: SAN_FRANCISCO })}>SF</a></li>
          <li><a href='#' title='Oakland' onClick={e => this.setState({ location: OAKLAND })}>Oak</a></li>
          <li><a href='#' title='San José' onClick={e => this.setState({ location: SAN_JOSE })}>SJ</a></li>
          <li><a href='#' title='Los Angeles' onClick={e => this.setState({ location: LOS_ANGELES })}>LA</a></li>
          <li><a href='#' title='San Diego' onClick={e => this.setState({ location: SAN_DIEGO })}>SD</a></li>
        </ul>
      </div>

      <div className='map-legend'>
        {LEGENDS[layer].map(({color, label}) => <div>
          <div style={{ width: 30, height: 15, backgroundColor: color, display: 'inline-block', marginRight: 8, marginLeft: 4 }} />{label}
        </div>)}
      </div>

      <GlMap
        style={STYLES[layer]}
        center={location.slice(0, 2)}
        zoom={[location[2]]}
        containerStyle={{
          width: '100%',
          height: '100%'
        }}>
        <ZoomControl position='bottom-right' />
      </GlMap>
      <div className='map-next'><a title='Jump to content' href='#content'><span class='fas fa-chevron-down' /></a></div>
    </div>
  }
}

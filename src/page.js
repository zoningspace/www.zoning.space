import React, { Component } from 'react'

/** The remainder of the page */

export default class Page extends Component {
  render () {
    return <div class='content'>
      <a name='content' class='content-anchor' />
      <p>
        Zoning.Space is an open, crowdsourced, machine-readable database of municipal residential zoning regulations.
        Municipal zoning is a major determinant of urban land use, environmental sustainability, and housing affordability.
        Data on zoning, however, has been up to this point rather lacking. Most cities have a zoning code that restricts
        the types of uses, density of residential dwellings, etc. that can be implemented in a given area. These codes,
        however, are highly variable between cities, making comparative studies very difficult.
      </p>

      <p>
        Zoning.Space aims to address this gap by providing machine-readable data on zoning regulations across a variety
        of cities. This data is valuable to policymakers and researchers analyzing trends across many cities.
      </p>

      <h2>What cities are currently in the dataset?</h2>
      <p>We currently have data on six cities in California: Sacramento, San Francisco, Oakland, San José, Los Angeles,
        and San Diego.</p>

      <h2>What data do you have in those cities?</h2>
      <p>Zoning.Space focuses on residential zoning. For most residential zones greater than 0.25 square kilometers, we have height
        limits, parking requirements, density limitations, setbacks, and whether single-family and multi-family use are
        allowed.</p>

      <h2>How can I contribute to Zoning.Space?</h2>
      <p>We're always looking for more people to help digitize zoning data! Head on over to
        our <a href='http://docs.zoning.space'>documentation site</a> to get started, and don't hesitate
        to <a href='mailto:hello@zoning.space'>drop us a line</a> with any questions. You'll need some basic skills
        with <tt>git</tt> and running programs from the command line.</p>

      <h2>How can I get the data?</h2>
      <p>Due to file size, complexity, and the early stage of the project, we're not currently offering processed,
        GIS-ready data for download. You will need to run the Zoning.Space software stack to assemble raw data provided
        by municipal governments into a seamless, standardized file. You can learn how to do this on
        the <a href='http://docs.zoning.space'>documentation site</a>. The software stack is
        available <a href='https://github.com/zoningspace/zoning.space'>on GitHub</a>.
      </p>

      <h2>How can I use the data?</h2>
      <p>The Zoning.Space software stack is licensed under Apache 2.0, while the original data produced
        by the Zoning.Space team by digitizing municipal codes is licensed under the Open Database License. Since the zoning data
        is derived from data provided by municipalities (e.g. spatial data on zoning regulations,
        and descriptions of those regulations in the municipal code), there may be additional restrictions which vary
        from munipality to munipality.</p>

      <h2>How good is the data?</h2>
      <p>We think it's pretty good. However, like anything, it can be improved. In the spirit of transparency and
        crowdsourcing, we have a <a href='https://github.com/zoningspace/zoning.space/issues'>public issue tracker</a>
        ocumenting known issues with the data, and
        a <a href='https://github.com/zoningspace/zoning.space/blob/master/LIMITATIONS_AND_ASSUMPTIONS.md'>list of assumptions</a>
        that were made during the digitization process.</p>

      <h2>Who's behind this?</h2>
      <p>A team of volunteers:
        <ul>
          <li><a href='https://indicatrix.org'>Matthew Wigginton Conway</a>, Geography PhD Student at Arizona State</li>
          <li>...and more</li>
        </ul>
      </p>

      <h2>How can I get in touch with you?</h2>
      <p>Want to contribute? Have an idea for a project to do with the data? Drop us a line at&nbsp;
        <a href='mailto:hello@zoning.space'>hello@zoning.space</a>.</p>

      <p><i>Color schemes from <a href='http://colorbrewer2.org'>ColorBrewer</a>.</i></p>
    </div>
  }
}

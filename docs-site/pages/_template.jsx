import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'
import 'dist/semantic.min.css'

const { rhythm, fontSizeToPx } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const jobsActive = includes(this.props.location.pathname, '/jobs/')
    const examplesActive = includes(this.props.location.pathname, '/examples/')

    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="#" className="header item">
              <img className="logo" src="assets/images/logo.png"/>
              Project Name
            </a>
            <a href="#" className="item">Home</a>

          </div>
          <div>

          </div>

        </div>
        <div className="ui main text container">
          <div className="ui header">
            woot
          </div>
          {this.props.children}

        </div>

        <div className="ui inverted vertical footer segment">
          <div className="ui center aligned container">
            <div className="ui stackable inverted divided grid">
              <div className="three wide column">
                <h4 className="ui inverted header">Group 1</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">Link One</a>
                  <a href="#" className="item">Link Two</a>
                  <a href="#" className="item">Link Three</a>
                  <a href="#" className="item">Link Four</a>
                </div>
              </div>

              <div className="seven wide column">
                <h4 className="ui inverted header">Footer Header</h4>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </div>
            </div>
            <div className="ui inverted section divider"></div>
            <img src="assets/images/logo.png" className="ui centered mini image"/>
            <div className="ui horizontal inverted small divided link list">
              <a className="item" href="#">Site Map</a>
              <a className="item" href="#">Contact Us</a>
              <a className="item" href="#">Terms and Conditions</a>
              <a className="item" href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    )
  },
})

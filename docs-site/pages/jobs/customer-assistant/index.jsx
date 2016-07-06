import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

const CustomerAssistant = React.createClass({
  statics: {
    metadata () {
      return {
        title: 'Customer Assistant',
      }
    },
  },

  render () {
    return (
      <DocumentTitle title={`${CustomerAssistant.metadata().title} | ${config.siteTitle}`}>
  <div>
    <div className="ui large header">Customer Assistant</div>
    <div className="ui divider">

    </div>
    <p>
    It's easy to intermix different file types. The other documentation pages
    are all written in Markdown but this page is a normal React.js component.
      Gatsby has built-in support for Markdown, HTML, JSX,
                                        CJSX (Coffeescript flavored JSX), JSON, YAML, and TOML
    and it's easy to add support for additional file formats.
    </p>
    <p>
    React.js component pages makes it easy to add interactivity or ajax enhancements
    to what is otherwise a static site. In the case of a documentation site,
      it let's you embed sample/runnable code to illustrate your documentation.
    (This demo is from <a href="https://github.com/chenglou/react-motion">React Motion</a>).
  </p>
    <div
    style={{
      height: 500,
    }}
  >
    </div>
    </div>
    </DocumentTitle>
  )
  },
})

export default CustomerAssistant

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Landing page for Trinity Watertown Episcopal Church',
        },
        {
          name: 'keywords',
          content:
            'church, jesus, Watertown, SD, Episcopal, Trinity, diversity',
        },
      ]}
    >
      {' '}
      <link
        href="https://fonts.googleapis.com/css?family=EB+Garamond:400,500i|Lato:300,400i,700"
        rel="stylesheet"
      />
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

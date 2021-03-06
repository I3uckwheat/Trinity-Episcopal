import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content="Landing page for Trinity Watertown Episcopal Church"
          />
          <meta
            name="keywords"
            content="church, jesus, Watertown, SD, Episcopal, Trinity, diversity"
          />
          <link
            href="https://fonts.googleapis.com/css?family=EB+Garamond:400,500i|Lato:300,400i,700"
            rel="stylesheet"
          />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

module.exports = {
  siteMetadata: {
    title: 'Trinity Episcopal Watertown',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'trinity-church',
        short_name: 'Trinity Epistle Church',
        start_url: '/',
        background_color: '#282e36',
        theme_color: '#407ec9',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

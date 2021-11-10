module.exports = {
  siteMetadata: {
    title: `HyperVIBES`,
    description: `The possibilities are endless in the realms of your imagination. What would you do with that power?`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/assets/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HyperVIBES`,
        short_name: `HyperVIBES`,
        start_url: `/`,
        background_color: `#090909`,
        theme_color: `#090909`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-remove-trailing-slashes`,
  ],
};

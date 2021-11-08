module.exports = {
  siteMetadata: {
    title: `HyperVIBES`,
    description: `HyperVIBES is a multi-tenanted protocol that allows permissionless infusion of ERC-20 tokens inside of any ERC-721 NFT.`,
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

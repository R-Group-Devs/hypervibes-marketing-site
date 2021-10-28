module.exports = {
  siteMetadata: {
    title: `HyperVIBES`,
    description: `HyperVIBES is a multi-tenanted protocol that allows permissionless infusion of ERC-20 tokens inside of any ERC-721 NFT.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    //{
    //resolve: `gatsby-source-filesystem`,
    //options: {
    //name: `images`,
    //path: `${__dirname}/src/images`,
    //},
    //},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-transformer-remark`,
    //{
    //resolve: `gatsby-plugin-manifest`,
    //options: {
    //name: `HyperVIBES`,
    //short_name: `HyperVIBES`,
    //start_url: `/`,
    //background_color: `#0b0c1d`,
    //theme_color: `#0b0c1d`,
    //display: `minimal-ui`,
    //icon: `src/images/favicon.png`,
    //},
    //},
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-remove-trailing-slashes`,
  ],
};

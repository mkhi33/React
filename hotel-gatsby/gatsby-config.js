module.exports = {
  siteMetadata: {
    title: `Hotel Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `41fdee20e771cde46de1e379488af5`,
      },
    },

  ]
}

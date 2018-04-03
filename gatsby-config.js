// Based on https://github.com/gatsbyjs/gatsby/blob/master/examples/using-typescript/gatsby-config.js
module.exports = {
  siteMetadata: {
    siteName: "Dovetail"
  },
  plugins: [
    // Add typescript stack into webpack
    "gatsby-plugin-typescript",
    "gatsby-plugin-typestyle"
  ]
};

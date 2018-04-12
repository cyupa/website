// Based on https://github.com/gatsbyjs/gatsby/blob/master/examples/using-typescript/gatsby-config.js
module.exports = {
  siteMetadata: {
    siteName: "Dovetail"
  },
  plugins: [
    "gatsby-plugin-react-next",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typestyle",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/pages/help",
        name: "help-articles"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 660
            }
          }
        ]
      }
    }
  ]
};

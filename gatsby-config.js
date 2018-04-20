// Based on https://github.com/gatsbyjs/gatsby/blob/master/examples/using-typescript/gatsby-config.js
module.exports = {
  siteMetadata: {
    siteName: "Dovetail"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typestyle",
    {
      resolve: "gatsby-plugin-favicon",
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
        path: "./src/pages",
        name: "documents"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              backgroundColor: "transparent",
              quality: 75,
              maxWidth: 660,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        anonymize: true,
        head: false,
        respectDNT: true,
        trackingId: "UA-97199079-2"
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN || "",
        config: {
          environment: process.env.SENTRY_ENVIRONMENT,
          release: process.env.SENTRY_RELEASE
        }
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#512da8",
        showSpinner: false
      }
    }
  ]
};

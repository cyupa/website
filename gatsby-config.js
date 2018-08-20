// Based on https://github.com/gatsbyjs/gatsby/blob/master/examples/using-typescript/gatsby-config.js
module.exports = {
  siteMetadata: {
    siteName: "Dovetail",
    siteUrl: process.env.GATSBY_BASE_URL ? process.env.GATSBY_BASE_URL : "https://dovetailapp.com"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-remove-trailing-slashes",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typestyle",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/pages",
        name: "documents"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/",
        name: "data"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M2PTNW9",
        includeInDevelopment: false
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN || "",
        config: {
          environment: process.env.SENTRY_ENVIRONMENT,
          release: process.env.SENTRY_RELEASE,
          version: "3.24.2"
        }
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#512da8",
        showSpinner: false
      }
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://dovetailapp.com"
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options:
        process.env.PREVENT_CRAWLING === "true"
          ? {
              policy: [{ userAgent: "*", disallow: ["/"] }],
              sitemap: null,
              host: null
            }
          : { policy: [{ userAgent: "*", disallow: ["/confirm", "/404", "/504", "/users/*"] }] }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        disable: true,
        generateStatsFile: true
      }
    }
  ]
};

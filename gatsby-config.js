require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  SITE_URL,
  URL: NETLIFY_SITE_URL = SITE_URL,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const netlifyProduction = NETLIFY_ENV === "production"
const siteUrl =
  (netlifyProduction ? SITE_URL || NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL) ||
  "https://appnroll-developers.netlify.app"

module.exports = {
  siteMetadata: {
    title: `App'n'roll Developers`,
    description: `Developers App'n'roll`,
    author: `@appnroll`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-heading-slug`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                ts: "typescript",
                js: "javascript",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `App'n'roll Developers`,
        short_name: `App'n'roll Developers`,
        start_url: `/`,
        background_color: `#ea2829`,
        theme_color: `#ea2829`,
        display: `minimal-ui`,
        icon: "src/images/appnroll.png",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

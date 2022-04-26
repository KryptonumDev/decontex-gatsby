require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `decontex-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-netlify',
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: 'http://decontex.adamchrapek.pl/graphql'
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://akademiapanakrolika.pl',
        sitemap: 'https://akademiapanakrolika.pl/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akademia Pana Królika`,
        short_name: `Akademia Pana Królika`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FDF2F8`,
        display: `standalone`,
        icon: `src/resources/icon.png`,
      },
    },
    'gatsby-plugin-offline',
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`
  ]
}
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
        host: 'https://decontex.com/',
        sitemap: 'https://decontex.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Decontex Holding`,
        short_name: `Decontex`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FDF2F8`,
        display: `standalone`,
        icon: `src/resources/icon.png`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-52W7J9G",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ]
}
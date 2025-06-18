require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `decontex-gatsby`,
    siteUrl: `https://decontex.com/`
  },
  plugins: [
    'gatsby-plugin-netlify',
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: 'https://decontex.headlesshub.com/graphql',
        schema: {
          timeout: 100000,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://decontex.com/',
        sitemap: 'https://decontex.com/sitemap/sitemap-0.xml',
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
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-0G4KNVYTY1",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/resources/'
      },
      __key: 'images'
    }
  ]
}

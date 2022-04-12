import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv'
dotenv.config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `decontex-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['user'],
      }
    },
    "gatsby-plugin-styled-components"
  ]
};



export default config;
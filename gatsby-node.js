const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {

  const defaultLocale = 'en';

  const secondaryLanguages = ['ge', 'fr', '	nl'];

  secondaryLanguages.forEach((language) => {
    const langCode = language.split('-')[0];

    createRedirect({
      fromPath: '/',
      toPath: `/${language}/`,
      isPermanent: false,
      conditions: {
        language: [langCode],
      },
    });
  });

  const { data: { allWpPage: { homepageNodes } } } = await graphql(`
        query {
          allWpPage(filter: {template: {templateName: {eq: "Homepage"}}}) {
            homepageNodes: nodes {
              id
              language {
                slug
              }
            }
          }
        }
      `);


  homepageNodes.forEach(({  id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/' : slug,
      component: resolve('src/templates/homepage.jsx'),
      context: {
        id,
        slug,
      },
    });
  });


}
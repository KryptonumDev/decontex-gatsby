const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

exports.createPages = async ({
    graphql,
    actions: { createPage, createRedirect },
}) => {

    const { data: { datoCmsSite: { locales } } } = await graphql(`
        query {
          datoCmsSite {
            locales
          }
        }
      `);

    const [defaultLocale] = locales;

    const secondaryLanguages = [...locales];
    secondaryLanguages.shift();

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

    const { data: { allDatoCmsHomepage: { homepageNodes } } } = await graphql(`
        query {
          allDatoCmsHomepage {
            homepageNodes: nodes {
              id: originalId
              locale
            }
          }
        }
      `);

    const HomePageTemplate = resolve('src/templates/homepage.jsx');

    homepageNodes.forEach(({ id, locale }) => {
        createPage({
            path: locale === defaultLocale ? '/' : locale,
            component: HomePageTemplate,
            context: {
                id,
                locale,
            },
        });
    });

}
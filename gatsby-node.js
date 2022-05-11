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

  // HOMEPAGE

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

  homepageNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/' : slug,
      component: resolve('src/templates/homepage.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // DECONTOMINATION PAGE

  const { data: { allWpPage: { decontominationNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Decontomination"}}}) {
      decontominationNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  decontominationNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/decontomination/' : '/' + slug + '/decontomination/',
      component: resolve('src/templates/decontomination.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // ABOUT PAGE

  const { data: { allWpPage: { aboutNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "About"}}}) {
      aboutNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  aboutNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/about/' : '/' + slug + '/about/',
      component: resolve('src/templates/about.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // FAQ

  const { data: { allWpPage: { faqNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Faq"}}}) {
      faqNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  faqNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/faq/' : '/' + slug + '/faq/',
      component: resolve('src/templates/faq.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

}
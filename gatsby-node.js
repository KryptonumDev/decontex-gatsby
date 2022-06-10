const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {

  const defaultLocale = 'en';

  const secondaryLanguages = ['ge', 'fr', 'nl'];

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

  // BLOG ARCHIVE

  const { data: { allWpPage: { blogArchiveNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Blog-archive"}}}) {
      blogArchiveNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  blogArchiveNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/blog/' : '/' + slug + '/blog/',
      component: resolve('src/templates/blog-archive.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // BLOG POSTS

  const { data: { allWpPost: { BlogPosts } } } = await graphql(`
  query {
    allWpPost {
      BlogPosts: nodes {
        id
        blogPost {
          meta {
            slug
          }
        }
        language {
          slug
        }
      }
    }
  }
`);

  BlogPosts.forEach(({ id, language: { slug: langSlug }, blogPost: { meta: { slug: pageSlug } } }) => {
    createPage({
      path: langSlug === defaultLocale ? '/blog/' + pageSlug + '/' : '/' + langSlug + '/blog/' + pageSlug + '/',
      component: resolve('src/templates/blog-post.jsx'),
      context: {
        id,
        pageSlug,
        langSlug
      },
    });
  });

  // NEWS ARCHIVE

  const { data: { allWpPage: { newsArchiveNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "News-archive"}}}) {
      newsArchiveNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
  `);

  newsArchiveNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/news/' : '/' + slug + '/news/',
      component: resolve('src/templates/news-archive.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // NEWS POSTS

  const { data: { allWpNews: { NewsPosts } } } = await graphql(`
  query {
    allWpNews {
      NewsPosts: nodes {
        id
        blogPost {
          meta {
            slug
          }
        }
        language {
          slug
        }
      }
    }
  }
  `);

  NewsPosts.forEach(({ id, language: { slug: langSlug }, blogPost: { meta: { slug: pageSlug } } }) => {
    createPage({
      path: langSlug === defaultLocale ? '/news/' + pageSlug + '/' : '/' + langSlug + '/news/' + pageSlug + '/',
      component: resolve('src/templates/news-post.jsx'),
      context: {
        id,
        pageSlug,
        langSlug
      },
    });
  });

  // CONTACT

  const { data: { allWpPage: { contactNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Contact"}}}) {
      contactNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  contactNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/contact/' : '/' + slug + '/contact/',
      component: resolve('src/templates/contact.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // PRIVACY POLICE

  const { data: { allWpPage: { privacyPoliceNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Privacy-police"}}}) {
      privacyPoliceNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  privacyPoliceNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/privacy-police/' : '/' + slug + '/privacy-police/',
      component: resolve('src/templates/privacy-police.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // PARTBERS

  const { data: { allWpPage: { partnersNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Partners"}}}) {
      partnersNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  partnersNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/partners/' : '/' + slug + '/partners/',
      component: resolve('src/templates/partners.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // FREEBIES

  const { data: { allWpPage: { freebiesNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Freebies"}}}) {
      freebiesNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  freebiesNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: slug === defaultLocale ? '/freebies/' : '/' + slug + '/freebies/',
      component: resolve('src/templates/freebies.jsx'),
      context: {
        id,
        slug,
      },
    });
  });
}

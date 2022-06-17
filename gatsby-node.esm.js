const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

import { urls } from './src/constants/url'

exports.createPages = async ({
  graphql,
  actions: { createPage },
}) => {

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
      path: urls.homepage[slug],
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
      path: urls.solution[slug],
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
      path: urls.about[slug],
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
      path: urls.faq[slug],
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
      path: urls.blog[slug],
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
      path: urls.blogPost[langSlug] + pageSlug,
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
      path: urls.news[slug],
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
      path: urls.newsPost[langSlug] + pageSlug,
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
      path: urls.contact[slug],
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
      path: urls.privacyPolice[slug],
      component: resolve('src/templates/privacy-police.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // TERMS AND CONDITIONS

  const { data: { allWpPage: { termsAndConditionsNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Terms And Conditions"}}}) {
      termsAndConditionsNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

  termsAndConditionsNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: urls.termsAndConditions[slug],
      component: resolve('src/templates/privacy-police.jsx'),
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
      path: urls.freebies[slug],
      component: resolve('src/templates/freebies.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // LCO2

  const { data: { allWpPage: { lco2Nodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Lco2"}}}) {
      lco2Nodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

lco2Nodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: urls.lco2[slug],
      component: resolve('src/templates/lco2.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // CASE STUDIES

  const { data: { allWpPage: { caseStudiesNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Case Studies"}}}) {
      caseStudiesNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

caseStudiesNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: urls.casestudies[slug],
      component: resolve('src/templates/case-studies.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // DECO 2 FIRE

  const { data: { allWpPage: { Deco2fireNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Deco2fire"}}}) {
      Deco2fireNodes: nodes {
        id
        language {
          slug
        }
      }
    }
  }
`);

Deco2fireNodes.forEach(({ id, language: { slug } }) => {
    createPage({
      path: urls.service[slug],
      component: resolve('src/templates/deco2fire.jsx'),
      context: {
        id,
        slug,
      },
    });
  });
}

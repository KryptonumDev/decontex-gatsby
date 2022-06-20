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
              template {
                templateName
              }
            }
          }
        }
      `);

  homepageNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Homepage"][slug],
      component: resolve('src/templates/homepage.jsx'),
      context: {
        id,
        slug,
        templateName
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
        template {
          templateName
        }
      }
    }
  }
`);

  decontominationNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Decontomination"][slug],
      component: resolve('src/templates/decontomination.jsx'),
      context: {
        id,
        slug,
        templateName
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
        template {
          templateName
        }
      }
    }
  }
`);

  aboutNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["About"][slug],
      component: resolve('src/templates/about.jsx'),
      context: {
        id,
        slug,
        templateName
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
        template {
          templateName
        }
      }
    }
  }
`);

  faqNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Faq"][slug],
      component: resolve('src/templates/faq.jsx'),
      context: {
        id,
        slug,
        templateName
      },
    });
  });

  // BLOG ARCHIVE

//   const { data: { allWpPage: { blogArchiveNodes } } } = await graphql(`
//   query {
//     allWpPage(filter: {template: {templateName: {eq: "Blog-archive"}}}) {
//       blogArchiveNodes: nodes {
//         id
//         language {
//           slug
//         }
//         template {
//           templateName
//         }
//       }
//     }
//   }
// `);

//   blogArchiveNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
//     createPage({
//       path: urls["Blog-archive"][slug],
//       component: resolve('src/templates/blog-archive.jsx'),
//       context: {
//         id,
//         slug,
//         templateName
//       },
//     });
//   });

  // BLOG POSTS

//   const { data: { allWpPost: { BlogPosts } } } = await graphql(`
//   query {
//     allWpPost {
//       BlogPosts: nodes {
//         id
//         blogPost {
//           meta {
//             slug
//           }
//         }
//         language {
//           slug
//         }
//       }
//     }
//   }
// `);

//   BlogPosts.forEach(({ id, language: { slug: langSlug }, blogPost: { meta: { slug: pageSlug } } }) => {
//     createPage({
//       path: urls["Blog-archive"][langSlug] + pageSlug,
//       component: resolve('src/templates/blog-post.jsx'),
//       context: {
//         id,
//         pageSlug,
//         langSlug
//       },
//     });
//   });

  // NEWS ARCHIVE

  // const { data: { allWpPage: { newsArchiveNodes } } } = await graphql(`
  // query {
  //   allWpPage(filter: {template: {templateName: {eq: "News-archive"}}}) {
  //     newsArchiveNodes: nodes {
  //       id
  //       language {
  //         slug
  //       }
  //       template {
  //         templateName
  //       }
  //     }
  //   }
  // }
  // `);

  // newsArchiveNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
  //   createPage({
  //     path: urls["News-archive"][slug],
  //     component: resolve('src/templates/news-archive.jsx'),
  //     context: {
  //       id,
  //       slug,
  //       templateName
  //     },
  //   });
  // });

  // NEWS POSTS

  // const { data: { allWpNews: { NewsPosts } } } = await graphql(`
  // query {
  //   allWpNews {
  //     NewsPosts: nodes {
  //       id
  //       blogPost {
  //         meta {
  //           slug
  //         }
  //       }
  //       language {
  //         slug
  //       }
  //     }
  //   }
  // }
  // `);

  // NewsPosts.forEach(({ id, language: { slug: langSlug }, blogPost: { meta: { slug: pageSlug } } }) => {
  //   createPage({
  //     path: urls["News-archive"][langSlug] + pageSlug,
  //     component: resolve('src/templates/news-post.jsx'),
  //     context: {
  //       id,
  //       pageSlug,
  //       langSlug
  //     },
  //   });
  // });

  // CONTACT

  const { data: { allWpPage: { contactNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Contact"}}}) {
      contactNodes: nodes {
        id
        language {
          slug
        }
        template {
          templateName
        }
      }
    }
  }
`);

  contactNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Contact"][slug],
      component: resolve('src/templates/contact.jsx'),
      context: {
        id,
        slug,
        templateName
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
        template {
          templateName
        }
      }
    }
  }
`);

  privacyPoliceNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Privacy-police"][slug],
      component: resolve('src/templates/privacy-police.jsx'),
      context: {
        id,
        slug,
        templateName
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
        template {
          templateName
        }
      }
    }
  }
`);

  termsAndConditionsNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Terms And Conditions"][slug],
      component: resolve('src/templates/privacy-police.jsx'),
      context: {
        id,
        slug,
        templateName
      },
    });
  });

  // FREEBIES

//   const { data: { allWpPage: { freebiesNodes } } } = await graphql(`
//   query {
//     allWpPage(filter: {template: {templateName: {eq: "Freebies"}}}) {
//       freebiesNodes: nodes {
//         id
//         language {
//           slug
//         }
//         template {
//           templateName
//         }
//       }
//     }
//   }
// `);

//   freebiesNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
//     createPage({
//       path: urls["Freebies"][slug],
//       component: resolve('src/templates/freebies.jsx'),
//       context: {
//         id,
//         slug,
//         templateName
//       },
//     });
//   });

  // LCO2

  const { data: { allWpPage: { lco2Nodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Lco2"}}}) {
      lco2Nodes: nodes {
        id
        language {
          slug
        }
        template {
          templateName
        }
      }
    }
  }
`);

  lco2Nodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Lco2"][slug],
      component: resolve('src/templates/lco2.jsx'),
      context: {
        id,
        slug,
        templateName
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
        template {
          templateName
        }
      }
    }
  }
`);

  caseStudiesNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Case Studies"][slug],
      component: resolve('src/templates/case-studies.jsx'),
      context: {
        id,
        slug,
        templateName
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
        template {
          templateName
        }
      }
    }
  }
`);

  Deco2fireNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Deco2fire"][slug],
      component: resolve('src/templates/deco2fire.jsx'),
      context: {
        id,
        slug,
        templateName
      },
    });
  });
}

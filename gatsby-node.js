const { resolve } = require('path');

const urls = {
  "Homepage": {
      en: '/',
      de: '/de/',
      fr: '/fr/',
      nl: '/nl/',
      es: '/es/',
      nb: '/nb/',
      fi: '/fi/',
      pt: '/pt/',
      pl: '/pl/'
  },
  "Deco2fire": {
      en: '/deco2fire/',
      de: '/de/deco2fire/',
      fr: '/fr/deco2fire/',
      nl: '/nl/deco2fire/',
      es: '/es/deco2fire/',
      nb: '/nb/deco2fire/',
      fi: '/fi/deco2fire/',
      pt: '/pt/deco2fire/',
      pl: '/pl/deco2fire/'
  },
  "Decontomination": {
      en: '/decon-solution/',
      de: '/de/dekon-losung/',
      fr: '/fr/decon-solution/',
      nl: '/nl/decon-solution/',
      es: '/es/decon-solucion/',
      nb: '/nb/decon-solution/',
      fi: '/fi/decon-solution/',
      pt: '/pt/decon-solution/',
      pl: '/pl/decon-solution/',
  },
  "About": {
      en: '/about-us/',
      de: '/de/uber-uns/',
      fr: '/fr/about-us/',
      nl: '/nl/about-us/',
      es: '/es/sobre-nosotros/',
      nb: '/nb/about-us/',
      fi: '/fi/about-us/',
      pt: '/pt/about-us/',
      pl: '/pl/about-us/',
  },
  "Case Studies": {
      en: '/case-studies/',
      de: '/de/fallstudien/',
      fr: '/fr/case-studies/',
      nl: '/nl/case-studies/',
      es: '/es/estudios-caso/',
      nb: '/nb/case-studies/',
      fi: '/fi/case-studies/',
      pt: '/pt/case-studies/',
      pl: '/pl/case-studies/',
  },
  "Lco2": {
      en: '/pressurized-co2/',
      de: '/de/druck-co2/',
      fr: '/fr/pressurized-co2/',
      nl: '/nl/pressurized-co2/',
      es: '/es/co2-presurizado/',
      nb: '/nb/pressurized-co2/',
      fi: '/fi/pressurized-co2/',
      pt: '/pt/pressurized-co2/',
      pl: '/pl/pressurized-co2/',
  },
  "Faq": {
      en: '/faq/',
      de: '/de/faq/',
      fr: '/fr/faq/',
      nl: '/nl/faq/',
      es: '/es/faq/',
      nb: '/nb/faq/',
      fi: '/fi/faq/',
      pt: '/pt/faq/',
      pl: '/pl/faq/',
  },
  "Contact": {
      en: '/contact/',
      de: '/de/kontakt/',
      fr: '/fr/contact/',
      nl: '/nl/contact/',
      es: '/es/contacto/',
      nb: '/nb/contact/',
      fi: '/fi/contact/',
      pt: '/pt/contact/',
      pl: '/pl/contact/',
  },
  "Freebies": {
      en: '/download/',
      de: '/de/download/',
      fr: '/fr/download/',
      nl: '/nl/download/',
      es: '/es/descargar/',
      nb: '/nb/download/',
      fi: '/fi/download/',
      pt: '/pt/download/',
      pl: '/pl/download/',
  },

  "Privacy-police": {
      en: '/cookie-policy/',
      de: '/de/cookie-richtlinie/',
      fr: '/fr/cookie-policy/',
      nl: '/nl/cookie-policy/',
      es: '/es/cookie-policy/',
      nb: '/nb/cookie-policy/',
      fi: '/fi/cookie-policy/',
      pt: '/pt/cookie-policy/',
      pl: '/pl/cookie-policy/',
  },
  "Terms And Conditions": {
      en: '/privacy-statement/',
      de: '/de/datenschutzerklaerung/',
      fr: '/fr/privacy-statement/',
      nl: '/nl/privacy-statement/',
      es: '/es/privacy-statement/',
      nb: '/nb/privacy-statement/',
      fi: '/fi/privacy-statement/',
      pt: '/pt/privacy-statement/',
      pl: '/pl/privacy-statement/',
  },

  "Blog-archive": {
      en: '/blog/',
      de: '/de/blog/',
      fr: '/fr/blog/',
      nl: '/nl/blog/',
      es: '/es/blog/',
      nb: '/nb/blog/',
      fi: '/fi/blog/',
      pt: '/pt/blog/',
      pl: '/pl/blog/',
  },

  "News-archive": {
      en: '/news/',
      de: '/de/nachrichten/',
      fr: '/fr/news/',
      nl: '/nl/news/',
      es: '/es/notitias/',
      nb: '/nb/news/',
      fi: '/fi/news/',
      pt: '/pt/news/',
      pl: '/pl/news/',
  },

  'Applications': {
      en: '/applications/',
      de: '/de/applications/',
      fr: '/fr/applications/',
      nl: '/nl/applications/',
      es: '/es/applications/',
      nb: '/nb/applications/',
      fi: '/fi/applications/',
      pt: '/pt/applications/',
      pl: '/pl/applications/',
  },

  'Guarantee': {
      en: '/guarantee/',
      de: '/de/guarantee/',
      fr: '/fr/guarantee/',
      nl: '/nl/guarantee/',
      es: '/es/guarantee/',
      nb: '/nb/guarantee/',
      fi: '/fi/guarantee/',
      pt: '/pt/guarantee/',
      pl: '/pl/guarantee/',
  },

  'Social-responsibility': {
      en: '/social-responsibility/',
      de: '/de/social-responsibility/',
      fr: '/fr/social-responsibility/',
      nl: '/nl/social-responsibility/',
      es: '/es/social-responsibility/',
      nb: '/nb/social-responsibility/',
      fi: '/fi/social-responsibility/',
      pt: '/pt/social-responsibility/',
      pl: '/pl/social-responsibility/',
  },
}

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

  // APPLICATIONS

  const { data: { allWpPage: { ApplicationNodes } } } = await graphql(`
  query {
    allWpPage(filter: {template: {templateName: {eq: "Applications"}}}) {
      ApplicationNodes: nodes {
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

  ApplicationNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
    createPage({
      path: urls["Applications"][slug],
      component: resolve('src/templates/applications.jsx'),
      context: {
        id,
        slug,
        templateName
      },
    });
  });

   // GUARANTEE

    const { data: { allWpPage: { GuaranteeNodes } } } = await graphql(`
    query {
      allWpPage(filter: {template: {templateName: {eq: "Guarantee"}}}) {
        GuaranteeNodes: nodes {
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
  
  GuaranteeNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
      createPage({
        path: urls["Guarantee"][slug],
        component: resolve('src/templates/guarantee.jsx'),
        context: {
          id,
          slug,
          templateName
        },
      });
    });

    // Social-responsibility

    const { data: { allWpPage: { SocialNodes } } } = await graphql(`
    query {
      allWpPage(filter: {template: {templateName: {eq: "Social-responsibility"}}}) {
        SocialNodes: nodes {
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
  
  SocialNodes.forEach(({ id, language: { slug }, template: {templateName} }) => {
      createPage({
        path: urls["Social-responsibility"][slug],
        component: resolve('src/templates/social-responsibility.jsx'),
        context: {
          id,
          slug,
          templateName
        },
      });
    });
}


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }

    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`

    deletePage(oldPage)
    createPage(page)
  }
}
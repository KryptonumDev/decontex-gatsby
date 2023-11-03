import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import TwoColumnWithTitleAndImage from "../components/parents/two-column-with-title-image"
import DecontominationSubjectsMini from "../components/parents/decontomination-subjects-mini"
import Technologies from "../components/parents/technologies"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function About({ data: { allWpPage, alternates } }) {
  let { about, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} />
      <Hero data={about.hero} position={'100%'} parent={'top: 20%;'} />
      <TwoColumnWithTitleAndImage data={about.twoColumnWithTitle} />
      <DecontominationSubjectsMini data={about.decontominationSubjects} />
      <Technologies data={about.technologies} />
    </main>
  )
}

export const query = graphql`
  query AboutPageQuery($id: String!, $templateName: String!){
    alternates : allWpPage(filter: {template: {templateName: {eq: $templateName}}}) {
      nodes {
        language {
          slug
          name
        }
        template {
          templateName
        }
      }
    }
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
        }
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphImage {
            localFile {
              publicURL
            }
          }
        }
        about {
            hero {
              title
              subTitle
              background {
                  altText
                  localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
              }
            }
            twoColumnWithTitle {
              title
              text
              img {
                  altText
                  localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
              }
            }
            decontominationSubjects {
              title
              partners {
                partnerLogo{
                  altText
                  localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                }
              }
            }
            technologies {
              title
              repeater {
                text
                img{
                  altText
                  localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                }
              }
            }
        }
      }
    }
  }
`
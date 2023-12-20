import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import TwoColumnWithTitleAndImage from "../components/parents/two-column-with-title-image"
import DecontominationSubjectsMini from "../components/parents/decontomination-subjects-mini"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"
import PillarsOfDecontex from "../components/parents/pillars-of-decontex"

export default function About({ data: { allWpPage, alternates } }) {
  let { about, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} />
      <Hero data={about.hero} position={'100%'} parent={'top: 40%; bottom: -10%; min-width: 350px;'} />
      <TwoColumnWithTitleAndImage data={about.twoColumnWithTitle} />
      <DecontominationSubjectsMini data={about.decontominationSubjects} />
      {about.pillarsOfDecontex.sectionTitle && (
        <PillarsOfDecontex data={about.pillarsOfDecontex} />
      )}
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
              links{
                link
                name
                isouter
              }
            }
            pillarsOfDecontex{
              sectionTitle
              linkOnTheRight{
                title
                url
              }
              cards{
                cardTitle
                cardBackground{
                  altText
                  localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                }
                cardIcon{
                  altText
                  localFile {
                    publicURL
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
                altText
                localFile {
                  childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 100)
                  }
                }
              }
            }
        }
      }
    }
  }
`
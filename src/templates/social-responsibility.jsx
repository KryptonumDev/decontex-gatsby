import React from "react"
import { graphql } from "gatsby"
import { toTop } from './../helpers/scrollToTop'
import Hero from "../components/parents/hero-decontomination"
import PillarsOfDecontex from "../components/parents/pillars-of-decontex"
import HowWeDoIt from "../components/parents/how-we-do-it"
import PillarsExtense from "../components/parents/pilars-extense"

export default function About({ data: { allWpPage, alternates } }) {
  let { socialResponsibility, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Hero alt={true} data={socialResponsibility.heroSocialResponsibility} position={'100%'} parent={'top: 20%;'} />
      <HowWeDoIt data={socialResponsibility.howWeDoIt} />
      <PillarsOfDecontex data={socialResponsibility.pillarsOfDecontexSocialResponsibility} />
      <PillarsExtense data={socialResponsibility.pillarsExtense} />
    </main>
  )
}

export const query = graphql`
  query SocialResponsibilityQuery($id: String!, $templateName: String!){
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
      nodes{
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
        socialResponsibility{
          pillarsExtense{
            image{
              altText
              localFile {
                childImageSharp {
                    gatsbyImageData(quality: 90)
                }
              }
            }
            content
            leftText
            rightText
          }
          howWeDoIt{
            title
            text: textOnTheRight
          }
          pillarsOfDecontexSocialResponsibility{
            sectionTitle
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
          heroSocialResponsibility{
            title
            subTitle
            links{
              link
              name
              isouter
            }
            background {
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 90)
                    }
                }
            }
          }
        }
      }
    }
  }
`
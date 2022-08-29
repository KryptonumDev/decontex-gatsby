import React from "react"
import { graphql } from "gatsby"
import Hero from '../components/parents/hero-decontomination'
import CaseStudiesRepeater from "../components/parents/case-studies-repeater"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function CaseStudies({ data: { allWpPage, alternates } }) {
    let { caseStudies, language, seo } = allWpPage.nodes[0]

    React.useEffect(() => {
        toTop()
    }, [])

    return (
        <main>
            <Seo data={seo} lang={language.slug}  alternates={alternates} />
            <Hero data={caseStudies.heroCasestudies} position={'100%'} parent={'top: 35%;'} />
            <CaseStudiesRepeater data={caseStudies.cases} />
        </main>
    )
}

export const query = graphql`
  query CaseStudiesPageQuery($id: String!, $templateName: String!){
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
        caseStudies{
            heroCasestudies{
                title
                subTitle
                links{
                  link
                  name
                }
                background {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
            cases{
                caseImage{
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                caseTitle
                placeText
                contominationType
                caseText
            }
        }
      }
    }
  }
`
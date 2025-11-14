import React from "react"
import { graphql } from "gatsby"
import PrivacyContent from "../components/parents/privacy-content"
import Hero from "../components/parents/hero-decontomination"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function Impressum({ data: { allWpPage, alternates } }) {
  const pageNode = allWpPage.nodes[0]
  const { language, seo } = pageNode
  const pageData = pageNode.impressum
  const heroData = pageData?.heroPrivacy

  React.useEffect(() => {
    toTop()
  }, [])

  if (!pageData) {
    return null
  }

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates}/>
      {heroData?.background?.localFile?.childImageSharp?.gatsbyImageData ? (
        <Hero data={heroData} position={'100%'} parent={'top: 25%;'} />
      ) : null}
      <PrivacyContent data={pageData} />
    </main>
  )
}

export const query = graphql`
  query ImpressumPageQuery($id: String!, $templateName: String!){
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
        impressum{
            heroPrivacy{
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
            columns{
                leftColumn
                rightColumn
            }
            contactPrivacy{
              contactText
              contactMail
            }
        }
      }
    }
  }
`



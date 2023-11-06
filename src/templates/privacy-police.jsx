import React from "react"
import { graphql } from "gatsby"
import PrivacyContent from "../components/parents/privacy-content"
import Hero from "../components/parents/hero-decontomination"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function PrivacyPolice({ data: { allWpPage, alternates } }) {
  let { privacyPolice, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates}/>
      <Hero data={privacyPolice.heroPrivacy} position={'100%'} parent={'top: 25%;'} />
      <PrivacyContent data={privacyPolice} />
    </main>
  )
}

export const query = graphql`
  query PrivacyPolicePageQuery($id: String!, $templateName: String!){
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
        privacyPolice{
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
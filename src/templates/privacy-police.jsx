import React from "react"
import { graphql } from "gatsby"
import PrivacyContent from "../components/parents/privacy-content"
import Hero from "../components/parents/hero-decontomination"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function PrivacyPolice({ data: { allWpPage, alternates }, location  }) {
  let { privacyPolice, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates}  location={location}/>
      <Hero data={privacyPolice.heroPrivacy} position={'97%'} parent={'top: 30%;'} />
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
          fullHead
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
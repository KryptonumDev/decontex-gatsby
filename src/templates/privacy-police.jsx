import React from "react"
import { graphql } from "gatsby"
import PrivacyContent from "../components/parents/privacy-content"
import Hero from "../components/parents/hero-decontomination"
import { toTop } from './../helpers/scrollToTop'

export default function PrivacyPolice({ data: { allWpPage } }) {
  let { privacyPolice } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])
  
  return (
    <main>
      <Hero data={privacyPolice.heroPrivacy}  position={'97%'} parent={'top: 20%;'} />
      <PrivacyContent data={privacyPolice} />
    </main>
  )
}

export const query = graphql`
  query PrivacyPolicePageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
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
import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import Content from "../components/parents/partners-content"

export default function Partners({ data: { allWpPage } }) {
    let { partners } = allWpPage.nodes[0]
    return (
        <main>
            <Hero data={partners.heroPartners} />
            <Content data={partners.contentPartners}/>
        </main>
    )
}

export const query = graphql`
  query PartnersPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        partners{
            heroPartners{
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
            contentPartners{
                title
                text
                repeater{
                    logo{
                        altText
                        sourceUrl
                    }
                    text
                    link{
                        name
                        link
                    }
                }
            }
        }
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import Content from "../components/parents/faq-content"

export default function Faq({ data: { allWpPage } }) {
    let { faq } = allWpPage.nodes[0]
    return (
        <main>
            <Hero data={faq.heroFaq} />
            <Content data={faq.content} />
        </main>
    )
}

export const query = graphql`
  query FaqPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        faq {
            heroFaq {
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
            content {
                title
                text
                link{
                  name
                  url{
                    url
                  }
                }
                repeater{
                    question
                    answer
                }
            }
        }
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import Content from "../components/parents/faq-content"
import { toTop } from './../helpers/scrollToTop'

export default function Faq({ data: { allWpPage } }) {
    let { faq } = allWpPage.nodes[0]

    React.useEffect(() => {
      toTop()
    }, [])
    
    return (
        <main>
            <Hero data={faq.heroFaq}  position={'70%'} parent={'top: 30%;'}/>
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
                  url
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
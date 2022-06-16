import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import Content from "../components/parents/faq-content"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function Faq({ data: { allWpPage } }) {
  let { faq, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} />
      <Hero data={faq.heroFaq} position={'70%'} parent={'top: 30%;'} />
      <Content data={faq.content} />
    </main>
  )
}

export const query = graphql`
  query FaqPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
        }
        seo {
          title
          fullHead
        }
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
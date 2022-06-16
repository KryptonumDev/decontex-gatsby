import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import TwoColumnWithTitleAndImage from "../components/parents/two-column-with-title-image"
import DecontominationSubjectsMini from "../components/parents/decontomination-subjects-mini"
import Technologies from "../components/parents/technologies"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function About({ data: { allWpPage } }) {
  let { about, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} />
      <Hero data={about.hero} position={'90%'} parent={'top: 30%;'} />
      <TwoColumnWithTitleAndImage data={about.twoColumnWithTitle} />
      <DecontominationSubjectsMini data={about.decontominationSubjects} />
      <Technologies data={about.technologies} />
    </main>
  )
}

export const query = graphql`
  query AboutPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
        }
        seo {
          title
          fullHead
        }
        about {
            hero {
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
            twoColumnWithTitle {
              title
              subTitle
              text
              img {
                  altText
                  localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
              }
            }
            decontominationSubjects {
              title
              repeater {
                text
                backgroundColor
              }
            }
            technologies {
              title
              repeater {
                text
                img{
                  altText
                  localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                }
              }
            }
        }
      }
    }
  }
`
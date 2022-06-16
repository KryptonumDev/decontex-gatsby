import React from "react"
import { graphql } from "gatsby"
import Hero from '../components/parents/hero-decontomination'
import CaseStudiesRepeater from "../components/parents/case-studies-repeater"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function CaseStudies({ data: { allWpPage } }) {
    let { caseStudies, language, seo } = allWpPage.nodes[0]

    React.useEffect(() => {
        toTop()
    }, [])

    return (
        <main>
            <Seo data={seo} lang={language.slug} />
            <Hero data={caseStudies.heroCasestudies} position={'90%'} parent={'top: 20%;'} />
            <CaseStudiesRepeater data={caseStudies.cases} />
        </main>
    )
}

export const query = graphql`
  query CaseStudiesPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
        }
        seo {
            title
            fullHead
        }
        caseStudies{
            heroCasestudies{
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
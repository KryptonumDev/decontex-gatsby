import React from "react"
import { graphql } from "gatsby"
import Hero from '../components/parents/hero-decontomination'
import CaseStudiesRepeater from "../components/parents/case-studies-repeater"

export default function CaseStudies({ data: { allWpPage } }) {
    let { caseStudies } = allWpPage.nodes[0]
    return (
        <main>
            <Hero data={caseStudies.heroCasestudies} />
            <CaseStudiesRepeater data={caseStudies.cases}/>
        </main>
    )
}

export const query = graphql`
  query CaseStudiesPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
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
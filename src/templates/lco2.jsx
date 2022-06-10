import React from "react"
import { graphql } from "gatsby"
import AboutLCO2 from '../components/parents/about-lco2'
import Hero from '../components/parents/hero-decontomination'

export default function Lco2({ data: { allWpPage } }) {
    let { lco2 } = allWpPage.nodes[0]
    return (
        <main>
            <Hero data={lco2.heroLco2} />
            <AboutLCO2 data={lco2.aboutLco2} />
        </main>
    )
}

export const query = graphql`
  query Lco2PageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
          lco2{
            heroLco2 {
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
            aboutLco2{
                title
                leftText
                rightText
                repeater{
                    title
                    text
                    img{
                        altText
                        sourceUrl
                    }
                }
            }
        }
      }
    }
  }
`
import * as React from 'react'
import { graphql } from "gatsby"
import Hero from '../components/parents/hero-decontomination'
import WhatIsDecontomination from '../components/parents/what-is-decontomination'
import DecontominationProcess from '../components/parents/decontomination-process'
import FeaturedOneColumn from '../components/parents/featured-one-column'
import AboutLCO2 from '../components/parents/about-lco2'
import DecontominationSubject from '../components/parents/decontomination-subjects'

export default function Decontomination({ data: { allWpPage } }) {
  let { decontomination } = allWpPage.nodes[0]
  debugger
  return (
    <main>
      <Hero data={decontomination.heroDecontomination} />
      <WhatIsDecontomination data={decontomination.about} />
      <DecontominationProcess data={decontomination.process} />
      <FeaturedOneColumn data={decontomination.featuredOneColumn} />
      <AboutLCO2 data={decontomination.aboutLco2} />
      <DecontominationSubject data={decontomination.decontominationSubject} />
    </main>
  )
}

export const query = graphql`
  query DecontominationPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        decontomination {
          heroDecontomination {
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
            about{
              title
              leftText
              rightText
              repeater{
                img{
                  altText
                  sourceUrl
                }
                title
              }
            }
            process{
              title
              leftText
              rightText
              repeater{
                img{
                  altText
                  sourceUrl
                }
                title
                text
              }

            }
            featuredOneColumn{
              text
              link{
                name
                link
              }
            }
            aboutLco2{
              title
              leftText
              rightText
              repeater{
                img{
                  altText
                  sourceUrl
                }
                title
                text
              }

            }
            decontominationSubject {
              title
              text
              repeater {
                title
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
              repeaterLastElement {
                text
                link {
                  name
                  link
                }
              }
              img {
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
`
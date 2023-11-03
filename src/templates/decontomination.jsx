import * as React from 'react'
import { graphql } from "gatsby"
import Hero from '../components/parents/hero-decontomination'
import WhatIsDecontomination from '../components/parents/what-is-decontomination'
import DecontominationBenefits from "../components/parents/decontominations-advantages" // new
import DecontomiantionBenefits from '../components/parents/decontomination-benefits-black'
import TwoColumnWithTitle from '../components/parents/two-column-with-title'
import FeaturedJackets from '../components/parents/featured-jackets'
import { toTop } from './../helpers/scrollToTop'
import Seo from '../components/parents/seo'

export default function Decontomination({ data: { allWpPage, alternates } }) {
  let { decontomination, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug}  alternates={alternates} />
      <Hero data={decontomination.heroDecontomination} position={'50%'} />
      <WhatIsDecontomination data={decontomination.decontexTechnology} />
      <DecontomiantionBenefits data={decontomination.decontominationBenefitsDecon} />
      <TwoColumnWithTitle data={decontomination.twoColumnsWithTitle} />
      <DecontominationBenefits data={decontomination.decontominationAdvantages} />
      <FeaturedJackets data={decontomination.featuredWithJackets} />
    </main>
  )
}

export const query = graphql`
  query DecontominationPageQuery($id: String!, $templateName: String!){
    alternates : allWpPage(filter: {template: {templateName: {eq: $templateName}}}) {
      nodes {
        language {
          slug
          name
        }
        template {
          templateName
        }
      }
    }
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
        }
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphImage {
            localFile {
              publicURL
            }
          }
        }
        decontomination {
          heroDecontomination {
                title
                links{
                  link
                  name
                  isouter
                }
                background {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
            decontexTechnology{
              title
              image{
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
              }
              benefitsTitle
              repeater{
                img{
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                title
              }
            }
            decontominationAdvantages{
              table{
                row{
                  isRed
                  cell{
                    name
                  }
                }
                firstRow{
                  cell{
                    topText
                    bottomText
                  }
                }
              }
              link{
                url
                text
              }
            }
            decontominationBenefitsDecon{
              benefit{
                title
                text
                icon{
                  altText
                  localFile {
                      childImageSharp {
                          gatsbyImageData
                      }
                  }
                }
              }
            }
            twoColumnsWithTitle{
              sectionTitle
              leftText
              rightText
              button{
                url
                name
              }
            }
            featuredWithJackets{
              leftText
              rightText
              textFirst
              textSecond
              firstJacket{
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 100)
                    }
                }
              }
              secondJacket{
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 100)
                    }
                }
              }
            }
        }
      }
    }
  }
`
import * as React from 'react'
import { graphql } from "gatsby"
import Hero from '../components/parents/hero-decontomination'
import WhatIsDecontomination from '../components/parents/what-is-decontomination'
import DecontominationBenefits from "../components/parents/decontominations-advantages"
import DecontomiantionBenefits from '../components/parents/decontomination-benefits-black'
import TwoColumnWithTitle from '../components/parents/two-column-with-title'
import { toTop } from './../helpers/scrollToTop'
import Seo from '../components/parents/seo'
import DecontominationExpertsAlt from '../components/parents/decontomination-experts-alt'
import PatentedPlates from '../components/parents/patented-plates'
import PerformanceCompare from '../components/parents/performance-compare'
import TwoColumns from '../components/parents/two-column-guarantee'
import CarcinogenicCompounds from '../components/parents/carcinogenic-compounds'

export default function Decontomination({ data: { allWpPage, alternates } }) {
  let { decontomination, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} />
      <Hero data={decontomination.heroDecontomination} position={'50%'} />
      <WhatIsDecontomination data={decontomination.decontexTechnology} />
      <DecontominationExpertsAlt data={decontomination.decontominationExpertsDecontex} />
      <PatentedPlates data={decontomination.patentedPlates} />
      <PerformanceCompare data={decontomination.performanceCompare} />
      <CarcinogenicCompounds data={decontomination.carcinogenicCompounds}/>
      <DecontomiantionBenefits data={decontomination.decontominationBenefitsDecon} />
      <TwoColumnWithTitle data={decontomination.twoColumnsWithTitle} />
      <DecontominationBenefits data={decontomination.decontominationAdvantages} />
      <TwoColumns last={true} data={decontomination.twoColumnRepeaterDecontamination} />
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
          carcinogenicCompounds{
            sectionTitle
            textUnderTitle
            imageUnderText{
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            
            }
          }
          twoColumnRepeaterDecontamination{
              image{
                  altText
                  localFile{
                      childImageSharp {
                          gatsbyImageData
                      }
                  }
              }
              content
          }
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
            decontominationExpertsDecontex{
              title
              citeUnderTitle
              citeBackground{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              partTitle
              leftTextUnderTitle
              rightTextUnderTitle
              subTitleAbovePlates
              plates{
                plateIcon{
                  altText
                  localFile {
                    publicURL
                  }
                }
                plateContent
              }
              textUnderPlates
            }
            patentedPlates{
              title
              link{
                title
                url
              }
              plates{
                plateIcon{
                  altText
                  localFile {
                    publicURL
                  }
                }
                plateContent
                patentedIcon{
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
            }
            performanceCompare{
              compareTitle
              compare{
                groupContent
                groupName
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
              sectionTitle
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
        }
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import Hero from '../components/parents/hero-decontomination'
import SuitDescription from "../components/parents/suit-description"
import DecontominationBenefits from "../components/parents/decontomination-benefits"
import Cleanroom from "../components/parents/cleanroom"
import FeaturedOneColumn from "../components/parents/featured-one-column"
import OtherTechnologies from "../components/parents/other-technologies"

export default function Deco2fire({ data: { allWpPage } }) {
  let { deco2fire } = allWpPage.nodes[0]
  return (
    <main>
      <Hero data={deco2fire.heroDeco2fire}/>
      <SuitDescription data={deco2fire.suitDescription} />
      <DecontominationBenefits data={deco2fire.decontominationBenefits} />
      <Cleanroom data={deco2fire.decontexCleanroom} />
      <FeaturedOneColumn data={deco2fire.featuredOneColumn} />
      <OtherTechnologies data={deco2fire.otherTechnologies} />
    </main>
  )
}

export const query = graphql`
  query Deco2FirePageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        deco2fire{
          heroDeco2fire{
                title
                links{
                  link
                  name
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
          suitDescription {
            sectionTitle
            text
            suit {
              helmet {
                title
                text
              }
              balaclava {
                title
                text

              }
              harness {
                title
                text
              }
              jacket {
                title
                text
              }
              gloves {
                title
                text
              }
              pants {
                title
                text
              }
              boots {
                title
                text
              }
              overall {
                title
                text
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          decontominationBenefits{
            sectionTitle
            text
            textBenefits
            benefits{
              benefitText
              benefitIcon{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          decontexCleanroom{
            sectionTitle
            subTitle
            leftText
            rightText
            brownPlateText
            nextButton
            cleanroom{
              stepTitle
              roomPurpose
              purposeDescription
              stepView{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              purposeIcon{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            headquarters{
              countryFlag{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              name
              phone
              email
              address
            }
          }
          featuredOneColumn{
            text
            link{
              link
              name
            }
          }
          otherTechnologies{
            link{
              image{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              link
              ariaLabel
            }
            image{
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
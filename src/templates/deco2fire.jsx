import React from "react"
import { graphql } from "gatsby"
import SuitDescription from "../components/parents/suit-description"
import DecontominationBenefits from "../components/parents/decontomination-benefits"
import Cleanroom from "../components/parents/cleanroom"

export default function Deco2fire({ data: { allWpPage } }) {
  let { deco2fire } = allWpPage.nodes[0]
  return (
    <main>
      <SuitDescription data={deco2fire.suitDescription} />
      <DecontominationBenefits data={deco2fire.decontominationBenefits} />
      <Cleanroom data={deco2fire.decontexCleanroom} />
    </main>
  )
}

export const query = graphql`
  query Deco2FirePageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        deco2fire{
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
        }
      }
    }
  }
`
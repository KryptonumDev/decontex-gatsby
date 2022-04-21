import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-homepage"
import FeaturesWithIcons from "../components/parents/features-with-icons"
import FeaturedWithButton from "../components/parents/featured-with-button"
import FeaturedWithImg from "../components/parents/featured-with-img"
import Newsletter from "../components/parents/newslettter"
import DecontominationBenefits from "../components/parents/decontominations-advantages"
import TwoColumnGrid from "../components/parents/two-column-grid"
import TwoColumnWithTitle from "../components/parents/two-column-with-title"
import HowItWork from "../components/parents/how-it-work"
import Faq from "../components/parents/faq"
import Testomontials from "../components/parents/testomontials"
import OneColumnGrid from "../components/parents/one-column-grid"
import News from "../components/parents/news"
import Blog from "../components/parents/blog"

const IndexPage = ({ data: { datoCmsHomepage } }) => {
  return (
    <main>
      <Hero data={datoCmsHomepage.hero[0]} />
      <FeaturesWithIcons data={datoCmsHomepage.featuresWithIcons[0]} />
      <FeaturedWithButton data={datoCmsHomepage.featuredWithButton[0]} />
      <DecontominationBenefits data={datoCmsHomepage.decontominationAdvantages[0]} />
      <Newsletter data={datoCmsHomepage.newsletter[0]} />
      <TwoColumnGrid data={datoCmsHomepage.twoColumnGrid[0]} />
      <TwoColumnWithTitle data={datoCmsHomepage.twoColumnWithTitle[0]} />
      <HowItWork data={datoCmsHomepage.howLayersWorks[0]} />
      <Faq data={datoCmsHomepage.faq[0]} />
      <FeaturedWithImg data={datoCmsHomepage.featuredWithImg[0]} />
      section steps
      <Testomontials data={datoCmsHomepage.testomontials[0]} />
      <OneColumnGrid data={datoCmsHomepage.oneColumnGrid[0]} />
      <News />
      <Blog />
    </main>
  )
}

export default IndexPage

export const query = graphql`
  {
    datoCmsHomepage {
      hero {
        title {
          value
        }
        subTitle {
          value
        }
        backgroundImage {
          alt
          gatsbyImageData
        }
        links {
          slug
          name
        }
      }
      featuresWithIcons {
        title {
          value
        }
        rightText {
          value
        }
        leftText {
          value
        }
        benefits {
          text
          name
          icon {
            alt
            url
          }
        }
      }
      featuredWithButton {
        rightText {
          value
        }
        leftText {
          value
        }
        link {
          slug
          name
        }
      }
      decontominationAdvantages {
        table {
          row {
            ... on DatoCmsElementTableBoolCell {
              __typename
              isIncluded
            }
            ... on DatoCmsElementTableNamedCell {
              __typename
              name
            }
          }
        }
        link {
          slug
          name
        }
      }
      newsletter{
        title{
          value
        }
        backgroundImage{
          alt
          gatsbyImageData
        }
      }
      twoColumnGrid {
        title {
          value
        }
        subTitle {
          value
        }
        backgroundImage {
          alt
          gatsbyImageData
        }
      }
      twoColumnWithTitle {
        title {
          value
        }
        rightText {
          value
        }
        leftText {
          value
        }
      }
      howLayersWorks {
        title {
          value
        }
        subTitle {
          value
        }
        backgroundImage{
          alt
          gatsbyImageData
        }
        layers {
          name
          icon{
            alt
            url
          }
          layerTitle {
            value
          }
          layerText {
            value
          }
        }
      }
      featuredWithImg {
        backgroundImage {
          alt
          gatsbyImageData
        }
        button {
          slug
          name
        }
        leftText {
          value
        }
      }
      faq {
        backgroundImage {
          alt
          gatsbyImageData
        }
        bottomAnnotation {
          value
        }
        faq {
          answer {
            value
          }
          question {
            value
          }
        }
      }
      testomontials {
        backgroundImage{
          alt
          gatsbyImageData
        }
        title {
          value
        }
        subTitle {
          value
        }
        rightText {
          value
        }
        leftText {
          value
        }
        countries {
          title {
            value
          }
          subTitle {
            value
          }
        }
        persons {
          title {
            value
          }
          subTitle {
            value
          }
          img {
            alt
            gatsbyImageData
          }
        }
      }
      oneColumnGrid {
        title {
          value
        }
        subTitle {
          value
        }
        backgroundImage {
          alt
          gatsbyImageData
        }
      }
    }
  }
`
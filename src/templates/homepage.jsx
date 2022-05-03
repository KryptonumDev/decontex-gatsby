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
import DecontominationSteps from "../components/parents/decontominations-steps"

const IndexPage = ({ data: { allWpPage } }) => {
  let { homepage } = allWpPage.nodes[0]
  return (
    <main>
      <Hero data={homepage.hero} />
      <FeaturesWithIcons data={homepage.featuredWithIcon} />
      <FeaturedWithButton data={homepage.featuredWithButton} />
      <DecontominationBenefits data={homepage.decontominationAdvantages} />
      <Newsletter data={homepage.newsletter} />
      <TwoColumnGrid data={homepage.twoColumnGrid} />
      <TwoColumnWithTitle data={homepage.twoColumnWithTitle} />
      <HowItWork data={homepage.howItWorks} />
      <Faq data={homepage.faq} />
      {/* <FeaturedWithImg data={homepage.featuredWithImg} /> */}
      {/* <DecontominationSteps data={homepage.decontominationSteps} /> */}
      <Testomontials data={homepage.testomontials} />
      <OneColumnGrid data={homepage.oneColumnGrid} />
      {/* <News data={homepage.news} />  */}
      {/* <Blog data={homepage.blog} />  */}
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        homepage {
          hero {
            title
            subTitle
            link {
              text
              link {
                url
              }
            }
            backgroundImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          featuredWithIcon {
            title
            rightText
            leftText
            icons {
              text
              name
              icon {
                sourceUrl
                altText
              }
            }
          }
          featuredWithButton {
            leftText
            rightText
            link {
              text
              url {
                url
              }
            }
          }
          decontominationAdvantages {
            table {
              row {
                cell {
                  name
                  isincluded
                  textOrSymbol
                }
              }
            }
            link {
              url {
                url
              }
              text
            }
          }
          newsletter {
            title
            firstNamePlaceholder
            emailPlaceholdere
            agreementText
            buttonText
            backgroundImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          twoColumnGrid {
            title
            text
            backgroundImage {
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
            rightText
            leftText
          }
          howItWorks {
            title
            subTitle
            layersTitle
            layers {
              title
              text
              name
              icon {
                altText
                sourceUrl
              }
            }
            desctopImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            mobileImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          faq {
            faq {
              answer
              question
            }
            bottomAnnotation
            backgroundImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          featuredWithImg {
            text
            link {
              text
              url {
                url
              }
            }
            backgroundImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          decontominationSteps {
            title
            subTitle
            bottomAnnotation
            steps {
              title
              subTitle
              icon {
                altText
                sourceUrl
              }
            }
            outfits {
              viewName
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
          testomontials {
            title
            leftText
            rightText
            subTitle
            countries {
              title
              text
            }
            persons {
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
            helmetImg {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          oneColumnGrid {
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
          news {
            title
            text
            link {
              text
              url {
                url
              }
            }
          }
          blog {
            title
            text
            link {
              text
              url {
                url
              }
            }
          }
        }
      }
    }
  }
`
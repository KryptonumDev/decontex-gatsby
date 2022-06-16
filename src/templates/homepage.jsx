import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-homepage"
import Newsletter from "../components/parents/newslettter"
import News from "../components/parents/news"
import Blog from "../components/parents/blog"
import Contact from "../components/parents/contact"
import Partners from "../components/parents/partners"
import InteractiveMap from "../components/parents/interactive-map"
import CleanerSaferHealthier from "../components/parents/cleaner-safer-healthier"
import DecontominationExperts from "../components/parents/decontomination-experts"
import { toTop } from './../helpers/scrollToTop'

const IndexPage = ({ data: { allWpPage } }) => {
  let { homepage } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Hero data={homepage.heroHomepage} />
      <CleanerSaferHealthier data={homepage.cleanerSaferHealthier} />
      <DecontominationExperts data={homepage.decontominationExperts} />
      <InteractiveMap data={homepage.interactiveMap} />
      <Partners data={homepage.partners} />
      <Newsletter data={homepage.newsletter} />
      {/* <News data={homepage.news} />
      <Blog data={homepage.blog} /> */}
      <Contact data={homepage.contact} />
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        homepage {
          interactiveMap{
            sectionTitle
            text
            next
            country{
              countryName
              countryPhone
              countryEmail
              countryAddress
              countryCode
            }
          }
          heroHomepage {
            link {
              image{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              ariaLabel
              link 
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
          cleanerSaferHealthier{
            title
            text
            items{
              itemName
              itemImage{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            contactText
            link{
              url
              text
            }
          }
          decontominationExperts{
            title
            image{
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            list
            textAboveButtons
            buttons{
              text
              url
            }
          }
          partners{
            title
            partners{
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          newsletter {
            title
            firstNamePlaceholder
            emailErrorText
            emailPlaceholdere
            agreementErrorText
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
          contact {
            title
            text
            form {
              switchTitle
              switchVariant1
              switchVariant2
              firstNamePlaceholder
              emailPlaceholder
              phonePlaceholder
              messagePlaceholder
              agreementText
              submitText
              firstNameErrorText
              emailErrorText
              messageErrorText
              agreementErrorText
            }
          }
        }
      }
    }
  }
`
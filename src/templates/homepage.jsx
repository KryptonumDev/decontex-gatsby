import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-homepage"
import Newsletter from "../components/parents/newslettter"
import Contact from "../components/parents/contact"
import DecontominationExperts from "../components/parents/decontomination-experts"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"
// import News from "../components/parents/news"
// import Blog from "../components/parents/blog"
// import InteractiveMap from "../components/parents/interactive-map"
import Guarantee from "../components/parents/decontext-guarantee"
import Raport from "../components/parents/decontex-raport"
import DecontominationSubjectsMini from "../components/parents/decontomination-subjects-mini"
import styled from "styled-components"

const LeafletMap = React.lazy(() =>
  import("../components/parents/leaflet-map")
)

const IndexPage = ({ data: { allWpPage, alternates } }) => {
  let { homepage, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])


  const isSSR = typeof window === "undefined"

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} />
      <Hero data={homepage.heroHomepage} />
      <DecontominationExperts data={homepage.decontominationExperts} />
      <Guarantee data={homepage.guaranteeHomepage} />
      <Raport data={homepage.raportSection} />

      {/* <InteractiveMap data={homepage.interactiveMap} /> */}

      {!isSSR && (
        <React.Suspense fallback={<MapPlaceholder />}>
          <LeafletMap />
        </React.Suspense>
      )}

      <DecontominationSubjectsMini data={homepage.partners} />
      <Newsletter data={homepage.newsletter} lang={language.name} />

      {/* <News data={homepage.news} />
      <Blog data={homepage.blog} /> */}

      <Contact data={homepage.contact} lang={language.name} />
    </main>
  )
}

const MapPlaceholder = styled.div`
  height: 1024px;
  max-height: calc(100vh - 103px);
`

export default IndexPage

export const query = graphql`
  query HomePageQuery($id: String!, $templateName: String!){
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
          name
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
        homepage {
          heroHomepage {
            pageTitle
            textUnderTitle
            link{
              title
              url
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
          decontominationExperts{
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
            subSectionTitle
            link{
              title
              url
            }
            subSectionPlates{
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
          guaranteeHomepage{
            sectionTitle
            text
            link{
              title
              url
            }
            backgroundImage{
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          raportSection{
            title
            text
            image{
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
            textUnderImage
            downloadRaportText
            downloadRaportFileButtonText
            raportFile{
              altText
              localFile {
                publicURL
              }
            }
            raportImage{
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          partners{
            title
            partners {
              altText
              localFile {
                childImageSharp {
                    gatsbyImageData (placeholder: BLURRED, quality: 100)
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
            successfulSendTitle
            successfulSendText
            sendAgainButtonText
            errorSendText
            image{
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
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
              successfulSendTitle
              successfulSendText
              sendAgainButtonText
              errorSendText
            }
            background{
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
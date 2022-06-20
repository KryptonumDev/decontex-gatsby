import React from "react"
import { graphql } from "gatsby"
import AboutLCO2 from '../components/parents/about-lco2'
import Hero from '../components/parents/hero-decontomination'
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function Lco2({ data: { allWpPage, alternates }, location  }) {
  let { lco2, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} />
      <Hero data={lco2.heroLco2} position={'60%'} />
      <AboutLCO2 data={lco2.aboutLco2} />
    </main>
  )
}

export const query = graphql`
  query Lco2PageQuery($id: String!, $templateName: String!){
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
          fullHead
        }
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
                        localFile{
                          childImageSharp{
                            gatsbyImageData
                          }
                        }
                    }
                }
            }
        }
      }
    }
  }
`
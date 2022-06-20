import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import { toTop } from './../helpers/scrollToTop'
import Content from "../components/parents/freebies-content"
import Seo from "../components/parents/seo"

export default function Freebies({ data: { allWpPage, alternates } , location }) {
    let { freebies, language, seo } = allWpPage.nodes[0]

    React.useEffect(() => {
        toTop()
    }, [])

    return (
        <main>
            <Seo data={seo} lang={language.slug}  alternates={alternates} location={location}/>
            <Hero data={freebies.heroFreebies} />
            <Content data={freebies.contentFreebies} />
        </main>
    )
}

export const query = graphql`
  query FreebiesPageQuery($id: String!, $templateName: String!){
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
        freebies{
            heroFreebies{
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
            contentFreebies{
                title
                text
                repeater{
                    title
                    text
                    buttonText
                    img{
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    file {
                        publicUrl
                    }
                }
            }
        }
      }
    }
  }
`
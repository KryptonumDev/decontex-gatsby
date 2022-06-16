import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-decontomination"
import { toTop } from './../helpers/scrollToTop'
import Content from "../components/parents/freebies-content"

export default function Freebies({ data: { allWpPage } }) {
    let { freebies } = allWpPage.nodes[0]

    React.useEffect(() => {
      toTop()
    }, [])
    
    return (
        <main>
            <Hero data={freebies.heroFreebies} />
            <Content data={freebies.contentFreebies}/>
        </main>
    )
}

export const query = graphql`
  query FreebiesPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
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
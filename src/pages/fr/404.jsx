import * as React from "react"
import Hero from "../../components/parents/hero-404"
import { graphql } from "gatsby"
import {urls} from './../../constants/url'
import { Helmet } from "react-helmet"

const NotFoundPage = ({ data: { allWpPage } }) => {
  let { errorPage, seo } = allWpPage.nodes[0]
  return (
    <main>
    <Helmet>
      {seo?.title
        ? <title>{seo.title}</title>
        : <title>404</title>}
    </Helmet>
      <Hero data={errorPage} home={urls['Homepage'].es}/>
    </main>
  )
}

export default NotFoundPage

export const query = graphql`
  query ErrorFrPageQuery{
    allWpPage(filter: {id: {eq: "cG9zdDoyMDYy"}}) {
      nodes {
        seo {
          title
        }
        errorPage {
          pageTitle
          text
          goHomeText
          backgroundImage {
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
`
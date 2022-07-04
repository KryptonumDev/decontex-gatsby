import * as React from "react"
import Hero from "../components/parents/hero-404"
import { graphql } from "gatsby"
import {urls} from './../constants/url'

const NotFoundPage = ({ data: { allWpPage } }) => {
  let { errorPage } = allWpPage.nodes[0]
  return (
    <main>
      <Hero data={errorPage} home={urls['Homepage'].en}/>
    </main>
  )
}

export default NotFoundPage

export const query = graphql`
  query ErrorPageQuery{
    allWpPage(filter: {id: {eq: "cG9zdDoxNDc4"}}) {
      nodes {
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
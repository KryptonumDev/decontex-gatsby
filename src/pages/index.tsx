import * as React from "react"
import { PageProps, graphql } from "gatsby"

const IndexPage = ({ data }: PageProps) => {
  return (
    <main>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
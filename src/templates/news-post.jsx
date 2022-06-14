import React from "react"
import { graphql } from "gatsby"

export default function NewsPost({ data: { allWpNews } }) {
    let post = allWpNews.nodes[0]
    return (
        <main>
        </main>
    )
}

export const query = graphql`
  query NewsPostQuery($id: String!){
    allWpNews(filter: {id: {eq: $id}}) {
      nodes {
        id
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"

export default function BlogPost({ data: { allWpPost } }) {
    let post = allWpPost.nodes[0]
    debugger
    return (
        <main>
        </main>
    )
}

export const query = graphql`
  query BlogPostQuery($id: String!){
    allWpPost(filter: {id: {eq: $id}}) {
      nodes {
        id
      }
    }
  }
`
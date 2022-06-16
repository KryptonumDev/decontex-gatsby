import React from "react"
import { graphql } from "gatsby"
import { toTop } from './../helpers/scrollToTop'

export default function BlogPost({ data: { allWpPost } }) {
    let post = allWpPost.nodes[0]

    React.useEffect(() => {
      toTop()
    }, [])
    
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
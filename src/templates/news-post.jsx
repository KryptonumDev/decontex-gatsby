import React from "react"
import { graphql } from "gatsby"
import { toTop } from './../helpers/scrollToTop'

export default function NewsPost({ data: { allWpNews } }) {
    let post = allWpNews.nodes[0]

    React.useEffect(() => {
      toTop()
    }, [])
    
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
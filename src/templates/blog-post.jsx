import React from "react"
import { graphql } from "gatsby"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function BlogPost({ data: { allWpPost } }) {
  let { language, seo } = allWpPost.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} />
    </main>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String!){
    allWpPost(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
        }
        seo {
          title
          fullHead
        }
        id
      }
    }
  }
`
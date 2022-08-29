import React from "react"
import { graphql } from "gatsby"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function NewsPost({ data: { allWpNews } }) {
  let {language, seo} = allWpNews.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      {/* <Seo data={seo} lang={language.slug} /> */}
    </main>
  )
}

export const query = graphql`
  query NewsPostQuery($id: String!){
    allWpNews(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
        }
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphImage {
            localFile {
              publicURL
            }
          }
        }
        id
      }
    }
  }
`
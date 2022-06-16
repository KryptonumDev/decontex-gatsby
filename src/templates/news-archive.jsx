import React from "react"
import { graphql } from "gatsby"
import Content from "../components/parents/blog-archive-content"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function NewsArchive({ data: { allWpPage, allWpNews } }) {
  let { blogArchive, language, seo } = allWpPage.nodes[0]
  let posts = allWpNews.nodes

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} />
      <Content data={blogArchive} posts={posts} />
    </main>
  )
}

export const query = graphql`
  query NewsArchivePageQuery($id: String!, $slug: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
        }
        seo {
          title
          fullHead
        }
        blogArchive {
            title
            text
            buttonText
        }
      }
    }
    allWpNews(filter: {language: {slug: {eq: $slug}}}) {
          nodes {
            id
            language {
              slug
            }
            categories {
              nodes {
                slug
                name
              }
            }
          }
        }
  }
`
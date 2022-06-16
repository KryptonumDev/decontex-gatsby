import React from "react"
import { graphql } from "gatsby"
import Content from "../components/parents/blog-archive-content"
import { toTop } from './../helpers/scrollToTop'

export default function Archive({ data: { allWpPage, allWpPost } }) {
    let { blogArchive, language } = allWpPage.nodes[0]
    let posts = allWpPost.nodes

    React.useEffect(() => {
      toTop()
    }, [])
    
    return (
        <main>
            <Content data={blogArchive} posts={posts} />
        </main>
    )
}

export const query = graphql`
  query BlogArchivePageQuery($id: String!, $slug: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        blogArchive {
            title
            text
            buttonText
        }
        language {
            slug
        }
      }
    }
    allWpPost(filter: {language: {slug: {eq: $slug}}}) {
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
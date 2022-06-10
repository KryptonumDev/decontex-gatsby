import React from "react"
import { graphql } from "gatsby"
import Content from "../components/parents/blog-archive-content"

export default function NewsArchive({ data: { allWpPage, allWpNews } }) {
    let { blogArchive, language } = allWpPage.nodes[0]
    let posts = allWpNews.nodes
    return (
        <main>
            <Content data={blogArchive} posts={posts} />
        </main>
    )
}

export const query = graphql`
  query NewsArchivePageQuery($id: String!, $slug: String!){
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
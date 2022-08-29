import React from "react"
import { graphql } from "gatsby"
import Content from "../components/parents/blog-archive-content"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"

export default function NewsArchive({ data: { allWpPage, allWpNews, alternates } }) {
  let { blogArchive, language, seo } = allWpPage.nodes[0]
  let posts = allWpNews.nodes

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} />
      <Content data={blogArchive} posts={posts} />
    </main>
  )
}

export const query = graphql`
  query NewsArchivePageQuery($id: String!, $slug: String!, $templateName: String!){
    alternates : allWpPage(filter: {template: {templateName: {eq: $templateName}}}) {
      nodes {
        language {
          slug
          name
        }
        template {
          templateName
        }
      }
    }
    allWpPage(filter: {id: {eq: $id}}) {
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
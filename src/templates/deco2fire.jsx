import React from "react"
import { graphql } from "gatsby"

export default function Deco2fire({ data: { allWpPage } }) {
    let { deco2fire } = allWpPage.nodes[0]
    return (
        <main>
        </main>
    )
}

export const query = graphql`
  query Deco2FirePageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        deco2fire{
            decontominationSteps{
                title
            }
        }
      }
    }
  }
`
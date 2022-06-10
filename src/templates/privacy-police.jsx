import React from "react"
import { graphql } from "gatsby"
import PrivacyContent from "../components/parents/privacy-content"

export default function PrivacyPolice({ data: { allWpPage } }) {
    let { privacyPolice } = allWpPage.nodes[0]
    return (
        <main>
            <PrivacyContent data={privacyPolice} />
        </main>
    )
}

export const query = graphql`
  query PrivacyPolicePageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        privacyPolice{
            title
            columns{
                leftColumn
                rightColumn
            }
        }
      }
    }
  }
`
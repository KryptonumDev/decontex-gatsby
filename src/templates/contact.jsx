import React from "react"
import { graphql } from "gatsby"
import ContactForm from "../components/parents/contact"
import { toTop } from './../helpers/scrollToTop'

export default function Contact({ data: { allWpPage } }) {
    let { contact } = allWpPage.nodes[0]

    React.useEffect(() => {
      toTop()
    }, [])
    
    return (
        <main>
            <ContactForm data={contact} contactPage={true}/>
        </main>
    )
}

export const query = graphql`
  query ContactPageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        contact{
            title
            text
            form {
              switchTitle
              switchVariant1
              switchVariant2
              firstNamePlaceholder
              emailPlaceholder
              phonePlaceholder
              messagePlaceholder
              agreementText
              submitText
              firstNameErrorText
              emailErrorText
              messageErrorText
              agreementErrorText
            }
        }
      }
    }
  }
`
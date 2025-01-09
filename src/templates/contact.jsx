import React from "react"
import { graphql } from "gatsby"
import ContactForm from "../components/parents/contact"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"
import Headquarters from "../components/parents/headquarters"
// import JobOffer from "../components/parents/job-offer"

export default function Contact({ data: { allWpPage, alternates } }) {
  let { contact, language, seo } = allWpPage.nodes[0]

  React.useEffect(() => {
    toTop()
  }, [])

  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} />
      <ContactForm data={contact} contactPage={true} lang={language.slug} />
      <Headquarters headquarters={contact.headquarters} />
      {/* {jobOffer.jobTitle
        ? <JobOffer data={jobOffer} />
        : null} */}
    </main>
  )
}

export const query = graphql`
  query ContactPageQuery($id: String!, $templateName: String!){
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
          name
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
              successfulSendTitle
              successfulSendText
              sendAgainButtonText
              errorSendText
            }
            background{
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            headquarters{
              countryFlag{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              name
              phone{
                text
              }
              email
              address
            }
        }
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"
import Contact from "../components/parents/contact"
import Hero from "../components/parents/hero-decontomination"
import Grid from "../components/parents/applications-grid"

export default function Applications({ data: { allWpPage, alternates } }) {
    let { applications, language, seo } = allWpPage.nodes[0]

    React.useEffect(() => {
        toTop()
    }, [])

    return (
        <main>
            <Seo data={seo} lang={language.slug} alternates={alternates} />
            <Hero data={applications.heroApplications} position={'60%'} parent={'top: 20%;'} />
            <Grid data={applications.cardsGridApplications}/>
            <Contact data={applications.contactApplications} lang={language.name} />
        </main>
    )
}

export const query = graphql`
query ApplicationsPageQuery($id: String!, $templateName: String!){
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
                applications {
                    heroApplications {
                        title
                        subTitle
                        background {
                            altText
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                    cardsGridApplications{
                        title
                        text
                        grid{
                            image{
                                altText
                                localFile{
                                    childImageSharp{
                                        gatsbyImageData
                                    }
                                }
                            }
                        }
                    }
                    contactApplications {
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
                    }
                }
            }
        }
    }
`
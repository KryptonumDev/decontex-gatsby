import React from "react"
import { graphql } from "gatsby"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"
import Hero from "../components/parents/hero-decontomination"

export default function Guarantee({ data: { allWpPage, alternates } }) {
    let { guarantee, language, seo } = allWpPage.nodes[0]

    React.useEffect(() => {
        toTop()
    }, [])

    return (
        <main>
            <Seo data={seo} lang={language.slug} alternates={alternates} />
            <Hero data={guarantee.heroGuarantee} position={'70%'} parent={'top: 20%;'} />
        </main>
    )
}

export const query = graphql`
query GuaranteePageQuery($id: String!, $templateName: String!){
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
                guarantee {
                    heroGuarantee {
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
                }
            }
        }
    }
`
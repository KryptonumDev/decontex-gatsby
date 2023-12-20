import React from "react"
import { graphql } from "gatsby"
import { toTop } from './../helpers/scrollToTop'
import Seo from "../components/parents/seo"
import Hero from "../components/parents/hero-decontomination"
import Charts from "../components/parents/charts"
import Cta from "../components/parents/cta-guarantee"
import Technologies from "../components/parents/technologies"
import Raport from "../components/parents/decontex-raport"

export default function Guarantee({ data: { allWpPage, alternates } }) {
    let { guarantee, language, seo } = allWpPage.nodes[0]

    React.useEffect(() => {
        toTop()
    }, [])

    return (
        <main>
            <Seo data={seo} lang={language.slug} alternates={alternates} />
            <Hero data={guarantee.heroGuarantee} position={'70%'} parent={'top: 20%;'} />
            <Charts data={guarantee.chartsSection}/>
            <Raport data={guarantee.downloadOurRaport}/>
            <Technologies data={guarantee.technologies}/>
            <Cta data={guarantee.callToActionGuarantee}/>
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
                    downloadOurRaport{
                        downloadRaportText
                        downloadRaportFileButtonText
                        raportFile{
                          altText
                          localFile {
                            publicURL
                          }
                        }
                        raportImage{
                          altText
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                        }
                    }       
                    technologies {
                        title
                        repeater {
                            text:title
                            img{
                                altText
                                localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                                }
                            }
                        }
                    }
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
                    chartsSection{
                        title
                        text
                        charts{
                            chartTitle
                            chart{
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                            }
                            chartText
                        }
                        leftTextUnderCharts
                        rightTextUnderCharts
                    }
                    callToActionGuarantee{
                        image{
                            altText
                            localFile{
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        sectionTitle
                        link{
                            title
                            url
                        }
                    }
                }
            }
        }
    }
`
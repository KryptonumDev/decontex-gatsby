import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {

    const data = useStaticQuery(graphql`
        query{
            datoCmsFooter {
                contact {
                title {
                    value
                }
                otherInformation {
                    value
                }
                formTitle
                switchVariant1
                switchVariant2
                }
                footer {
                    otherInformation{
                        value
                    }
                    copyright {
                        value
                    }
                    socialLinks {
                        link
                        ariaLabel
                        icon {
                        alt
                        url
                        }
                    }
                    smallLinks {
                        slug
                        name
                    }
                    mainLinks {
                        slug
                        name
                    }
                    logo {
                        alt
                        url
                        gatsbyImageData
                    }
                }
            }
        }
    `)

    return (
        <>
            <Header />
            {children}
            <Footer data={data.datoCmsFooter} />
        </>
    )
}
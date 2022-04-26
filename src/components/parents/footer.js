import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import Contact from "./contact-footer"
import { graphql, useStaticQuery } from "gatsby"
import { activeLanguage } from "../../helpers/activeLanguage"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Footer({ location }) {

    const data = useStaticQuery(graphql`
        query{
            allWpPage(filter: {template: {templateName: {eq: "Footer"}}}) {
              nodes {
                footer {
                    contact {
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
                      }
                    }
                    footer {
                      contactInformation
                      copyright
                      mainLinks {
                        linkName
                        url {
                          url
                        }
                      }
                      smallLinks {
                        linkName
                        url {
                          url
                        }
                      }
                      socialLinks {
                        link
                        ariaLabel
                        icon {
                          altText
                          sourceUrl
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                        }
                      }
                      logo {
                        altText
                        sourceUrl
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                }
                language {
                  slug
                }
              }
            }
        }
    `)

    const locale = activeLanguage(location)
    const localeDate = data.allWpPage.nodes.filter(el => el.language.slug === locale)
    const { contact, footer: { contactInformation, copyright, mainLinks, smallLinks, socialLinks, logo } } = localeDate[0].footer
        debugger
    return (
        <Wrapper>
            <Contact data={contact} />
            <MainContent>
                <Container>
                    <FirstFlex>
                        <div>
                            {logo.localFile.childImageSharp?.gatsbyImageData
                                ? <GatsbyImage image={logo.localFile.childImageSharp.gatsbyImageData} alt={logo.altText} />
                                : <img src={logo.sourceUrl} alt={logo.altText} />
                            }
                            <div dangerouslySetInnerHTML={{ __html: contactInformation }} />
                        </div>
                        <ul className="grid">
                            {mainLinks.map((el, index) => (
                                <li key={el.linkName}>
                                    <Link to={el.url.url}>{el.linkName}</Link>
                                </li>
                            ))}
                        </ul>
                    </FirstFlex>
                    <SecondFlex socLength={socialLinks.length}>
                        <ul className="social">
                            {socialLinks.map((el) => (
                                <li key={el.ariaLabel}>
                                    <Link aria-label={el.ariaLabel} to={el.link}>
                                        {el.icon.localFile.childImageSharp?.gatsbyImageData
                                            ? <GatsbyImage image={el.icon.localFile.childImageSharp.gatsbyImageData} alt={el.icon.altText} />
                                            : <img src={el.icon.sourceUrl} alt={el.icon.altText} />
                                        }
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="small">
                            {smallLinks.map((el, index) => (
                                <li key={el.linkName}>
                                    <Link to={el.url.url}>{el.linkName}</Link>
                                </li>
                            ))}
                        </ul>
                    </SecondFlex>
                    <ThirdFlex>
                        <div className="copyright" dangerouslySetInnerHTML={{ __html: copyright }} />
                    </ThirdFlex>
                </Container>
            </MainContent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: clamp(100px, 8.33vw, 160px);
`


const MainContent = styled.div`
    background-color: var(--color-blue);
    padding-top: clamp(80px, 8.33vw, 120px);
    padding-bottom: clamp(30px, 8.33vw, 60px);
`

const FirstFlex = styled.div`
    display: flex;
    justify-content: space-between;

    img{
        margin-bottom: 48px;
    }

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.005em;
        color: var(--color-white);
    }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px 40px;
        li{
            a{
                font-weight: 700;
                font-size: 32px;
                line-height: 42px;
                color: var(--color-white);

            }
        }
    }


`

const SecondFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 110px;

    .social{
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(${props => props.socLength}, auto);
        width: fit-content;

        li{
            width: fit-content;
        }
    }

    .small{
        display: flex;
        li{
            margin-left: 30px;
        }

        a{
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.005em;
            color: var(--color-white);
        }
    }
`

const ThirdFlex = styled.div`
    margin-top: 80px;

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.005em;
        color: var(--color-white);

    }
`
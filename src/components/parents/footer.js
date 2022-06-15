import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { graphql, useStaticQuery } from "gatsby"
import { activeLanguage } from "../../helpers/activeLanguage"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Footer({ location }) {

    const data = useStaticQuery(graphql`
        query{
            allWpPage(filter: {template: {templateName: {eq: "Footer"}}}) {
              nodes {
                footer {
                    footer {
                      contactInformation
                      copyright
                      mainLinks {
                        row{
                            linkName
                            url 
                        }
                      }
                      smallLinks {
                        linkName
                        url 
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
                      copyrightLogo {
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
    const localeData = data.allWpPage.nodes.filter(el => el.language.slug === locale)
    const { footer: { contactInformation, copyright, mainLinks, smallLinks, socialLinks, logo, copyrightLogo } } = localeData[0].footer


    return (
        <Wrapper>
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
                        {mainLinks.map((el, index) => (
                            <ul>
                                {el.row.map(innerEl => (
                                    <li key={innerEl.linkName}>
                                        <Link to={innerEl.url}>{innerEl.linkName}</Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
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
                                    <Link to={el.url}>{el.linkName}</Link>
                                </li>
                            ))}
                        </ul>
                    </SecondFlex>
                    <ThirdFlex>
                        <div className="copyright" dangerouslySetInnerHTML={{ __html: copyright }} />
                        {copyrightLogo.localFile.childImageSharp?.gatsbyImageData
                            ? <GatsbyImage image={copyrightLogo.localFile.childImageSharp.gatsbyImageData} alt={copyrightLogo.altText} />
                            : <img src={copyrightLogo.sourceUrl} alt={copyrightLogo.altText} />
                        }
                    </ThirdFlex>
                </Container>
            </MainContent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`


const MainContent = styled.div`
    background-color: var(--color-blue);
    padding-top: clamp(80px, 8.33vw, 120px);
    padding-bottom: clamp(30px, 8.33vw, 60px);
`

const FirstFlex = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;

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
        li{
            a{
                font-weight: 700;
                font-size: clamp(21px, ${32 / 768 * 100}vw, 32px);
                line-height: 130%;
                color: var(--color-white);
                text-transform: unset;
            }
        }

        li+li{
            margin-top: 30px;
        }
    }

    @media (max-width: 1240px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 80px;
    }

    @media (max-width: 640px){
        grid-template-columns: 1fr;
        grid-gap: 40px;

        ul{
            li{
                a{
                    font-weight: 500;
                }
            }
        }

        li+li{
            margin-top: 40px;
        }

        h1,h2,h3,h4,h5,h6,p{
            margin-bottom: 20px;
        }
    }
`

const SecondFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: clamp(50px, ${50 / 768 * 100}vw, 110px);

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
        flex-wrap: wrap;
        li{
            margin-left: 30px;
        }

        a{
            font-weight: 400;
            font-size: clamp(14px, ${20 / 768 * 100}vw, 20px);
            line-height: 130%;
            letter-spacing: 0.005em;
            color: var(--color-white);
        }
    }

    @media (max-width: 1240px) {
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: flex-start;

        .small{
            margin-bottom: 56px;
            li{
                margin-right: 30px;
                margin-left: 0;
            }
        }
    }

    @media (max-width: 640px){
        .small{
            flex-direction: column;
            li{
                margin-right: 0;
            }

            li + li {
                margin-top: 30px;
            }
        }
    }
`

const ThirdFlex = styled.div`
    margin-top: clamp(50px, ${50 / 768 * 100}vw, 80px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.005em;
        color: var(--color-white);
    }

    @media (max-width: 640px){
        flex-direction: column-reverse;
        align-items: flex-start;

        h1,h2,h3,h4,h5,h6,p{
            margin-top: 16px;
        }
    }
`
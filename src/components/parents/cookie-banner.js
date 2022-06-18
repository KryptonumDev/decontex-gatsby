import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { activeLanguage } from "../../helpers/activeLanguage"
import { GatsbyImage } from "gatsby-plugin-image"
import { ButtonOutlined, ButtonBlack } from "../../styles/style"

export default function Coockie({ location }) {

    const data = useStaticQuery(graphql`
        query{
            allWpPage(filter: {template: {templateName: {eq: "Cookie Banner"}}}) {
                nodes {
                    language {
                        slug
                        name
                    }
                    cookieBanner {
                        title
                        text
                        reject
                        accept
                        icon{
                            altText
                            localFile{
                                childImageSharp{
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const locale = activeLanguage(location)
    const localeData = data.allWpPage.nodes.filter(el => el.language.slug === locale)
    const { title, text, icon, reject, accept } = localeData[0].cookieBanner


    const [isActive, changeIsActive] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('cookiesAgree')) {
            changeIsActive(true)
        }
    }, [])

    const rejectCookie = () => {
        changeIsActive(false)
    }

    const acceptCookie = () => {
        localStorage.setItem('cookiesAgree', 'true')
        changeIsActive(false)
    }

    return (
        <Wrapper isActive={isActive}>
            <Content>
                <div className="flex">
                    <GatsbyImage className="image" image={icon.localFile.childImageSharp.gatsbyImageData} />
                    <div>
                        <p className="title">{title}</p>
                        <p className="text">{text}</p>
                    </div>
                </div>
                <div className="grid">
                    <ButtonOutlined onClick={rejectCookie} as='button'>{reject}</ButtonOutlined>
                    <ButtonBlack className="button" onClick={acceptCookie} as='button'>{accept}</ButtonBlack>
                </div>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translateY(${props => props.isActive ? '0' : '100%'});
    box-sizing: border-box;
    padding: clamp(28px, ${38 / 768 * 100}vw, 48px) clamp(28px, ${42 / 768 * 100}vw, 56px);
    background-color: #177BC3;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    grid-gap: clamp(24px, ${24 / 768 * 100}vw, 64px);
    width: fit-content;
    margin: 0 auto;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }

    .flex{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 24px;
        align-items: start;

        @media (max-width: 550px) {
            grid-template-columns: 1fr;
            grid-gap: 16px;
        }
    }

    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: clamp(24px, ${24 / 768 * 100}vw, 40px);
        width: fit-content;
        height: fit-content;

        @media (max-width: 1280px) {
            grid-template-columns: 1fr;
        }

        .button{
            background-color: var(--color-white);
            color: var(--color-blue) !important;
            border: none;

            &:hover{
                background-color: #DAD9DD !important;
            }
        }
    }

    .title{
        margin-bottom: 8px;
        font-weight: 700;
        font-size: clamp(17px, ${24 / 768 * 100}vw, 32px);
        line-height: 130%;
        color: var(--color-white);
        max-width: 520px;
    }

    .text{
        font-weight: 400;
        font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
        line-height: 140%;
        letter-spacing: 0.005em;
        color: var(--color-white);
        max-width: 520px;
    }

    button{
        border-color: var(--color-white) !important;
        color: var(--color-white) !important;
    }

    .image{
        max-width: clamp(40px, ${40 / 768 * 100}vw, 120px);
    }

`
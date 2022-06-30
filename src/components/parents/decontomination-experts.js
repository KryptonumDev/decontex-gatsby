import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonBlue, ButtonOutlined, Container } from "../../styles/style"
import Mark from './../../resources/list-mark.svg'

export default function DecontominationExperts({ data: { title, list, image, textAboveButtons, buttons } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <Flex mark={Mark}>
                    <div dangerouslySetInnerHTML={{ __html: list }} />
                    <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                </Flex>
                <div className="sub" dangerouslySetInnerHTML={{ __html: textAboveButtons }} />
                <Buttons>
                    {buttons.map((el, index) => {
                        if (index === 0) {
                            return <ButtonBlue key={el.url} to={el.url}>{el.text}</ButtonBlue>
                        }
                        return <ButtonOutlined key={el.url} className='black' to={el.url}>{el.text}</ButtonOutlined>
                    })}
                </Buttons>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        h1,h2,h3,h4,h5,h6,p{
            margin-bottom: clamp(24px, ${48 / 768 * 100}vw, 80px);
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 64px);
            line-height: 112%;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;

            @media (max-width: 480px) {
                text-align: left;
            }
        }
    }

    .sub{
        h1,h2,h3,h4,h5,h6,p{
            margin-top: clamp(24px, ${48 / 768 * 100}vw, 80px);
            margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 40px);
            font-weight: 700;
            font-size: clamp(17px, ${32 / 768 * 100}vw, 40px);
            line-height: 120%;
            text-align: center;
        }
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    gap: clamp(40px, ${40 / 768 * 100}vw, 64px);

    ul{
        display: grid;
        grid-gap: 48px;
        max-width: 750px;
        min-width: 425px;
        li{
            font-weight: 500;
            font-size: clamp(14px, ${18 / 768 * 100}vw, 28px);
            line-height: 120%;
            padding-left: 50px;
            position: relative;
            &::before{
                content: url(${props => props.mark});
                position: absolute;
                left: 0;
                top: 0;

                @media (max-width: 1100px) {
                    top: -2px;
                }

                @media (max-width: 1024px) {
                    top: -5px;
                }

                @media (max-width: 720px) {
                    top: -8px !important;
                }

                @media (max-width: 580px) {
                    top: -10px !important;
                }
            }
        }
    }

    .image{
        width: 100%;
        max-width: 600px;
        height: fit-content;
    }

    @media (max-width: 1024px) {
        flex-direction: column-reverse;

        ul{
            margin: 0 auto;
            min-width: unset;
        }

        .image{
            max-width: 750px;
            margin: 0 auto;
            max-height: 368px;
        }
    }

    @media (max-width: 640px) {
        ul{
            li{
                padding-left: 38px;

                &::before{
                    transform: scale(.8);
                    top: -6px;
                    left: -6px;
                }
            }
        }
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;

    .black{
        border-color: black;
        color: black;
    }

    a{
        margin: 0 !important;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 24px;
    }
`
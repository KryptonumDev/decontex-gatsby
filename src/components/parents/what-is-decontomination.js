import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function WhatIsDecontomination({ data: { title, image, benefitsTitle, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                    <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <div className="sub" dangerouslySetInnerHTML={{ __html: benefitsTitle }}></div>
                </Content>
                <Repeater>
                    {repeater.map(el => (
                        <div className="item">
                            <GatsbyImage className="image" image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                            <p>{el.title}</p>
                        </div>
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);
`

const Content = styled.div`

    .title{
        text-align: center;
        margin: 0 auto clamp(24px, ${36 / 768 * 100}vw, 64px) auto;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 1140 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }

    .sub{
        text-align: center;
        margin: clamp(40px, ${60 / 768 * 100}vw, 60px) auto;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 40px;
            line-height: 120%;
        }

    }
`

const Repeater = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: clamp(16px, ${32 / 768 * 100}vw, 32px);
    .item{
        background-color: var(--color-blue);
        padding: clamp(24px, ${40 / 768 * 100}vw, 56px) 16px;
        text-align: center;

        .image{
            width: fit-content;
            height: fit-content;
            max-width: clamp(44px, ${65 / 768 * 100}vw, 86px);
        }
        p{
            margin-top: 32px;
            font-weight: 500;
            font-size: clamp(13px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
            color: var(--color-white);
        }
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 420px) {
        grid-template-columns: 1fr;

        .item{
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 16px;
            align-items: center;

            p{
                margin: 0;
                text-align: left;
            }
        }
    }
`
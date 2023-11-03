import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function WhatIsDecontomination({ data: { title, image } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                    <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                </Content>
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
            font-size: clamp(27px, ${40 / 1140 * 100}vw, 52px);
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
            font-size: clamp(13px, ${28 / 768 * 100}vw, 40px);
            line-height: 120%;
        }

    }
`
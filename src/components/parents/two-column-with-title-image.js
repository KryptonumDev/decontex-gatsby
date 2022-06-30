import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function TwoColumnWithTitleAndImage({ data: { title, subTitle, text, img } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="subTitle" dangerouslySetInnerHTML={{ __html: subTitle }} />
                <Content>
                    <GatsbyImage className="image" image={img.localFile.childImageSharp.gatsbyImageData} />
                    <div dangerouslySetInnerHTML={{ __html: text }} /> 
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        margin-bottom: clamp(8px, ${32 / 768 * 100}vw, 64px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(21px, ${48 / 768 * 100}vw, 56px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }    

    .subTitle{
        margin-bottom: clamp(16px, ${56 / 768 * 100}vw, 96px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(16px, ${40 / 768 * 100}vw, 28px);
            line-height: 130%;
        }
    }

`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    .image{
        max-width: 620px;
        width: 100%;
        height: fit-content;
        min-width: 280px;
    }

    h1,h2,h3,h4,h5,h6,p{
        margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 32px);
        font-weight: 500;
        font-size: clamp(14px, ${17 / 768 * 100}vw, 32px);
        line-height: 130%;

        &:last-child{
            font-weight: 700;
            font-size: clamp(17px, ${17 / 768 * 100}vw, 32px);
        }
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`
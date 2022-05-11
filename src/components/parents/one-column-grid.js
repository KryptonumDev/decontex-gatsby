import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function OneColumnGrid({ data: { img, title, text } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                    <div className="subTitle" dangerouslySetInnerHTML={{ __html: text }} />
                    <Image image={img.localFile.childImageSharp.gatsbyImageData} alt={img.altText} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: var(--section-margin);
`

const Content = styled.div`
    .title{
        max-width: 800px;
        margin: 0 auto clamp(16px, ${48 / 768 * 100}vw, 64px) auto;

        h1,h2,h3,h4,h5,h6,p{
            max-width: 770px;
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            text-align: center;
        }
    }

    .subTitle{
        max-width: 1200px;
        margin: 0 auto;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${40 / 768 * 100}vw, 40px);
            line-height: 130%;
            text-align: center;
        }
    }
`

const Image = styled(GatsbyImage)`
    margin: clamp(50px, ${60 / 768 * 100}vw, 160px) auto 0 auto;
    display: block;
    width: fit-content;
`
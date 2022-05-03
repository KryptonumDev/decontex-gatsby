import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function TwoColumnGrid({ data: { title, text, backgroundImage } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div>
                        <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                        <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                    <div>
                        <Image image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Image = styled(GatsbyImage)`
    min-width: 700px;

    @media (max-width: 1320px) {
        margin: 0 auto;
        display: block;
        width: fit-content;
        min-width: unset;
    }
`

const Wrapper = styled.div`
    margin-top: clamp(60px, ${120 / 768 * 100}vw, 160px);
    overflow: hidden;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    .title{
        h1,h2,h3,h4,h5,h6,p{
            margin-bottom: 40px;
            font-weight: 900;
            font-size: clamp(27px, ${48 / 1140 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }

    .text{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
            color: #111315;
        }
    }

    p+p{
        margin-top: 24px;
    }

    @media (max-width: 1320px) {
        grid-template-columns: 1fr;
        max-width: 1070px;
        margin: 0 auto;

        .title{
            h1,h2,h3,h4,h5,h6,p{
                font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            }
        }
    }
`
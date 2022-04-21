import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function TwoColumnGrid({ data: { title, subTitle, backgroundImage } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div>
                        <StructuredText data={title} />
                        <div>
                            <StructuredText data={subTitle} />
                        </div>
                    </div>
                    <div>
                        <GatsbyImage image={backgroundImage.gatsbyImageData} alt={backgroundImage.alt}/>
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    h1,h2,h3,h4,h5,h6{
        margin-bottom: 40px;
        font-weight: 900;
        font-size: 72px;
        line-height: 82px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
    }

    p{
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;
        color: #111315;
    }

`
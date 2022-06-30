import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function Partners({ data: { title, partners } }) {
    return (
        <Wrapper>
            <Container>
                <Title dangerouslySetInnerHTML={{ __html: title }} />
                <Image image={partners.localFile.childImageSharp.gatsbyImageData} alt={partners.altText} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);
`

const Title = styled.div`
    margin-bottom: clamp(32px, ${48 / 768 * 100}vw, 64px);
    h1,h2,h3,h4,h5,h6,p{
        font-weight: 900;
        font-size: clamp(16px, ${44 / 768 * 100}vw, 64px);
        line-height: 112%;
        letter-spacing: -0.015em;
        text-transform: uppercase;
    }
`

const Image = styled(GatsbyImage)`
    width: 100%;
    height: fit-content;
`
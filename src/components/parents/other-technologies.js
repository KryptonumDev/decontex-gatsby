import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import CleanerSaferHealthier from "./cleaner-safer-healthier"

export default function OtherTechnologies({ data: { link, image, cleanerSaferHealthier } }) {
    return (
        <Wrapper>
            <Container>
                <CleanerSaferHealthier data={cleanerSaferHealthier} />
                <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: var(--section-margin) 0;
`

const Image = styled(GatsbyImage)`
    display: block;
    max-width: fit-content;
    width: 100%;
    height: fit-content;
    margin: 30px auto 0 auto;
`
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function OtherTechnologies({ data: { link, image } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {link.map(el => (
                        <Item to={el.link} ariaLabel={el.ariaLabel}>
                            <GatsbyImage image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText} />
                        </Item>
                    ))}
                </Grid>
                <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: var(--section-margin) 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: fit-content;
    margin: 0 auto;
    grid-gap: clamp(20px, ${40 / 768 * 100}vw, 60px);
`

const Item = styled(Link)`
    
`

const Image = styled(GatsbyImage)`
    display: block;
    max-width: fit-content;
    width: 100%;
    height: fit-content;
    margin: 30px auto 0 auto;
`
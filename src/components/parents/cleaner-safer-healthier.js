import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonOutlined, Container } from "../../styles/style"

export default function CleanerSaferHealthier({ data: { title, text, items, contactText, link } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
                <Grid>
                    {items.map(el => (
                        <Item>
                            <GatsbyImage className="image" image={el.itemImage.localFile.childImageSharp.gatsbyImageData} alt={el.itemImage.altText} />
                            <h3>{el.itemName}</h3>
                        </Item>
                    ))}
                </Grid>
                <Contact>
                    <div dangerouslySetInnerHTML={{ __html: contactText }} />
                    <ButtonOutlined to={link.url}>{link.text}</ButtonOutlined>
                </Contact>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        margin-bottom: clamp(32px, ${60 / 768 * 100}vw, 80px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 64px);
            line-height: 112%;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }

    .text{
        max-width: 1080px;
        margin: 0 auto;
        margin-bottom: clamp(36px, ${46 / 768 * 100}vw, 56px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(17px, ${32 / 768 * 100}vw, 48px);
            line-height: 120%;
            text-align: center;
        }

    }
`

const Grid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: clamp(24px, ${24 / 768 * 100}vw, 64px);
`

const Item = styled.div`
    width: calc(33% - 64px);

    h3{
        margin-top: 10px;
        font-weight: 700;
        line-height: 125%;
        letter-spacing: 0.005em;
        font-size: clamp(17px, ${17 / 768 * 100}vw, 20px);
    }

    .image{
        width: 100%;
        height: fit-content;
    }

    @media (max-width: 1024px) {
        width: calc(50% - clamp(12px, ${12 / 768 * 100}vw, 32px));
    }

    @media (max-width: 520px) {
        width: 100%;
    }

`

const Contact = styled.div`
    max-width: 710px;
    margin: 0 auto;
    margin-top: clamp(40px, ${40 / 768 * 100}vw, 80px);

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 700;
        font-size: clamp(17px, ${25 / 768 * 100}vw, 32px);
        line-height: 125%;
        text-align: center;
    }

    a{
        margin: 0 auto;
        margin-top: clamp(16px, ${24 / 768 * 100}vw, 32px);
        border-color: black;
        color: black;
    }
`
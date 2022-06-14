import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function DecontomiantionBenefits({ data: { benefit } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {benefit.map(el => (
                        <Item>
                            <GatsbyImage className="image" image={el.icon.localFile.childImageSharp.gatsbyImageData} alt={el.icon.altText} />
                            <p className="title">{el.title}</p>
                            <p className="text">{el.text}</p>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: clamp(48px, ${66 / 768 * 100}vw, 144px) 0 clamp(45px, ${45 / 768 * 100}vw, 90px) 0;
    background-color: var(--color-black);
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--section-margin);
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`

const Item = styled.div`
    width: calc(25% - 30px);

    .title{
        text-align: center;
        color: var(--color-white);
        margin-bottom: 12px;
        margin-top: clamp(10px, ${20 / 768 * 100}vw, 40px);
        font-weight: 700;
        font-size: clamp(17px, ${24 / 1024 * 100}vw, 32px);
        line-height: 130%;
    }

    .text{
        text-align: center;
        color: var(--color-white);
        font-weight: 400;
        font-size: clamp(14px, ${17 / 1024 * 100}vw, 20px);
        line-height: 140%;
        text-align: center;
        letter-spacing: 0.005em;
    }

    .image{
        width: fit-content;
        height: fit-content;
        margin: 0 auto;
        display: block;

        @media (max-width: 640px) {
            transform: scale(.8);
        }
    }

    @media (max-width: 860px) {
        width: calc(33% - ${80 / 3}px);
    }

    @media (max-width: 640px) {
        width: calc(50% - 20px);
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 300px;
    }
`
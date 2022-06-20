import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function DecontominationBenefits({ data: { sectionTitle, text, textBenefits, benefits } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{__html: sectionTitle}}/>
                <div className="text" dangerouslySetInnerHTML={{__html: text}}/>
                <Grid>
                    {benefits.map(el => (
                        <Item>
                            <GatsbyImage className="image" image={el.benefitIcon.localFile.childImageSharp.gatsbyImageData} alt={el.benefitIcon.altText}/>
                            <h3>{el.benefitText}</h3>
                        </Item>
                    ))}
                </Grid>
                <div className="sub" dangerouslySetInnerHTML={{__html: textBenefits}}/>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        margin-bottom: clamp(8px, ${44 / 768 * 100}vw, 80px);

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
        max-width: 930px;
        margin: 0 auto clamp(24px, ${44 / 768 * 100}vw, 64px) auto;   

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(17px, ${24 / 768 * 100}vw, 32px);
            line-height: 125%;
            text-align: center;
        }
    }

    .sub{
        max-width: 1120px;
        margin: 0 auto;
        margin-top: clamp(24px, ${52 / 768 * 100}vw, 80px);

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(13px, ${27 / 768 * 100}vw, 40px);
            line-height: 120%;
            text-align: center;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: clamp(16px, ${32 / 768 * 100}vw, 40px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    width: 100%;
    padding: 90px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    background-color: var(--color-blue);

    h3{
        font-weight: 700;
        font-size: clamp(13px, ${24 / 768 * 100}vw, 32px);
        line-height: 125%;
        text-align: center;
        color: var(--color-white);
    }

    .image{
        max-width: clamp(44px, ${66 / 768 * 100}vw, 88px);
    }

    @media (max-width: 768px) {
        padding: clamp(24px, ${48 / 768 * 100}vw, 90px) clamp(20px, ${25 / 768 * 100}vw, 30px);
        flex-direction: row;
        gap: clamp(8px, ${24 / 768 * 100}vw, 32px);

        h3{
            text-align: left;
        }
    }
`
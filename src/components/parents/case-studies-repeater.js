import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function CaseStudiesRepeater({ data }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {data.map(el => (
                        <Item key={el.caseTitle}>
                            <GatsbyImage className="image" image={el.caseImage.localFile.childImageSharp.gatsbyImageData} alt={el.caseImage.altText} />
                            <div>
                                <div className="title" dangerouslySetInnerHTML={{ __html: el.caseTitle }} />
                                <div className="sub" dangerouslySetInnerHTML={{ __html: el.placeText }} />
                                <div className="bold" dangerouslySetInnerHTML={{ __html: el.contominationType }} />
                                <div className="plain" dangerouslySetInnerHTML={{ __html: el.caseText }} />
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: var(--section-margin) 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: clamp(48px, ${60 / 768 * 100}vw, 120px);
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: clamp(24px, ${44 / 768 * 100}vw, 64px);

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }

    .image{
        width: clamp(200px, ${200 / 768 * 100}vw, 400px);
        height: 400px;

        @media (max-width: 640px){
            width: 100%;
            max-width: 400px;
            height: fit-content;
        }
    }

    .title{
        margin-bottom: clamp(8px, ${8 / 768 * 100}vw, 40px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 800;
            font-size: clamp(21px, ${32 / 768 * 100}vw, 44px);
            line-height: 114%;
            letter-spacing: -0.005em;
            text-transform: uppercase;
        }
    }

    .sub{
        margin-bottom: clamp(4px, ${12 / 768 * 100}vw, 24px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(17px, ${24 / 768 * 100}vw, 32px);
            line-height: 120%;
        }
    }

    .bold{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(13px, ${21 / 768 * 100}vw, 32px);
            line-height: 125%;
        }
    }

    .plain{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(14px, ${17 / 768 * 100}vw, 32px);
            line-height: 130%;
            
            margin-top: clamp(16px, ${24 / 768 * 100}vw, 32px);
        }
    }
`
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
                        <Item>
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
    grid-gap: 120px;
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 72px;

    .image{
        max-width: 400px;
        height: fit-content;
    }

    .title{
        margin-bottom: 48px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 800;
            font-size: 56px;
            line-height: 114%;
            letter-spacing: -0.005em;
            text-transform: uppercase;
        }
    }

    .sub{
        margin-bottom: 24px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 40px;
            line-height: 120%;
        }
    }

    .bold{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 32px;
            line-height: 125%;
        }
    }

    .plain{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: 32px;
            line-height: 130%;
            
            margin-top: 32px;
        }
    }
`
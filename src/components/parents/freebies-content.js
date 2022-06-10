import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, OuterButtonBlue } from "../../styles/style"

export default function Content({ data: { title, text, repeater } }) {
    debugger
    return (
        <Wrapper>
            <Container>
                <div className="main-title" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="sub-title" dangerouslySetInnerHTML={{ __html: text }} />
                <Repeater>
                    {repeater.map(el => (
                        <Item>
                            <GatsbyImage image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                            <div className="title" dangerouslySetInnerHTML={{ __html: el.title }} />
                            <div className="text" dangerouslySetInnerHTML={{ __html: el.text }} />
                            <OuterButtonBlue href={el.file.publicUrl} download>{el.buttonText}</OuterButtonBlue>
                        </Item>
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .main-title{
        margin: 0 0 64px 0;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }

    .sub-title{
        margin: 0 0 128px 0;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 48px);
            line-height: 130%;
        }
    }
`

const Repeater = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px 48px;
    margin-bottom: 200px;
`

const Item = styled.div`
    .title{
        margin: 16px 0 24px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 40px);
            line-height: 130%;
            text-align: center;
        }
        
    }

    .text{
        margin-bottom: 36px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 400;
            font-size: clamp(14px, ${20 / 768 * 100}vw, 20px);
            line-height: 130%;
            letter-spacing: 0.005em;
            text-align: center;
        }
    }

    a{
        display: block;
        margin: 0 auto;
    }
`
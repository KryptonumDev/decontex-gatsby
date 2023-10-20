import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Grid ({data: {title, text, grid}}) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{__html: title}}/>
                <div className="text" dangerouslySetInnerHTML={{__html: text}}/>
                <div className='grid'>
                    {grid?.map((el, index) => (
                        <GatsbyImage key={index} image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText}/>
                    ))}
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: clamp(64px, ${96 / 768 * 100}vw, 128px) 0;
    .title{
        margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 32px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(18px, ${48 / 1140 * 100}vw, 56px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            text-align: center;
        }
    }

    .text{
        h1, h2, h3, h4, h5, h6, p {
            font-weight: 500;
            font-size: clamp(20px, ${(20 / 768) * 100}vw, 32px);
            line-height: 130%;
            text-align: center;
        }
    }

    .grid{
        margin-top: clamp(32px, ${48 / 768 * 100}vw, 128px);

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 32px;

        @media(max-width: 876px){
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        @media(max-width: 450px){
            grid-template-columns: 1fr;
        }
    }
`
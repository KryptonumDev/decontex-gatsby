import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonBlack, Container } from "../../styles/style"

export default function Technologies({ data: { title, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                <Repeater>
                    {repeater.map(el => (
                        <Item >
                            <GatsbyImage image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                            <div dangerouslySetInnerHTML={{ __html: el.text }} />
                        </Item>
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--section-margin);
    padding-top: clamp(40px, ${80 / 768 * 100}vw, 144px);
    padding-bottom: clamp(48px, ${96 / 768 * 100}vw, 160px);
    background-color: var(--color-black);


    .title{
        margin: 0 auto;
        text-align: center;
        margin-bottom: 72px;
        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            text-transform: uppercase;
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
        }
    }

`

const Repeater = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 40px;
`

const Item = styled.div`
    width: calc(${100 / 3}% - 27px);
    h1,h2,h3,h4,h5,h6,p{
        margin-top: 32px;
        font-weight: 400;
        font-size: clamp(17px, ${27 / 1140 * 100}vw, 32px);
        color: var(--color-white);
        line-height: 130%;
        text-align: center;
    }
    img{
        display: block;
        margin: 0 auto;
    }
`
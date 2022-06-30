import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image"

export default function AboutLCO2({ data: { title, leftText, rightText, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div className="flex">
                        <div className="text" dangerouslySetInnerHTML={{ __html: leftText }}></div>
                        <div className="text" dangerouslySetInnerHTML={{ __html: rightText }}></div>
                    </div>
                </Content>
                <Repeater>
                    {repeater.map(el => (
                        <div key={el.title} className="item">
                            <div>
                                <GatsbyImage className='image' image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText}/>
                            </div>
                            <div>
                                <div className="title" dangerouslySetInnerHTML={{ __html: el.title }}></div>
                                <div className="text" dangerouslySetInnerHTML={{ __html: el.text }}></div>
                            </div>
                        </div>
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);
    margin-bottom: var(--section-margin);
`

const Content = styled.div`
    margin-bottom: clamp(36px, ${86 / 768 * 100}vw, 128px);

    .title{
        margin: 0 0 clamp(24px, ${40 / 768 * 100}vw, 64px) 0;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(21px, ${36 / 768 * 100}vw, 48px);  
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }

    }

    .text{
        max-width: 700px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(14px, ${19 / 768 * 100}vw, 23px);
            line-height: 130%;

            span{
                font-weight: 700;
            }
        }
    }

    .flex{
        display: grid;
        justify-content: space-between;
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr;
        
        @media (max-width: 680px) {
            grid-gap: 24px;
            grid-template-columns: 1fr;
        }
    }
`

const Repeater = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;

    .item{
        padding: clamp(20px, ${30 / 768 * 100}vw, 40px) clamp(28px, ${46 / 768 * 100}vw, 60px);
        background-color: var(--color-blue);
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: clamp(12px, ${30 / 768 * 100}vw, 48px);

        &:first-child{
            background-color: var(--color-red);
        }

        .image{
            min-width: fit-content;
            max-width: clamp(44px, ${44 / 768 * 100}vw, 84px);
        }

        @media (max-width: 1024px) {
            padding: 20px 30px;
            min-height: unset;
        }
    }

    .title{
        margin-bottom: 12px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(17px, ${23 / 768 * 100}vw, 28px);
            line-height: 130%;
            color: var(--color-white);

            @media (max-width: 1024px){
                font-size: clamp(16px, ${17 / 768 * 100}vw, 17px);
            }
        }
    }

    .text{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(11px, ${16 / 768 * 100}vw, 20px);
            line-height: 130%;
            color: var(--color-white);

            @media (max-width: 1024px){
                font-size: clamp(11px, ${11 / 768 * 100}vw, 12px);
            }
        }
    }

    @media (max-width: 1024px) {
        grid-gap: 20px;
    }

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`
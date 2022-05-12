import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

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
                        <div className="item">
                            <div>
                                <img src={el.img.sourceUrl} alt={el.img.altText} />
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
`

const Content = styled.div`
    margin-bottom: 128px;

    .title{
        margin: 0 0 clamp(24px, ${40 / 768 * 100}vw, 64px) 0;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 1140 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }

    }

    .text{
        max-width: 700px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
        }
    }

    .flex{
        display: flex;
        justify-content: space-between;
        gap: 40px;
    }
`

const Repeater = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;

    .item{
        padding: 40px 60px;
        background-color: var(--color-blue);
        display: flex;
        justify-content: space-between;
        gap: 48px;
        min-height: 360px;

        &:first-child{
            background-color: var(--color-red);
        }
    }

    .title{
        margin-bottom: 12px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
            color: var(--color-white);
        }
    }

    .text{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(10px, ${13 / 768 * 100}vw, 20px);
            line-height: 130%;
            color: var(--color-white);
        }
    }
`
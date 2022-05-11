import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function WhatIsDecontomination({ data: { title, leftText, rightText, repeater } }) {
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
                        <div>
                            <img src={el.img.sourceUrl} alt={el.img.altText} />
                            <p>{el.title}</p>
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
    margin-bottom: 100px;

    .title{
        text-align: center;
        max-width: 870px;
        margin: 0 auto clamp(24px, ${40 / 768 * 100}vw, 96px) auto;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 1140 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }

    }

    .text{
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    div{
        background-color: var(--color-blue);
        padding: 80px 68px;
        text-align: center;
        p{
            margin-top: 32px;
            font-weight: 500;
            font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
            color: var(--color-white);
        }
    }
`
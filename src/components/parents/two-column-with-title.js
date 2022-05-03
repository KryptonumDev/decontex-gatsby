import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function TwoColumnWithTitle({ data: { title, leftText, rightText } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <Content>
                    <div dangerouslySetInnerHTML={{ __html: leftText }} />
                    <div dangerouslySetInnerHTML={{ __html: rightText }} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(60px, ${120 / 768 * 100}vw, 160px);

    .title{
        h1,h2,h3,h4,h5,h6,p{
            text-align: center;
            margin-bottom: clamp(48px, ${48 / 768 * 100}vw, 96px);
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }

    @media (max-width: 1024px) {
        .title{
            h1,h2,h3,h4,h5,h6,p{
                text-align: left;
            }
        }
    }


`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 500;
        font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
        line-height: 130%;
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;

        div{
            width: 75vw;
        }
    }

    @media (max-width: 480px){
        div{
            width: 100%;
        }
    }
`
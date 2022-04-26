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
    margin-top: clamp(100px, 8.33vw, 160px);

    .title{
        h1,h2,h3,h4,h5,h6,p{
            text-align: center;
            margin-bottom: 96px;
            font-weight: 900;
            font-size: 72px;
            line-height: 82px;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }

`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;
    }
`
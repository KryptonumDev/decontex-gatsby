import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function TwoColumnWithTitle({ data: { title, leftText, rightText } }) {
    return (
        <Wrapper>
            <Container>
                <StructuredText data={title} />
                <Content>
                    <div>
                        <StructuredText data={leftText} />
                    </div>
                    <div>
                        <StructuredText data={rightText} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);

    h1,h2,h3,h4,h5,h6{
        text-align: center;
        margin-bottom: 96px;
        font-weight: 900;
        font-size: 72px;
        line-height: 82px;
        text-align: center;
        letter-spacing: -0.015em;
        text-transform: uppercase;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    p{
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;
    }
`
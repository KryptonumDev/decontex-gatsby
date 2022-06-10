import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"

export default function PrivacyContent({ data: { title, columns } }) {
    return (
        <Wrapper>
            <Container>
                <Title dangerouslySetInnerHTML={{ __html: title }} />
                <Content>
                    <div dangerouslySetInnerHTML={{ __html: columns.leftColumn }}/>
                    <div dangerouslySetInnerHTML={{ __html: columns.rightColumn }}/>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--color-black);
    padding-top: clamp(120px, ${220 / 768 * 100}vw, 320px);
    padding-bottom: 192px;
    max-width: 1920px;
    margin: 0 auto;
`

const Title = styled.div`
    margin-bottom: 128px;

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 900;
        font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
        line-height: 130%;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: var(--color-white);
    }

`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 44px;

    div{
        display: grid;
        grid-gap: 30px;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 600;
        font-size: 32px;
        line-height: 130%;
        color: var(--color-white);
    }

    p{
        font-size: 20px;
        line-height: 130%;
        color: #D1D9E4;
    }
`

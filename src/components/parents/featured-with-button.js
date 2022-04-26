import React from "react"
import styled from "styled-components"
import { ButtonBlack, Container } from "../../styles/style"

export default function FeaturedWithButton({ data: { leftText, rightText, link } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div dangerouslySetInnerHTML={{ __html: leftText }} />
                    <div dangerouslySetInnerHTML={{ __html: rightText }} />
                </Content>
                <ButtonBlack to={link.url.url}>{link.text}</ButtonBlack>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: clamp(100px, 8.33vw, 160px);
    padding-top: clamp(90px, 6.25vw, 120px);
    padding-bottom: clamp(60px, 4.68vw, 90px);
    background-color: var(--color-yellow);

    a{
        margin: 0 auto;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 75px;
    
    h1,h2,h3,h4,h5,h6,p{
        font-size: 39px;
        font-weight: 700;
        line-height: 52px;
        color: #111315;
    }
`
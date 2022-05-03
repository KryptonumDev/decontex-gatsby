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
    margin-top: clamp(60px, ${120 / 768 * 100}vw, 160px);
    padding-top: clamp(40px, ${80 / 768 * 100}vw, 120px);
    padding-bottom: clamp(48px, ${90 / 768 * 100}vw, 90px);
    background-color: var(--color-gold);

    a{
        margin: 0 auto;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    grid-gap: 40px;
    margin-bottom: 75px;
    
    h1,h2,h3,h4,h5,h6,p{
        font-size: clamp(21px, ${39 / 768 * 100}vw, 39px);
        font-weight: 700;
        line-height: 130%;
        color: var(--color-white);
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`
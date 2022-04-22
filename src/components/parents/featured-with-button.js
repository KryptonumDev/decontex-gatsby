import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { ButtonBlack, Container } from "../../styles/style"

export default function FeaturedWithButton({ data: { leftText, rightText, link } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div>
                        <StructuredText data={leftText} />
                    </div>
                    <div>
                        <StructuredText data={rightText} />
                    </div>
                </Content>
                <ButtonBlack to={link[0].slug}>{link[0].name}</ButtonBlack>
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
    
    p{
        font-size: 39px;
        font-weight: 700;
        line-height: 52px;
        color: #111315;
    }
`
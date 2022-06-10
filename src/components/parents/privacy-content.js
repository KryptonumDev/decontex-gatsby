import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function PrivacyContent({ data }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div dangerouslySetInnerHTML={{ __html: data.leftColumn }}/>
                    <div dangerouslySetInnerHTML={{ __html: data.rightColumn }}/>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: clamp(60px, ${120 / 768 * 100}vw, 180px);
    padding-bottom: 192px;
    max-width: 1920px;
    margin: 0 auto;
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
    }

    p{
        font-size: 20px;
        line-height: 130%;
    }

    p+h1, p+h2, p+h3, p+h4, p+h5, p+h6{
        margin-top: 32px;
    }
`

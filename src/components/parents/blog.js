import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"

export default function Blog({ data: { title, text, link } }) {
    return (
        <Wrapper>
            <Container>
                <Title dangerouslySetInnerHTML={{ __html: title }} />
                <Content>

                </Content>
                <Link>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                    <ButtonBlue to={link.url.url}>{link.text}</ButtonBlue>
                </Link>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);
`

const Title = styled.div`

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 900;
        font-size: 72px;
        line-height: 82px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        text-align: center;
    }

`

const Content = styled.div`
    margin: 96px 0;
`

const Link = styled.div`
    h1,h2,h3,h4,h5,h6,p{
        font-weight: 700;
        font-size: 40px;
        line-height: 52px;
        text-align: center;
    }

    a{
        display: block;
        margin: 32px auto 0 auto;
    }

`
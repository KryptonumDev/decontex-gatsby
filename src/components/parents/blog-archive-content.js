import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function Content({ data: { title, text }, posts }) {
    return (
        <Wrapper>
            <Container>
                <TextPart>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>
                </TextPart>
                <Grid>
                    {posts.map(el => (
                        <Item>

                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding-top: 360px;
    background-color: var(--color-black);

`

const TextPart = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 128px;

    .title{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            color: var(--color-white);
        }
    }

    .text{
        max-width: 720px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 48px);
            line-height: 130%;
            color: var(--color-white);
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px 48px;
`

const Item = styled.div`

    &:first-child{

    }
`
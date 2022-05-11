import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function DecontominationSubjectsMini({ data: { title, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                <Repeater>
                    {repeater.map(el => (
                        <Item color={el.backgroundColor} dangerouslySetInnerHTML={{ __html: el.text }} />
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        margin-bottom: 96px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 1140 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            text-align: center;
        }
    }
`

const Repeater = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`

const Item = styled.div`
    max-width: calc(${100 / 3}% - 27px);
    background-color: ${props => props.color === 'red' ? 'var(--color-red)' : 'var(--color-blue)'};
    padding: 64px;
    h1,h2,h3,h4,h5,h6,p{
        font-weight: 400;
        font-size: clamp(17px, ${27 / 1140 * 100}vw, 32px);
        color: var(--color-white);
        line-height: 130%;
        text-align: center;
    }
`
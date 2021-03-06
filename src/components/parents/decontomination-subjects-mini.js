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
                        <Item key={el.text} color={el.backgroundColor} dangerouslySetInnerHTML={{ __html: el.text }} />
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        margin-bottom: clamP(26px, ${60 / 768 * 100}vw, 96px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(18px, ${48 / 1140 * 100}vw, 56px);
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
    gap: clamp(16px, ${20 / 768 * 100}vw, 40px);
`

const Item = styled.div`
    width: calc(${100 / 3}% - 27px);
    background-color: ${props => props.color === 'red' ? 'var(--color-red)' : 'var(--color-blue)'};
    padding: clamp(20px, ${32 / 768 * 100}vw, 64px);
    display: flex;
    align-items: center;
    justify-content: center;
    h1,h2,h3,h4,h5,h6,p{    
        font-weight: 700;
        font-size: clamp(12px, ${16 / 1024 * 100}vw, 23px);
        color: var(--color-white);
        line-height: 130%;
        text-align: center;
    }

    @media (max-width: 800px) {
        width: calc(${100 / 2}% - clamp(16px, ${20 / 768 * 100}vw, 40px));
    }

    @media (max-width: 420px) {
        width: 100%;
    }
`
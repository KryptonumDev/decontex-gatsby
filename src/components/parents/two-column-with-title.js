import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"

export default function TwoColumnWithTitle({ data: { sectionTitle, leftText, rightText, button } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                <Flex>
                    <div className="text" dangerouslySetInnerHTML={{ __html: leftText }} />
                    <div>
                        <div className="text" dangerouslySetInnerHTML={{ __html: rightText }} />
                        <ButtonBlue to={button.url}>{button.name}</ButtonBlue>
                    </div>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        margin-bottom: clamp(24px, ${52 / 768 * 100}vw, 80px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(21px, ${48 / 768 * 100}vw, 56px);
            line-height: 112%;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;

            @media (max-width: 480px) {
                text-align: left;
            }
        }
    }

    .text{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(14px, ${17 / 768 * 100}vw, 28px);
            line-height: 130%;

            span{
                font-weight: 700;
            }
        }

        p+p{
            margin-top: clamp(24px, ${40 / 768 * 100}vw, 40px);
        }
    }

    a{
        margin: clamp(32px, ${32 / 768 * 100}vw, 72px) 0 0 0 !important;
    }
    
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(24px, ${24 / 768 * 100}vw, 40px);

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`
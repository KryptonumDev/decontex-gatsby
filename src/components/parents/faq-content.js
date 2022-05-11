import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { Answer, Question, QuestionWrapper } from "../childrens/faq"
import FaqArrow from './../../resources/faq.svg'

export default function Content({ data: { title, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <Table>
                    {repeater.map(el => (
                        <QuestionWrapper>
                            <Question >
                                <div dangerouslySetInnerHTML={{ __html: el.question }} />
                            </Question>
                            <Answer>
                                <div dangerouslySetInnerHTML={{ __html: el.answer }} />
                            </Answer>
                        </QuestionWrapper>
                    ))}
                </Table>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);
    margin-bottom: var(--section-margin);

    .title{
        max-width: 1200px;
        margin: 0 auto;
        h1,h2,h3,h4,h5,h6,p {
            text-align: center;
            margin-bottom: clamp(48px, ${96 / 768 * 100}vw, 120px);
            font-weight: 700;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 64px);
            line-height: 130%;
            letter-spacing: -0.005em;
            text-transform: uppercase;
        }
    }
`

const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px 48px;

    details{

        &[open]{
            summary{
                span{
                    ::after{
                        transform: rotateX(180deg);

                        @media (max-width: 640px){
                            transform: translateY(-3px) rotateX(180deg) scale(.8);
                        }
                    }
                }
            }
        }


        summary{
            display: flex;
            align-items: center;
            list-style: none;
            padding: 24px 32px;
            width: fit-content;
            background-color: var(--color-yellow);
            margin-bottom: 24px;
            width: 100%;

            ::-webkit-details-marker {
                display:none;
            }

            div{
                margin-bottom: 0;
            }

            span{
                position: relative;
                padding-left: 60px;

                h1,h2,h3,h4,h5,h6,p{
                    font-weight: 700;
                    font-size: clamp(21px, ${28 / 768 * 100}vw, 32px);
                    line-height: 130%;
                    color: #111315;

                }

                ::after{
                    content: url(${FaqArrow});
                    position: absolute;
                    left: 10px;
                    top: 3px;
                    height: fit-content;
                    transform-origin: 50% 50%;
                    transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
                    transform: rotateX(0);

                    @media (max-width: 640px){
                        left: 0;
                        top: 0;
                        transform: rotateX(0) scale(.8);
                    }
                }

                @media (max-width: 640px) {
                    padding-left: 40px;
                }
            }
        }

        div{
            h1,h2,h3,h4,h5,h6,p{
                font-weight: 500;
                font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
                line-height: 130%;
                color: #111315;
            }
        }
    }
`
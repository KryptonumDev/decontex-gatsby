import React, { useState } from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"
import { Answer, Question, QuestionWrapper } from "../childrens/faq"
import FaqArrow from './../../resources/faq-white.svg'
import Mark from './../../resources/list-mark.svg'

export default function Content({ data: { title, text, link, repeater } }) {
    const [dividedArrays, changeDividedArrays] = useState(() => {
        let arr1 = []
        let arr2 = []

        repeater.forEach((element, index) => {
            if (index === 0 || index % 2 === 0) {
                arr1.push(element)
            } else {
                arr2.push(element)
            }
        });

        return [arr1, arr2]
    })

    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
                <div className="button">
                    <ButtonBlue to={link.url}>{link.name}</ButtonBlue>
                </div>
                <Table>
                    <Column>
                        {dividedArrays[0].map((el, index) => (
                            <QuestionWrapper key={el.question} isOpen={index === 0}>
                                <Question >
                                    <div dangerouslySetInnerHTML={{ __html: el.question }} />
                                </Question>
                                <Answer>
                                    <div dangerouslySetInnerHTML={{ __html: el.answer }} />
                                </Answer>
                            </QuestionWrapper>
                        ))}
                    </Column>
                    <Column>
                        {dividedArrays[1].map((el, index) => (
                            <QuestionWrapper key={el.question} isOpen={index === 0}>
                                <Question >
                                    <div dangerouslySetInnerHTML={{ __html: el.question }} />
                                </Question>
                                <Answer>
                                    <div dangerouslySetInnerHTML={{ __html: el.answer }} />
                                </Answer>
                            </QuestionWrapper>
                        ))}
                    </Column>
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
        margin: 0 auto clamp(32px, ${48 / 768 * 100}vw, 48px) auto;
        h1,h2,h3,h4,h5,h6,p {
            text-align: center;
            font-weight: 700;
            font-size: clamp(21px, ${36 / 768 * 100}vw, 48px);
            line-height: 130%;
            letter-spacing: -0.005em;
            text-transform: uppercase;
        }
    }

    .text{
        max-width: 960px;
        margin: 0 auto clamp(24px, ${36 / 768 * 100}vw, 48px) auto;
        h1,h2,h3,h4,h5,h6,p {
            font-weight: 700;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 36px);
            line-height: 130%;
            text-align: center;
        }
    }

    .button{
        width: fit-content;
        margin: 0 auto;
    }
`

const Table = styled.div`
    margin-top: clamp(48px, ${96 / 768 * 100}vw, 120px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(18px, ${18 / 768 * 100}vw, 48px);

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`

const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: clamp(18px, ${18 / 768 * 100}vw, 48px);
    height: fit-content;

    details{

        &[open]{
            summary{
                span{
                    ::after{
                        transform: rotateX(180deg);

                        @media (max-width: 1024px){
                            transform: translateY(-3px) rotateX(180deg) scale(.8);
                        }

                        @media (max-width: 640px) {
                            transform: translateY(-3px) rotateX(180deg) scale(.6);
                        }
                    }
                }
            }
        }


        summary{
            display: flex;
            align-items: center;
            list-style: none;
            padding: clamp(12px, ${18 / 768 * 100}vw, 24px) 32px;
            width: fit-content;
            background-color: var(--color-yellow);
            margin-bottom: 24px;
            width: 100%;
            cursor: pointer;

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
                    font-size: clamp(13px, ${17 / 1024 * 100}vw, 28px);
                    line-height: 130%;
                    color: var(--color-white);
                    margin-bottom: 0;
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

                    @media (max-width: 1024px){
                        left: 0;
                        top: 0;
                        transform: rotateX(0) scale(.8);
                    }

                    @media (max-width: 640px) {
                        left: -16px;
                        transform: rotateX(0) scale(.6);
                    }
                }

                @media (max-width: 1024px) {
                    padding-left: 40px;
                }

                @media (max-width: 640px) {
                    padding-left: 24px;
                }
            }
        }

        div{
            display: grid;
            grid-gap: 20px;

            h1,h2,h3,h4,h5,h6,p{
                font-weight: 500;
                font-size: clamp(14px, ${17 / 1024 * 100}vw, 28px);
                line-height: 130%;
                color: #111315;

                a{
                    font-size: inherit;
                    line-height: inherit;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: var(--color-blue);
                }

                @media (max-width: 680px) {
                    margin-bottom: 15px;
                }
            }

            ul, ol{
                display: grid;
                grid-gap: 32px;
                margin-bottom: 16px;
                li{
                    padding-left: 50px;
                    font-weight: 500;
                    font-size: clamp(14px, ${17 / 1024 * 100}vw, 28px);
                    line-height: 130%;
                    position: relative;

                    &::before{
                        content: url(${Mark});
                        position: absolute;
                        left: 0;
                        top: 1px;

                        @media (max-width: 1440px) {
                            top: 0;
                            transform: scale(.8);
                        }

                        @media (max-width: 1240px) {
                            transform: scale(.7);
                            top: -6px;
                        }

                        @media (max-width: 1024px) {
                            top: -8px;
                        }
                    }
                }
            }

        }


    }
`
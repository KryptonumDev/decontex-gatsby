import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { Answer, Question, QuestionWrapper } from "../childrens/faq"
import FaqArrow from './../../resources/faq.svg'

export default function Faq({ data: { bottomAnnotation, faq, backgroundImage } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="faq">
                        {faq.map(el => (
                            <QuestionWrapper>
                                <Question>
                                    <StructuredText data={el.question} />
                                </Question>
                                <Answer>
                                    <StructuredText data={el.answer} />
                                </Answer>
                            </QuestionWrapper>
                        ))}
                        <Annotation>
                            <StructuredText data={bottomAnnotation} />
                        </Annotation>
                    </div>
                    <div>
                        <Image image={backgroundImage.gatsbyImageData} alt={backgroundImage.alt} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);
`

const Image = styled(GatsbyImage)`

`

const Annotation = styled.div`
    h1,h2,h3,h4,h5,h6,p{
        font-weight: 700;
        font-size: 40px;
        line-height: 52px;
        
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    .faq{
        display: flex;
        flex-direction: column;
        gap: 64px;
    }

    details{

        &[open]{
            summary{
                span{
                    ::after{
                        transform: rotateX(180deg);
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

            ::-webkit-details-marker {
                display:none;
            }

            span{
                position: relative;
                padding-left: 60px;

                p{
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 42px;
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
                }
            }
        }

        div{
            p{
                font-weight: 500;
                font-size: 32px;
                line-height: 42px;
                color: #111315;
            }
        }
    }
`
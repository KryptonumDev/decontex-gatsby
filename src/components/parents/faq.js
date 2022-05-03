import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
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
                        {faq.map((el, index) => (
                            <QuestionWrapper isOpen={index === 0}>
                                <Question >
                                    <div dangerouslySetInnerHTML={{ __html: el.question }} />
                                </Question>
                                <Answer>
                                    <div dangerouslySetInnerHTML={{ __html: el.answer }} />
                                </Answer>
                            </QuestionWrapper>
                        ))}
                        <Annotation dangerouslySetInnerHTML={{ __html: bottomAnnotation }} />
                    </div>
                    <div>
                        <Image image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);

    @media (max-width: 640px) {
        margin-top: 20px;
    }
`

const Image = styled(GatsbyImage)`

    @media (max-width: 1320px) {
        margin: 0 auto;
        display: block;
        width: fit-content;
    }

`

const Annotation = styled.div`
    margin-bottom: 0 !important;
    h1,h2,h3,h4,h5,h6,p{
        font-weight: 700;
        font-size: clamp(21px, ${40 / 768 * 100}vw, 40px);
        line-height: 130%;
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

            @media (max-width: 640px) {
                padding: 15px 28px;
                width: 100%;

            }

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

    @media (max-width: 1320px) {
        grid-template-columns: 1fr;
        max-width: 1070px;
        margin: 0 auto;
        grid-gap: 64px;

        .faq{
            gap: 40px;
        }
    }

    @media (max-width: 640px){
        .faq{
            gap: 0;
            margin-bottom: 0;
        }

        div{
            margin-bottom: 40px;
        }
    }
`
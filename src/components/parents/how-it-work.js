import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { Answer, Question, QuestionWrapper } from "../childrens/faq"
import FaqArrow from './../../resources/faq-white.svg'

export default function HowItWork({ data: { title, subTitle, layersTitle, desctopImage, mobileImage, layers } }) {

    const changeCurrentTab = (tabName) => {
        document.querySelectorAll('.tabs').forEach(el => el.classList.remove('active'))
        document.getElementById(tabName).classList.add('active')
        document.getElementById(tabName + '-tab').classList.add('active')
    }

    useEffect(() => {
        document.querySelectorAll('.tabs-0').forEach(el => el.classList.add('active'))
    }, [])

    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="main-title" dangerouslySetInnerHTML={{ __html: title }} />
                    <div className="sub-title" dangerouslySetInnerHTML={{ __html: subTitle }} />
                    <GatsbyImage image={desctopImage.localFile.childImageSharp.gatsbyImageData} alt={desctopImage.altText} />
                    <div className="layers-title" dangerouslySetInnerHTML={{ __html: layersTitle }} />
                    <LayersWrapper>
                        <LayersButtons>
                            {layers.map((el, index) => (
                                <button className={'tabs tabs-' + index} id={el.name.replace(/\s+/g, '-') + '-tab'} onClick={() => { changeCurrentTab(el.name.replace(/\s+/g, '-')) }}><div><img src={el.icon.sourceUrl} alt={el.icon.altText} /></div>{el.name}</button>
                            ))}
                        </LayersButtons>
                        <LayersContent>
                            {layers.map((el, index) => (
                                <div className={'tabs tabs-' + index} id={el.name.replace(/\s+/g, '-')}>
                                    <div className="title" dangerouslySetInnerHTML={{ __html: el.title }} />
                                    <div className="text" dangerouslySetInnerHTML={{ __html: el.text }} />
                                </div>
                            ))}
                        </LayersContent>
                    </LayersWrapper>
                    <MobileLayers>
                        {layers.map((el, index) => (
                            <QuestionWrapper isOpen={index === 0}>
                                <Question>
                                    <div dangerouslySetInnerHTML={{ __html: el.name }} />
                                </Question>
                                <Answer>
                                    <div className="tab-title" dangerouslySetInnerHTML={{ __html: el.title }} />
                                    <div className="tab-text" dangerouslySetInnerHTML={{ __html: el.text }} />
                                </Answer>
                            </QuestionWrapper>
                        ))}
                    </MobileLayers>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: var(--section-margin);
`

const Content = styled.div`

    .main-title{
        max-width: 1100px;
        margin: 0 auto;
        h1,h2,h3,h4,h5,h6{
            text-align: center;
            margin-bottom: clamp(24px, ${40 / 768 * 100}vw, 96px);
            font-weight: 700;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 64px);
            line-height: 130%;
            letter-spacing: -0.005em;
            text-transform: uppercase;

            @media (max-width: 1024px) {
                text-align: left;
            }
        }

    }

    .sub-title{
        max-width: 1200px;
        margin: 0 auto 64px auto;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 40px);
            line-height: 130%;
            text-align: center;
        
            @media (max-width: 1024px) {
                text-align: left;
            }
        }
    }

    .layers-title{
        text-align: center;
        margin-top: clamp(56px, ${82 / 768 * 100}vw, 128px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 40px);
            line-height: 130%;
        
            @media (max-width: 1024px) {
                text-align: left;
            }
        }
        @media (max-width: 640px) {
            max-width: 300px;
        }
    }
`

const LayersWrapper = styled.div`
    max-width: 1070px;
    margin: 120px auto 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 56px;

    @media (max-width: 1024px){
        grid-template-columns: 1fr;
        margin-top: 32px;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

const LayersButtons = styled.div`
    display: grid;
    grid-gap: clamp(32px, ${32 / 768 * 100}vw, 56px);
    height: min-content;

    button{
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px clamp(21px, ${21 / 768 * 100}vw, 40px);
        border: 1px solid #111315;
        background-color: transparent;
        box-sizing: border-box;
        font-size: clamp(21px, ${21 / 768 * 100}vw, 32px);
        line-height: 130%;
        font-weight: 500;
        text-transform: unset;
        height: 100%;
        div{
            height: 36px;
            display: flex;
            align-items: center;

            img{
                display: block;
                margin-right: 12px;
            }
        }

        &.active{
            border: 5px solid #CE2029;
            padding: 20px clamp(17px, ${17 / 768 * 100}vw, 36px);
            color: #CE2029;
        }
    }

    @media (max-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const LayersContent = styled.div`
    position: relative;

    .title{
        margin: 0 0 32px 0;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 40px);
            line-height: 130%;
            text-align: left;
        }

    }

    .text{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
            text-align: left;
        }
    }

    .tabs{  
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        &.active{
            opacity: 1;
            pointer-events: all;
            position: relative;
        }
    }
`

const MobileLayers = styled.div`
    @media (min-width: 641px) {
        display: none;
    }

    margin-top: 32px;

    details{

        &[open]{
            summary{
                span{
                    ::after{
                        transform: translateY(-5px) rotateX(180deg) scale(.8);
                    }
                }
            }
        }


        summary{
            width: 100%;

            display: flex;
            align-items: center;
            list-style: none;
            padding: 15px 28px;
            background-color: var(--color-red);
            margin-bottom: 24px;

            ::-webkit-details-marker {
                display:none;
            }

            div{
                margin-bottom: 0;
                font-weight: 700;
                font-size: 21px;
                line-height: 130%;
                color: #111315;
                color: var(--color-white);
            }

            span{
                position: relative;
                padding-left: 40px;

                h1,h2,h3,h4,h5,h6,p{
                    font-weight: 700;
                    font-size: 21px;
                    line-height: 130%;
                    color: #111315;
                    color: var(--color-white);

                }

                ::after{
                    content: url(${FaqArrow});
                    position: absolute;
                    left: 0;
                    top: 3px;
                    height: fit-content;
                    transform-origin: 50% 50%;
                    transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
                    transform: translateY(-5px) rotateX(0) scale(.8);
                }
            }
        }

        div{

            &.tab-title{
                margin-bottom: 24px;

                h1,h2,h3,h4,h5,h6,p{
                    font-weight: 700;
                    font-size: 21px;
                    line-height: 130%;
                    color: #111315;
                }

            }

            &.tab-text{
                margin-bottom: 40px;

                h1,h2,h3,h4,h5,h6,p{
                    font-weight: 500;
                    font-size: 21px;
                    line-height: 130%;
                    color: #111315;
                }
            }
        }
    }
`
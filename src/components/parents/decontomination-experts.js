import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"
import Mark from './../../resources/list-mark-white.svg'
import Check from './../../resources/check-golden.svg'

export default function DecontominationExperts({ data: { title, citeUnderTitle, citeBackground, subSectionTitle, link, subSectionPlates, compare, compareTitle } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
            </Container>
            <Cite>
                <svg width="135" height="114" viewBox="0 0 135 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M135 0V31.5458C135 47.9351 133.04 61.4962 129.12 72.229C125.2 82.8168 118.376 91.8092 108.648 99.2061C99.0652 106.458 88.1758 111.389 75.9797 114V88.5458C84.546 83.7595 89.4099 77.2328 90.5715 68.9657H75.9797V0H135ZM59.0203 0V31.5458C59.0203 47.9351 57.0602 61.4962 53.14 72.229C49.2199 82.8168 42.3959 91.8092 32.668 99.2061C23.0854 106.458 12.1961 111.389 0 114V88.5458C8.71148 83.7595 13.648 77.2328 14.8095 68.9657H0V0H59.0203Z" fill="#33383D" />
                </svg>
                <Container>
                    <div className="content" dangerouslySetInnerHTML={{ __html: citeUnderTitle }} />
                </Container>
                <GatsbyImage className="image" image={citeBackground.localFile.childImageSharp.gatsbyImageData} alt={citeBackground.altText} />
            </Cite>
            <Container>
                <SubSection>
                    <div>
                        <div className="sub-title" dangerouslySetInnerHTML={{ __html: subSectionTitle }} />
                        <ButtonBlue to={link.url}>
                            {link.title}
                        </ButtonBlue>
                    </div>
                    <div className="plates">
                        <div className="lines">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="grid">
                            {subSectionPlates.map((plate, index) => (
                                <div className="item">
                                    <img src={plate.plateIcon.localFile.publicURL} alt={plate.plateIcon.altText} />
                                    <div dangerouslySetInnerHTML={{ __html: plate.plateContent }} />
                                    <img className="pattent" src={plate.patentedIcon.localFile.publicURL} alt={plate.patentedIcon.altText} />
                                </div>
                            ))}
                        </div>
                    </div>
                </SubSection>
                {compare?.length > 0 && (
                    <Compare>
                        <div className="sub-title" dangerouslySetInnerHTML={{ __html: compareTitle }} />
                        <div className="grid">
                            {compare.map((item, index) => (
                                <div className="item" key={index}>
                                    <h3>{item.groupName}</h3>
                                    <div className="content" dangerouslySetInnerHTML={{ __html: item.groupContent }} />
                                </div>
                            ))}
                        </div>
                    </Compare>
                )}
            </Container>
        </Wrapper >
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        h1,h2,h3,h4,h5,h6,p{
            margin-bottom: clamp(24px, ${48 / 768 * 100}vw, 80px);
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 64px);
            line-height: 112%;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;

            @media (max-width: 480px) {
                text-align: left;
            }
        }
    }

    .sub{
        h1,h2,h3,h4,h5,h6,p{
            margin-top: clamp(24px, ${48 / 768 * 100}vw, 80px);
            margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 40px);
            font-weight: 700;
            font-size: clamp(17px, ${32 / 768 * 100}vw, 40px);
            line-height: 120%;
            text-align: center;
        }
    }

    .sub-title{
        >*{
            font-size: clamp(24px, calc(44vw/7.68), 44px);
            font-style: normal;
            font-weight: 700;
            line-height: 125%;
            text-transform: uppercase;
        }
    }
`

const Cite = styled.div`
    margin: clamp(24px, calc(48vw/7.68), 64px) auto 0 auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;
    background: #000;
    max-width: 1920px;
    width: 100%;
    background-color: #080808;

    svg{
        left: clamp(16px, calc(40vw/7.68), 64px);
        top: clamp(16px, calc(32vw/7.68 ), 64px);
        position: absolute;
        z-index: 2;
        width: clamp(96px, calc(96vw/7.68), 135px);
        height: fit-content;
    }

    .image{
        position: absolute;
        z-index: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        min-width: 1024px;
        mix-blend-mode: lighten;

        img{
            object-position: top;
        }

        @media (max-width: 480px) {
            position: relative;
            left: 100%;
            transform: translateX(-100%);
        }
        @media (max-width: 360px) {
            min-width: 840px;
        }
    }

    .content{
        padding: clamp(80px, calc(80vw/7.68), 114px) clamp(60px, calc(60vw/7.68 ), 90px);
        position: relative;
        z-index: 3;
        max-width: 800px;

        >*{
            color: var(--white-100, #F3F3F3);
            font-size: clamp(17px, calc(19vw/7.68), 20px);
            font-style: normal;
            font-weight: 600;
            line-height:  160%;
        }

        @media (max-width: 864px) {
            max-width: 70%;
        }

        @media (max-width: 540px) {
            max-width: 85%;
        }

        @media (max-width: 480px) {
            padding: 48px 16px 16px 40px;
            max-width: 100%;
        }
    }
`

const SubSection = styled.div`
    display: grid;
    grid-template-columns: 453px auto;
    gap: 40px;
    align-items: center;
    margin-top: clamp(24px, calc(40vw/7.68), 160px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 64px;
    }

    .sub-title{
        margin-top: 120px;
        margin-bottom: 40px;
        width: min-content;

        @media (max-width: 1024px) {
            margin-top: 0;
        }
    }

    a{
        margin-left: 0 !important;
    }

    .plates{
        display: grid;
        gap: 40px;
        grid-template-columns: 330fr 577fr;
        align-items: center;
        grid-template-areas: 
        'lines plates';

        @media (max-width: 1024px) {
            grid-template-areas: 
            'plates lines';
            grid-template-columns: 480fr 177fr;
            gap: 32px;
        }

        @media (max-width: 480px) {
            gap: 0;
        }
        
        >svg{
            width: 100%;
            height: 100%;
        }

        .grid{
            grid-area: plates;
            display: grid;
            gap: 32px;

            .item{
                background: var(--blue-700, #177BC3);
                padding: clamp(16px, calc(24vw/7.68), 24px) clamp(16px, calc(32vw/7.68), 32px) clamp(24px, calc(32vw/7.68), 32px) clamp(16px, calc(32vw/7.68), 32px);
                position: relative;
                z-index: 2;

                display: grid;
                grid-template-columns: clamp(36px, calc(70vw/7.68), 82px) 1fr;
                gap: 24px;

                @media (max-width: 540px) {
                    grid-template-columns: 1fr;
                }

                >img{
                    width: 100%;
                    height: fit-content;

                    @media (max-width: 540px) {
                        width: 36px;
                    }
                }

                .pattent{
                    position: absolute;
                    right: 0;
                    top: 0;
                    margin-top: 0;
                    width: 96px;
                    height: 64px;
                    z-index: -1;
                }

                >div>*+*{
                    margin-top: 12px;
                }

                h1,h2,h3,h4,h5,h6{
                    color: var(--white-100, #F3F3F3);
                    font-size: 26px;
                    font-weight: 700;
                    line-height: 146.154%;

                    margin-right: 64px;
                }

                p{
                    color: var(--white-100, #F3F3F3);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 155.556%;
                    letter-spacing: 0.09px;
                }

                ul,ol {
                    li{
                        list-style: none;
                        position: relative;
                        padding-left: 32px;
                        margin-top: 12px;

                        color: var(--white-100, #F3F3F3);
                        font-size: 18px;
                        line-height: 155.556%;
                        letter-spacing: 0.09px;

                        &::before{
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 0;
                            transform: translateY(-50%);
                            width: 24px;
                            height: 24px;
                            background: url(${Mark}) no-repeat;
                            background-size: contain;
                        }
                    }
                }
            }
        }

        .lines{
            grid-area: lines;
            position: relative;
            z-index: 2;
            height: 100%;

            &::before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                border-bottom: 2px dashed #177BC3;
            }

            &::after{
                content: "";
                position: absolute;
                left: 30%;
                top: 60px;
                bottom: 60px;
                border-left: 2px dashed #177BC3;
                    
                @media (max-width: 1024px) {
                    right: 50%;
                    left: unset;
                }

                @media (max-width: 480px) {
                    top: 120px;
                    bottom: 120px;
                }
            }

            span {
                &:nth-child(1){
                    position: absolute;
                    left: 30%;
                    bottom: 60px;
                    width: 70%;
                    border-top: 2px dashed #177BC3;
                    
                    @media (max-width: 1024px) {
                        right: 50%;
                        width: 50%;
                        left: unset;
                    }

                    @media (max-width: 480px) {
                        bottom: 120px;
                    }
                }

                &:nth-child(2){
                    position: absolute;
                    left: 30%;
                    top: 60px;
                    width: 70%;
                    border-top: 2px dashed #177BC3;

                    @media (max-width: 1024px) {
                        right: 50%;
                        width: 50%;
                        left: unset;
                    }

                    @media (max-width: 480px) {
                        top: 120px;
                    }
                }

                &:nth-child(3){
                    @media (max-width: 1024px) {
                        position: absolute;
                        right: 0%;
                        bottom: 50%;
                        height: 90%;
                        border-left: 2px dashed #177BC3;
                    }

                    @media (max-width: 680px) {
                        height: 80%;
                    }

                    @media (max-width: 480px) {
                        height: 70%;
                    }
                }

                &:nth-child(4){
                    @media (max-width: 1024px) {
                        position: absolute;
                        right: 0;
                        bottom: 140%;
                        width: 100%;
                        border-bottom: 2px dashed #177BC3;
                    }

                    @media (max-width: 680px) {
                        bottom: 130%;
                    }

                    @media (max-width: 480px) {
                        bottom: 120%;
                    }
                }
            }
        }
    }
`

const Compare = styled.div`
    margin-top: clamp(48px, calc(96vw/7.68), 160px);

    .grid{
        margin-top: clamp(40px, calc(64vw/7.68), 96px);
        columns: 3;
        column-gap: 40px;

        @media (max-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: unset;
            columns: unset;
            gap: clamp(32px, calc(48vw/7.68), 96px) 24px;
        }

        @media (max-width: 580px) {
            grid-template-columns: 1fr;
            max-width: 360px;
        }

        .item{
            break-inside: avoid;
            margin-top: clamp(32px, calc(48vw/7.68), 96px);

            @media (max-width: 1024px) {
                margin-top: 0;
            }

            &:first-child{
                margin-top: 0;
            }

            h3{
                color: var(--black-700, #111315);
                font-family: Inter;
                font-size: clamp(17px, calc(24vw/7.68), 28px);
                font-style: normal;
                font-weight: 700;
                line-height: 142.857%;
                margin-bottom: 32px;
            }

            .content{
                *{
                    font-size: clamp(14px, calc(17vw/7.68), 18px);
                    font-weight: 400;
                    line-height: 155.556%;
                    letter-spacing: 0.09px;
                }

                h1,h2,h3,h4,h5,h6{
                    font-size: clamp(17px, calc(24vw/7.68), 26px);
                    font-weight: 500;
                    line-height: 146.154%;
                    margin-top: 32px;

                    &:first-child{
                        margin-top: 0;
                    }
                }

                >*+*{
                    margin-top: 20px;
                }

                ul > * {
                    margin-top: 16px;

                    &:first-child{
                        margin-top: 0;
                    }
                }

            li{
                position: relative;
                padding-left: 32px;

                &::before{
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 0;
                    width: 24px;
                    height: 24px;
                    background: url(${Check}) no-repeat;
                    background-size: contain;
                }
            }
            }
        }
    }
`
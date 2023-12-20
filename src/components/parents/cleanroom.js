import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import { ButtonOutlined, Container } from "../../styles/style"


const Mark = ({ className, active, index }) => (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.00004 11.0605L11.0607 18.1212L18.1214 11.0605L11.0607 3.99986L4.00004 11.0605Z" fill={active === (index + 1) ? '#1A6AE1' : "#C4C4C4"} />
        <rect x="0.707107" width="14.5538" height="14.5538" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.207107 10.498)" stroke={active === (index + 1) ? '#1A6AE1' : "#C4C4C4"} />
    </svg>
)

export default function Cleanroom({ data: { brownPlateText, nextButton, cleanroom, leftText, rightText, sectionTitle, subTitle } }) {

    const [activeItem, setActiveItem] = useState(1)

    const arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15']

    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                <div className="text" dangerouslySetInnerHTML={{ __html: subTitle }} />
                <div className="flex">
                    <div className="left" dangerouslySetInnerHTML={{ __html: leftText }} />
                    <div className="right" dangerouslySetInnerHTML={{ __html: rightText }} />
                </div>
                <Grid>
                    <ItemWrapper>
                        <MarkWrapper>
                            {arr.map((el, index) => (
                                <MarkerButton key={el} onClick={() => { setActiveItem(index + 1) }} active={activeItem} index={index + 1} className={'m' + (index + 1)}>
                                    <Mark className={'mark'} active={activeItem} index={index} />
                                    {el}
                                </MarkerButton>
                            ))}

                        </MarkWrapper>
                        {cleanroom.map((el, index) => (
                            <Item key={index} index={index + 1} active={activeItem}>
                                <GatsbyImage className="image" image={el.stepView.localFile.childImageSharp.gatsbyImageData} alt={el.stepView.altText} />
                            </Item>
                        ))}
                    </ItemWrapper>
                    <div>
                        <CardWrapper>
                            {cleanroom.map((el, index, arr) => (
                                <Card key={el.stepTitle} isBrown={index + 1 === arr.length} index={index + 1} active={activeItem}>
                                    <div>
                                        <h3>{el.stepTitle}</h3>
                                        <div className="content">
                                            <GatsbyImage className="image" image={el.purposeIcon.localFile.childImageSharp.gatsbyImageData} alt={el.purposeIcon.altText} />
                                            <div>
                                                <p className="main">{el.roomPurpose}</p>
                                                {el.purposeDescription
                                                    ? <p className="sub">{el.purposeDescription}</p>
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                            <div className="buttons">
                                {activeItem === 1
                                    ? <span />
                                    : <button tabIndex={activeItem === 1 ? '-1' : '0'} aria-label="previously item" className="button" onClick={() => { setActiveItem(activeItem === 1 ? activeItem : activeItem - 1) }}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 40L0 20L20 0L22.625 2.625L7.125 18.125H40V21.875H7.125L22.625 37.375L20 40Z" fill="#F3F3F3" />
                                        </svg>
                                    </button>}
                                {activeItem === arr.length + 1
                                    ? <span />
                                    : <ButtonOutlined tabIndex={cleanroom.length === activeItem ? '-1' : '0'} className="cta" as='button' onClick={() => { setActiveItem(cleanroom.length === activeItem ? activeItem : activeItem + 1) }}>{nextButton}</ButtonOutlined>}
                            </div>
                        </CardWrapper>
                        <div className="brown">
                            {brownPlateText}
                        </div>
                    </div>
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 924px 1fr;
    grid-gap: 40px;

    .brown{
        margin-top: 55px;
        padding: 48px 24px 48px 48px;
        background: #928367;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
                
        font-weight: 600;
        font-size: clamp(19px, ${21 / 768 * 100}vw, 24px);
        line-height: 125%;
        color: var(--color-white);
        width: 200%;
    }

    @media (max-width: 1500px) {
        grid-template-columns: 1fr;
        grid-gap: 100px;

        .brown{
            width: fit-content;
            margin:  40px -40px 0 auto;
            padding: clamp(16px, ${32 / 768 * 100}vw, 48px);
        }
    }

    @media (max-width: 600px) {
        grid-gap: 60px;
    }

    @media (max-width: 480px) {
        width: 100vw;
        transform: translateX(-16px);

        .brown{
            width: 100vw;
            transform: translateX(-40px);
            text-align: center;
            box-sizing: border-box;
        }
    }
`

const MarkerButton = styled.button`
        border: none;
        background-color: transparent;
        font-weight: 600;
        font-size: 24px;
        line-height: 150%;
        padding: 0 8px;
        position: absolute;
        z-index: 100;
        
        &::after{
            content: "";
            position: absolute;
            left: 50%;
            bottom: 100%;
            transform: translateX(-50%);
            width: 1px;
            z-index: 10;
            background-color: #e4e4e4;
        }

        ${props => props.active === props.index ? `
            color: var(--color-white);
            background-color: var(--color-blue);
            z-index: 20;

            &::after{
                background-color: var(--color-blue)
            }
        ` : null}

        @media (max-width: 800px) {
            font-size: 11px;
            padding: 0 5px;
        }
`

const MarkWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    
    .m1{
        --height: 88px;
        right: 6%;
        bottom: 0;

        &::after{
            height: var(--height);
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 68px;
        }

        @media (max-width: 800px) {
            --height: 54px;
        }

        @media (max-width: 520px) {
            --height: 25px;
        }
    }

    .m2{
        --height: 173px;
        right: 8%;
        bottom: -8%;

        &::after{
            height: var(--height);
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height)); 

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 138px;
        }

        @media (max-width: 800px) {
            --height: 109px;
        }

        @media (max-width: 520px) {
            --height: 60px;
            bottom: -12%;
        }
    }

    .m3{
        --height: 82px;
        right: 25.9%;
        bottom: 0;

        &::after{
            height: var(--height);
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 62px;
        }

        @media (max-width: 800px) {
            --height: 56px;
        }

        @media (max-width: 520px) {
            --height: 25px;
            right: 23%;
        }
    }

    .m4{
        --height: 97px;
        right: 38%;
        bottom: 0;

        &::after{
            height: var(--height);
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 75px;
        }

        @media (max-width: 800px) {
            --height: 65px;
        }

        @media (max-width: 520px) {
            --height: 30px;
            right: 36%;
        }
    }

    .m5{
        --height: 208px;
        right: 41.4%;
        bottom: -8%;

        &::after{
            height: var(--height);
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 158px;
        }

        @media (max-width: 800px) {
            --height: 127px;
        }

        @media (max-width: 520px) {
            --height: 75px;
            right: 40%;
            bottom: -12%;
        }
    }

    .m6{
        --height: 180px;
        right: 44%;
        bottom: -15%;

        &::after{
            height: var(--height);
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 140px;
        }

        @media (max-width: 800px) {
            --height: 110px;
        }

        @media (max-width: 520px) {
            --height: 72px;
            right: 43%;
            bottom: -24%;
        }
    }

    .m7{
        --height: 123px;
        right: 53%;
        bottom: 0;

        &::after{
            height: var(--height);
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 93px;
        }

        @media (max-width: 800px) {
            --height: 78px;
        }

        @media (max-width: 520px) {
            --height: 40px;
            right: 52%;
        }
    }

    .m8{
        --height: 290px;
        right: 60%;
        bottom: -8%;

        &::after{
            height: var(--height);
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 220px;
        }

        @media (max-width: 800px) {
            --height: 160px;
        }

        @media (max-width: 520px) {
            --height: 90px;
            right: 59%;
        }
    }

    .m9{
        --height: 111px;
        right: 81%;
        bottom: 0;

        &::after{
            height: var(--height); 
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 85px;
        }

        @media (max-width: 800px) {
            --height: 65px;
        }

        @media (max-width: 520px) {
            --height: 35px;
            right: 79%;
        }
    }

    .m10{
        --height: 245px;
        right: 84%;
        top: 0;

        &::after{
            height: var(--height); 
            bottom: unset;
            top: 100%;
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(-40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 180px;
        }

        @media (max-width: 800px) {
            --height: 135px;
        }

        @media (max-width: 520px) {
            --height: 70px;
            right: 82%;
        }
    }

    .m11{
        --height: 209px;
        right: 78%;
        top: -10%;

        &::after{
            height: var(--height); 
            bottom: unset;
            top: 100%;
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(-40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 165px;
        }

        @media (max-width: 800px) {
            --height: 118px;
        }

        @media (max-width: 520px) {
            --height: 66px;
            right: 77%;
        }
    }

    .m12{
        --height: 183px;
        right: 68%;
        top: -2%;

        &::after{
            height: var(--height); 
            bottom: unset;
            top: 100%;
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(-40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 140px;
        }

        @media (max-width: 800px) {
            --height: 110px;
        }

        @media (max-width: 520px) {
            --height: 57px;
            right: 67%;
        }
    }

    .m13{
        --height: 90px;
        right: 43%;
        top: -2%;

        &::after{
            height: var(--height); 
            bottom: unset;
            top: 100%;
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(-40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 62px;
        }

        @media (max-width: 800px) {
            --height: 54px;
        }

        @media (max-width: 520px) {
            --height: 25px;
            right: 42%;
        }
    }

    .m14{
        --height: 250px;
        right: 24%;
        top: -8%;

        &::after{
            height: var(--height); 
            bottom: unset;
            top: 100%;
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(-40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 190px;
        }

        @media (max-width: 800px) {
            --height: 147px;
        }

        @media (max-width: 520px) {
            --height: 80px;
            right: 22%;
        }
    }

    .m15{
        --height: 183px;
        right: 14%;
        top: -2%;

        &::after{
            height: var(--height); 
            bottom: unset;
            top: 100%;
        }

        .mark{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: calc(100% + var(--height));

            @media (max-width: 800px) {
                transform: translateX(-50%) scale(0.6) translateY(-40%);
            }
        }

        @media (max-width: 1024px) {
            --height: 143px;
        }

        @media (max-width: 800px) {
            --height: 116px;
        }

        @media (max-width: 520px) {
            --height: 62px;
            right: 12%;
        }
    }
`

const ItemWrapper = styled.div`
    width: 100%;
    aspect-ratio: 1.88/1;
    position: relative;

    @media (max-width: 1500px) {
        max-width: 962px;
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        max-width: 750px;
    }

    @media (max-width: 800px) {
        max-width: 535px;
    }

    @media (max-width: 600px) {
        max-width: 450px;
    }

    @media (max-width: 550px) {
    }

    @media (max-width: 520px) {
        max-width: 320px;
        width: 100%;
        transform: unset;
    }
`

const Item = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: ${props => props.active === props.index ? 'all' : 'none'};
    opacity: ${props => props.active === props.index ? '1' : '0'};
`

const CardWrapper = styled.div`
    width: 450px;
    height: 450px;
    position: relative;

    @media (max-width: 1500px) {
        min-height: 360px;
        max-width: 750px;
        width: 100%;
        height: unset;
        margin: 0 auto;
    }

    @media (max-width: 600px) {
        min-height: 250px;
    }

    .buttons{
        position: absolute;
        bottom: 16px;
        left: 16px;
        right: 16px;
        height: 79px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .cta{
            color: var(--color-white);
            border-color: var(--color-white);
        }

        .button{
            background-color: transparent;
            border: none;
            height: 40px;
            width: 40px;
        }

        *{
            margin: 0 !important;
        }

        @media (max-width: 480px) {
            height: 54px;

            .button{
                transform: scale(0.8);
            }
        }
    }

`

const Card = styled.div`
    background-color: ${props => props.isBrown ? 'var(--color-gold)' : 'var(--color-blue)'};
    padding: 36px 55px 48px 55px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    pointer-events: ${props => props.active === props.index ? 'all' : 'none'};
    opacity: ${props => props.active === props.index ? '1' : '0'};

    @media (max-width: 600px) {
        padding: clamp(16px, ${32 / 768 * 100}vw, 32px);
    }

    &:last-child{
        background: #928367;
    }

    h3{
        color: var(--color-white);
        margin-bottom: clamp(6px, ${11 / 768 * 100}vw, 16px);
        font-weight: 700;
        font-size: clamp(17px, ${24 / 768 * 100}vw, 24px);
        line-height: 125%;
    }

    .content{
        display: grid;
        grid-gap: clamp(8px, ${12 / 768 * 100}vw, 16px);
        grid-template-columns: auto 1fr;

        .image{
            width: fit-content;
            height: fit-content;
            max-width: clamp(20px, ${40 / 768 * 100}vw, 50px);
        }

        p{
            color: var(--color-white);
            margin-bottom: 10px;

            &.main{
                font-weight: 700;
                font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                line-height: 140%;
                letter-spacing: 0.005em;
            }

            &.sub{
                font-weight: 400;
                font-size: clamp(11px, ${12 / 768 * 100}vw, 13px);
                line-height: 146%;
                letter-spacing: 0.005em;
            }
        }
    }
`

const Wrapper = styled.section`
    margin-top: var(--section-margin);
    overflow: hidden;

    .title{
        margin-bottom: clamp(8px, ${44 / 768 * 100}vw, 80px);
        max-width: 900px;

        @media (max-width: 480px) {
            margin-bottom: 8px;
        }

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(24px, ${48 / 768 * 100}vw, 56px);
            line-height: 112%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }

    .text{
        margin-bottom: clamp(24px, ${36 / 768 * 100}vw, 48px);

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(13px, ${27 / 768 * 100}vw, 40px);
            line-height: 120%;
        }
    }

    .flex{
        display: grid;
        grid-template-columns: 76fr 54fr;
        grid-gap: clamp(24px, ${36 / 768 * 100}vw, 48px);
        margin-bottom: 240px;

        @media (max-width: 1500px) {
            margin-bottom: 100px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        @media (max-width: 600px) {
            margin-bottom: 60px;
        }
    }

    .left{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(17px, ${24 / 768 * 100}vw, 32px);
            line-height: 131%;
        }
    }

    .right{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(13px, ${27 / 768 * 100}vw, 40px);
            line-height: 120%;
        }
    }
`
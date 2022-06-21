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

export default function Cleanroom({ data: { brownPlateText, nextButton, cleanroom, headquarters, leftText, rightText, sectionTitle, subTitle } }) {

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
                <Countries>
                    {headquarters.map(el => (
                        <Country key={el.address}>
                            <div>
                                <GatsbyImage className="flag" image={el.countryFlag.localFile.childImageSharp.gatsbyImageData} alt={el.countryFlag.altText} />
                                <span className="main">{el.name}</span>
                            </div>
                            <div>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.375 26C21.438 26 18.519 25.2778 15.6181 23.8333C12.7171 22.3889 10.1111 20.5111 7.8 18.2C5.48889 15.8889 3.61111 13.2829 2.16667 10.3819C0.722222 7.48102 0 4.56204 0 1.625C0 1.16759 0.156482 0.782407 0.469445 0.469445C0.782407 0.156482 1.16759 0 1.625 0H6.68056C7.01759 0 7.3125 0.114352 7.56528 0.343055C7.81806 0.571759 7.98056 0.878704 8.05278 1.26389L9.02778 5.81389C9.07593 6.15093 9.06991 6.45787 9.00972 6.73472C8.94954 7.01157 8.82315 7.2463 8.63056 7.43889L5.01944 11.0861C6.36759 13.325 7.87824 15.275 9.55139 16.9361C11.2245 18.5972 13.1204 20.0056 15.2389 21.1611L18.6694 17.6222C18.9102 17.3574 19.187 17.1708 19.5 17.0625C19.813 16.9542 20.1259 16.9361 20.4389 17.0083L24.7361 17.9472C25.0972 18.0194 25.3981 18.2 25.6389 18.4889C25.8796 18.7778 26 19.1148 26 19.5V24.375C26 24.8324 25.8435 25.2176 25.5306 25.5306C25.2176 25.8435 24.8324 26 24.375 26ZM3.93611 9.1L6.86111 6.13889L6.03056 2.16667H2.16667C2.16667 3.10556 2.31111 4.13472 2.6 5.25417C2.88889 6.37361 3.33426 7.65556 3.93611 9.1ZM23.8333 23.8333V19.9694L20.1139 19.2111L17.2611 22.2083C18.2481 22.6657 19.3194 23.0389 20.475 23.3278C21.6306 23.6167 22.75 23.7852 23.8333 23.8333Z" fill="#111315" />
                                </svg>
                                <span>{el.phone}</span>
                            </div>
                            <div>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 28C12.0633 28 10.2433 27.6325 8.54 26.8975C6.83667 26.1625 5.355 25.165 4.095 23.905C2.835 22.645 1.8375 21.1633 1.1025 19.46C0.3675 17.7567 0 15.9367 0 14C0 12.0633 0.3675 10.2433 1.1025 8.54C1.8375 6.83667 2.835 5.355 4.095 4.095C5.355 2.835 6.83667 1.8375 8.54 1.1025C10.2433 0.3675 12.0633 0 14 0C15.9367 0 17.7567 0.3675 19.46 1.1025C21.1633 1.8375 22.645 2.835 23.905 4.095C25.165 5.355 26.1625 6.83667 26.8975 8.54C27.6325 10.2433 28 12.0633 28 14V15.855C28 17.1617 27.5392 18.2642 26.6175 19.1625C25.6958 20.0608 24.57 20.51 23.24 20.51C22.4 20.51 21.6067 20.3058 20.86 19.8975C20.1133 19.4892 19.5417 18.9117 19.145 18.165C18.5383 18.9583 17.78 19.5475 16.87 19.9325C15.96 20.3175 15.0033 20.51 14 20.51C12.18 20.51 10.6342 19.88 9.3625 18.62C8.09083 17.36 7.455 15.82 7.455 14C7.455 12.18 8.09083 10.6283 9.3625 9.345C10.6342 8.06167 12.18 7.42 14 7.42C15.82 7.42 17.3658 8.06167 18.6375 9.345C19.9092 10.6283 20.545 12.18 20.545 14V15.855C20.545 16.5783 20.8075 17.185 21.3325 17.675C21.8575 18.165 22.4933 18.41 23.24 18.41C23.9633 18.41 24.5875 18.165 25.1125 17.675C25.6375 17.185 25.9 16.5783 25.9 15.855V14C25.9 10.6867 24.745 7.875 22.435 5.565C20.125 3.255 17.3133 2.1 14 2.1C10.6867 2.1 7.875 3.255 5.565 5.565C3.255 7.875 2.1 10.6867 2.1 14C2.1 17.3133 3.255 20.125 5.565 22.435C7.875 24.745 10.6867 25.9 14 25.9H21.49V28H14ZM14 18.41C15.2367 18.41 16.2867 17.9842 17.15 17.1325C18.0133 16.2808 18.445 15.2367 18.445 14C18.445 12.74 18.0133 11.6783 17.15 10.815C16.2867 9.95167 15.2367 9.52 14 9.52C12.7633 9.52 11.7133 9.95167 10.85 10.815C9.98667 11.6783 9.555 12.74 9.555 14C9.555 15.2367 9.98667 16.2808 10.85 17.1325C11.7133 17.9842 12.7633 18.41 14 18.41Z" fill="#111315" />
                                </svg>
                                <span>{el.email}</span>
                            </div>
                            {el.address
                                ? <div>
                                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 21.5556C12.5679 19.4815 14.5062 17.4877 15.8148 15.5741C17.1235 13.6605 17.7778 11.8765 17.7778 10.2222C17.7778 8.76543 17.5123 7.53086 16.9815 6.51852C16.4506 5.50617 15.7963 4.67901 15.0185 4.03704C14.2407 3.39506 13.3951 2.9321 12.4815 2.64815C11.5679 2.3642 10.7407 2.22222 10 2.22222C9.25926 2.22222 8.4321 2.3642 7.51852 2.64815C6.60494 2.9321 5.75926 3.39506 4.98148 4.03704C4.2037 4.67901 3.54938 5.50617 3.01852 6.51852C2.48765 7.53086 2.22222 8.76543 2.22222 10.2222C2.22222 11.8765 2.87654 13.6605 4.18518 15.5741C5.49383 17.4877 7.4321 19.4815 10 21.5556ZM10 24.3704C6.61728 21.8272 4.10494 19.3951 2.46296 17.0741C0.820987 14.7531 0 12.4691 0 10.2222C0 8.54321 0.302469 7.0679 0.907408 5.7963C1.51235 4.52469 2.2963 3.45679 3.25926 2.59259C4.22222 1.7284 5.2963 1.08025 6.48148 0.648148C7.66667 0.216049 8.83951 0 10 0C11.1605 0 12.3333 0.216049 13.5185 0.648148C14.7037 1.08025 15.7778 1.7284 16.7407 2.59259C17.7037 3.45679 18.4877 4.52469 19.0926 5.7963C19.6975 7.0679 20 8.54321 20 10.2222C20 12.4691 19.179 14.7531 17.537 17.0741C15.8951 19.3951 13.3827 21.8272 10 24.3704ZM10 12.5926C10.716 12.5926 11.3272 12.3395 11.8333 11.8333C12.3395 11.3272 12.5926 10.7161 12.5926 10C12.5926 9.28395 12.3395 8.67284 11.8333 8.16667C11.3272 7.66049 10.716 7.40741 10 7.40741C9.28395 7.40741 8.67284 7.66049 8.16667 8.16667C7.66049 8.67284 7.40741 9.28395 7.40741 10C7.40741 10.7161 7.66049 11.3272 8.16667 11.8333C8.67284 12.3395 9.28395 12.5926 10 12.5926ZM0 29.6296V27.4074H20V29.6296H0Z" fill="black" />
                                    </svg>
                                    <span>{el.address}</span>
                                </div>
                                : null}
                        </Country>
                    ))}
                </Countries>
            </Container>
        </Wrapper>
    )
}

const Countries = styled.div`
    margin-top: var(--section-margin);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: clamp(32px, ${44 / 768 * 100}vw, 56px);

    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

const Country = styled.div`
    display: grid;
    grid-gap: clamp(16px, ${20 / 768 * 100}vw, 25px);
    height: fit-content;

    div{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        grid-gap: 8px;

        .main{
            font-weight: 700;
            font-size: clamp(17px, ${24 / 768 * 100}vw, 32px);
            line-height: 42px;
        }

        .flag{
            width: fit-content;
            height: fit-content;
            max-width: 40px;
        }

        span{
            font-weight: 400;
            font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
            line-height: 140%;
            letter-spacing: 0.005em;
        }
    }
`

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
        width: calc(100vw + 40px);
        transform: translateX(-20px);
    }

    @media (max-width: 550px) {
        width: calc(100% + 80px);
        transform: translateX(-40px);
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
        min-height: 300px;
        max-width: 750px;
        width: 100%;
        height: unset;
        margin: 0 auto;
    }

    @media (max-width: 600px) {
        min-height: 250px;
    }

    @media (max-width: 480px) {
        min-height: 240px;
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
        font-size: clamp(17px, ${24 / 768 * 100}vw, 30px);
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

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${45 / 768 * 100}vw, 64px);
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
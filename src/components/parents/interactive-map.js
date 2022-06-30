import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { ButtonOutlined, Container } from "../../styles/style"
import { Austria, Belgium, France, Germany, Luxemburg, Netherlands, Poland, Spain, Switzerland } from "../childrens/map/countries"
import { Map } from './../childrens/map/map'
// import Map from './../../resources/map.png'

export default function InteractiveMap({ data: { sectionTitle, text, country, next } }) {

    const [isOpened, setIsOpened] = useState(false)
    const [whichOpened, setWhichOpened] = useState(country[0].countryCode)
    const [openedIndex, setOpenedIndex] = useState(0)

    const mapEl = useRef()
    const itemEl = useRef()

    const [cord, setCord] = useState({ x: 0, y: 0 })

    useEffect(() => {
        setCord({ x: mapEl.current.offsetLeft, y: (mapEl.current.offsetTop + mapEl.current.clientHeight / 2) })
        setTimeout(() => {
            setIsOpened(true)
        }, 100)
    }, [])

    const mobileOpen = (num) => {
        let currentItem = country.filter(el => el.countryCode === num)
        let currentItemIndex = country.indexOf(currentItem[0])

        setWhichOpened(num)
        setOpenedIndex(currentItemIndex)
    }


    const open = (num) => {

        let currentItem = country.filter(el => el.countryCode === num)
        let currentItemIndex = country.indexOf(currentItem[0])

        let x = window.event.pageX - (itemEl.current.clientWidth / 2)
        let y = window.event.pageY - (itemEl.current.clientHeight / 2)

        if (x < 0) {
            x = 0
        } else if (x + itemEl.current.clientWidth > window.innerWidth) {
            x = window.innerWidth - itemEl.current.clientWidth
        }

        setCord({ x: x, y: y })
        setIsOpened(true)
        setWhichOpened(num)
        setOpenedIndex(currentItemIndex)
    }

    return (
        <Wrapper>
            <LocContainer>
                <Title dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                <BrownText>{text}</BrownText>
                <MapWrapper ref={mapEl}>
                    <Map />
                    {/* <img src={Map} className="map"/> */}
                    <Poland open={open} whichOpened={whichOpened} />
                    <Spain open={open} whichOpened={whichOpened} />
                    <Switzerland open={open} whichOpened={whichOpened} />
                    <Austria open={open} whichOpened={whichOpened} />
                    <Belgium open={open} whichOpened={whichOpened} />
                    <France open={open} whichOpened={whichOpened} />
                    <Germany open={open} whichOpened={whichOpened} />
                    <Luxemburg open={open} whichOpened={whichOpened} />
                    <Netherlands open={open} whichOpened={whichOpened} />
                </MapWrapper>

                <Plate ref={itemEl} cord={cord} isOpened={isOpened} whichOpened={whichOpened}>
                    <Close tabIndex={isOpened ? '0' : '-1'} onClick={() => { setIsOpened(false) }} />
                    {country.map((el) => (
                        <PlateItem key={el.countryCode} isOpened={isOpened} index={el.countryCode} whichOpened={whichOpened}>
                            <div className="mobile-flex">
                                <h3>{el.countryName}</h3>
                                <div>
                                    {el.countryPhone.map(innerEl => (
                                        <a tabIndex={(whichOpened === el.countryCode && isOpened) ? '0' : '-1'} href={'tel:' + innerEl.text}>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.375 26C21.438 26 18.519 25.2778 15.6181 23.8333C12.7171 22.3889 10.1111 20.5111 7.8 18.2C5.48889 15.8889 3.61111 13.2829 2.16667 10.3819C0.722222 7.48102 0 4.56204 0 1.625C0 1.16759 0.156482 0.782407 0.469445 0.469445C0.782407 0.156482 1.16759 0 1.625 0H6.68056C7.01759 0 7.3125 0.114352 7.56528 0.343055C7.81806 0.571759 7.98056 0.878704 8.05278 1.26389L9.02778 5.81389C9.07593 6.15093 9.06991 6.45787 9.00972 6.73472C8.94954 7.01157 8.82315 7.2463 8.63056 7.43889L5.01944 11.0861C6.36759 13.325 7.87824 15.275 9.55139 16.9361C11.2245 18.5972 13.1204 20.0056 15.2389 21.1611L18.6694 17.6222C18.9102 17.3574 19.187 17.1708 19.5 17.0625C19.813 16.9542 20.1259 16.9361 20.4389 17.0083L24.7361 17.9472C25.0972 18.0194 25.3981 18.2 25.6389 18.4889C25.8796 18.7778 26 19.1148 26 19.5V24.375C26 24.8324 25.8435 25.2176 25.5306 25.5306C25.2176 25.8435 24.8324 26 24.375 26ZM3.93611 9.1L6.86111 6.13889L6.03056 2.16667H2.16667C2.16667 3.10556 2.31111 4.13472 2.6 5.25417C2.88889 6.37361 3.33426 7.65556 3.93611 9.1ZM23.8333 23.8333V19.9694L20.1139 19.2111L17.2611 22.2083C18.2481 22.6657 19.3194 23.0389 20.475 23.3278C21.6306 23.6167 22.75 23.7852 23.8333 23.8333Z" fill="white" />
                                            </svg>
                                            <span>{innerEl.text}</span>
                                        </a>
                                    ))}
                                    <a tabIndex={(whichOpened === el.countryCode && isOpened) ? '0' : '-1'} href={'mailto:' + el.countryEmail}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 28C12.0633 28 10.2433 27.6325 8.54 26.8975C6.83667 26.1625 5.355 25.165 4.095 23.905C2.835 22.645 1.8375 21.1633 1.1025 19.46C0.3675 17.7567 0 15.9367 0 14C0 12.0633 0.3675 10.2433 1.1025 8.54C1.8375 6.83667 2.835 5.355 4.095 4.095C5.355 2.835 6.83667 1.8375 8.54 1.1025C10.2433 0.3675 12.0633 0 14 0C15.9367 0 17.7567 0.3675 19.46 1.1025C21.1633 1.8375 22.645 2.835 23.905 4.095C25.165 5.355 26.1625 6.83667 26.8975 8.54C27.6325 10.2433 28 12.0633 28 14V15.855C28 17.1617 27.5392 18.2642 26.6175 19.1625C25.6958 20.0608 24.57 20.51 23.24 20.51C22.4 20.51 21.6067 20.3058 20.86 19.8975C20.1133 19.4892 19.5417 18.9117 19.145 18.165C18.5383 18.9583 17.78 19.5475 16.87 19.9325C15.96 20.3175 15.0033 20.51 14 20.51C12.18 20.51 10.6342 19.88 9.3625 18.62C8.09083 17.36 7.455 15.82 7.455 14C7.455 12.18 8.09083 10.6283 9.3625 9.345C10.6342 8.06167 12.18 7.42 14 7.42C15.82 7.42 17.3658 8.06167 18.6375 9.345C19.9092 10.6283 20.545 12.18 20.545 14V15.855C20.545 16.5783 20.8075 17.185 21.3325 17.675C21.8575 18.165 22.4933 18.41 23.24 18.41C23.9633 18.41 24.5875 18.165 25.1125 17.675C25.6375 17.185 25.9 16.5783 25.9 15.855V14C25.9 10.6867 24.745 7.875 22.435 5.565C20.125 3.255 17.3133 2.1 14 2.1C10.6867 2.1 7.875 3.255 5.565 5.565C3.255 7.875 2.1 10.6867 2.1 14C2.1 17.3133 3.255 20.125 5.565 22.435C7.875 24.745 10.6867 25.9 14 25.9H21.49V28H14ZM14 18.41C15.2367 18.41 16.2867 17.9842 17.15 17.1325C18.0133 16.2808 18.445 15.2367 18.445 14C18.445 12.74 18.0133 11.6783 17.15 10.815C16.2867 9.95167 15.2367 9.52 14 9.52C12.7633 9.52 11.7133 9.95167 10.85 10.815C9.98667 11.6783 9.555 12.74 9.555 14C9.555 15.2367 9.98667 16.2808 10.85 17.1325C11.7133 17.9842 12.7633 18.41 14 18.41Z" fill="white" />
                                        </svg>
                                        <span>{el.countryEmail}</span>
                                    </a>
                                    {el.countryAddress
                                        ? <p>
                                            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 21.5556C12.5679 19.4815 14.5062 17.4877 15.8148 15.5741C17.1235 13.6605 17.7778 11.8765 17.7778 10.2222C17.7778 8.76543 17.5123 7.53086 16.9815 6.51852C16.4506 5.50617 15.7963 4.67901 15.0185 4.03704C14.2407 3.39506 13.3951 2.9321 12.4815 2.64815C11.5679 2.3642 10.7407 2.22222 10 2.22222C9.25926 2.22222 8.4321 2.3642 7.51852 2.64815C6.60494 2.9321 5.75926 3.39506 4.98148 4.03704C4.2037 4.67901 3.54938 5.50617 3.01852 6.51852C2.48765 7.53086 2.22222 8.76543 2.22222 10.2222C2.22222 11.8765 2.87654 13.6605 4.18518 15.5741C5.49383 17.4877 7.4321 19.4815 10 21.5556ZM10 24.3704C6.61728 21.8272 4.10494 19.3951 2.46296 17.0741C0.820987 14.7531 0 12.4691 0 10.2222C0 8.54321 0.302469 7.0679 0.907408 5.7963C1.51235 4.52469 2.2963 3.45679 3.25926 2.59259C4.22222 1.7284 5.2963 1.08025 6.48148 0.648148C7.66667 0.216049 8.83951 0 10 0C11.1605 0 12.3333 0.216049 13.5185 0.648148C14.7037 1.08025 15.7778 1.7284 16.7407 2.59259C17.7037 3.45679 18.4877 4.52469 19.0926 5.7963C19.6975 7.0679 20 8.54321 20 10.2222C20 12.4691 19.179 14.7531 17.537 17.0741C15.8951 19.3951 13.3827 21.8272 10 24.3704ZM10 12.5926C10.716 12.5926 11.3272 12.3395 11.8333 11.8333C12.3395 11.3272 12.5926 10.7161 12.5926 10C12.5926 9.28395 12.3395 8.67284 11.8333 8.16667C11.3272 7.66049 10.716 7.40741 10 7.40741C9.28395 7.40741 8.67284 7.66049 8.16667 8.16667C7.66049 8.67284 7.40741 9.28395 7.40741 10C7.40741 10.7161 7.66049 11.3272 8.16667 11.8333C8.67284 12.3395 9.28395 12.5926 10 12.5926ZM0 29.6296V27.4074H20V29.6296H0Z" fill="white" />
                                            </svg>
                                            <span>{el.countryAddress}</span>
                                        </p>
                                        : null}
                                </div>
                            </div>

                        </PlateItem>
                    ))}
                    <div className="buttons">
                        <button className="button" aria-label="previously country" onClick={() => { mobileOpen(openedIndex === 0 ? country[country.length - 1].countryCode : country[openedIndex - 1].countryCode) }}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 40L0 20L20 0L22.625 2.625L7.125 18.125H40V21.875H7.125L22.625 37.375L20 40Z" fill="#F3F3F3" />
                            </svg>
                        </button>
                        <ButtonOutlined as='button' onClick={() => { mobileOpen(openedIndex === country.length - 1 ? country[0].countryCode : country[openedIndex + 1].countryCode) }}>{next}</ButtonOutlined>
                    </div>
                </Plate>
            </LocContainer>
        </Wrapper >
    )
}

const Title = styled.div`
    margin-bottom: clamp(16px, ${32 / 768 * 100}vw, 64px);
    h1,h2,h3,h4,h5,h6,p{
        font-weight: 900;
        font-size: clamp(16px, ${44 / 768 * 100}vw, 64px);
        line-height: 112%;
        text-align: center;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: var(--color-white);

        @media (max-width: 480px) {
            text-align: left;
            padding: 0 16px;
        }
    }
`

const Plate = styled.div`
    overflow: hidden;
    display: flex;
    width: clamp(280px, ${280 / 768 * 100}vw, 513px);
    height: clamp(190px, ${190 / 768 * 100}vw, 290px);
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
    transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1), opacity .2s cubic-bezier(0.39, 0.575, 0.565, 1);
    pointer-events: none;

    transform: translateX(${props => props.cord.x}px) translateY(${props => props.cord.y}px);

    ${props => props.isOpened
        ? null
        : `
        opacity: 0;
        pointer-events: none;
    `}

    .buttons{
        display: none;
    }


    @media (max-width: 639px) {
        pointer-events: all;
        width: 100%;
        min-height: 250px;
        margin-top: 30px;
        position: relative;
        transform: unset;
        top: unset;
        left: unset;
        background-color: var(--color-blue);
        box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.35);

        opacity: 1;
        pointer-events: all;

        .buttons{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            position: absolute;
            bottom: 16px;
            left: 16px;
            right: 16px;
            height: fit-content;

            button{
                margin: 0!important;
                color: var(--color-white);
                border-color: var(--color-white);
            }

            .button{
                background-color: transparent;
                border: none;
            }
        }
    }
`

const Close = styled.button`
                position: absolute;
                z-index: 99;
                right: 24px;
                top: 32px;
                border: none;
                width: 44px;
                height: 44px;
                background-color: #CE2029;
                opacity: 1;
                pointer-events: all;
                cursor: pointer;
                transition: opacity .3s linear;

                &::after{
                    content: "";
                    position: absolute;
                    left: 11px;
                    top: 10px;
                    height: 2px;
                    width: 32px;
                    transform-origin: 0 0;
                    transform: rotateZ(45deg);
                    background-color: white;
                }

                &::before{
                    content: "";
                    position: absolute;
                    right: 11px;
                    top: 10px;
                    height: 2px;
                    width: 32px;
                    transform-origin: 100% 0;
                    transform: rotateZ(-45deg);
                    background-color: white;
                }

                @media (max-width: 1024px) {
                    width: 32px;
                    height: 32px;
                    right: 12px;
                    top: 12px;

                    &::after{
                        left: 10px;
                        width: 20px;
                        top: 9px;
                    }

                    &::before{
                        right: 10px;
                        width: 20px;
                        top: 9px;
                    }
                }

                @media (max-width: 640px) {
                    display: none;
                }
`

const PlateItem = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    background-color: var(--color-blue);
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.35);
    padding: clamp(12px, ${12 / 768 * 100}vw, 32px);
    padding-left: clamp(24px, ${24 / 768 * 100}vw, 48px); 
    box-sizing: border-box;
    opacity: 0;
    pointer-events: none;
    transition: opacity .15s linear;

    @media(max-width: 639px){
        bottom: 0;
        background-color: unset;
        box-shadow: unset;
    }


    h3{
        font-weight: 700;
        font-size: clamp(17px, ${17 / 768 * 100}vw, 32px);
        line-height: 125%;
        color: #fff;
    }
 
    a, p{
        margin-top: clamp(4px, ${8 / 768 * 100}vw, 24px);
        text-transform: unset;
        span{
            margin-left: 12px;
            font-weight: 700;
            font-size: clamp(13px, ${13 / 768 * 100}vw, 20px);
            line-height: 140%;
            letter-spacing: 0.005em;
            color: #fff;

            @media (max-width: 1024px) {
                font-weight: 500;
            }
        }

        svg{
            max-width: clamp(14px, ${14 / 768 * 100}vw, 28px);
        }

        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
    }

    ${props => props.whichOpened === props.index
        ? `
        opacity: 1;
        pointer-events: all;
    `
        : null}

    ${props => props.isOpened
        ? null
        : `
        opacity: 0;
        pointer-events: none;
    `}
        
    @media (max-width: 639px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
            font-size: 11px;
            max-width: 220px;
        }
        .mobile-flex{
            display: flex;
            justify-content: space-between;
        }

        
    }
`

const Wrapper = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--section-margin);
    padding-top: clamp(24px, ${44 / 768 * 100}vw, 64px);
    padding-bottom: clamp(40px, ${64 / 768 * 100}vw, 144px);
    background: var(--color-black);
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.35);

    .map{
        pointer-events: none;
        aspect-ratio: 1.5141955836/1;
    }
    .country{
        pointer-events: none;
        height: fit-content;
        position: absolute;
        z-index: 10;
        path{
            transition: fill .3s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        g{
            pointer-events: all;
            cursor: pointer;
            &:hover{
                .main{
                    fill: #0864A6;
                }
            }
        }
    }
    .mark{
        position: absolute;
        height: fit-content;
        pointer-events: none;
        z-index: 11;
        rect{
            pointer-events: all;
            cursor: pointer;
        }
    }

    @media(min-width: 640px){
        .country g .main{
            fill: #53A4DA;
        }
    }

    @media (max-width: 639px) {
        overflow: hidden;
    }
`

const LocContainer = styled(Container)`
    padding: 0;
    max-width: 1440px;
    position: unset;
`

const MapWrapper = styled.div`
    position: relative;
    overflow: hidden;
    min-width: 420px;
    width: 100%;
    aspect-ratio: 1.50785340314/1;

    .marks{
        position: absolute;
        width: 72.8472222222%;
        height: fit-content;
        left: 4.2%;
        top: 5.6%;

        rect{
            position: relative;
            z-index: 11;
        }
    }

    .map{
        position: absolute;
        z-index: 0;
        width: 100%;
        height: fit-content;
        display: block;
    }

    .mark-poland{
        left: 61.59%;
        top: 12.4%;
        width: 15.5555555556%;
    }

    .poland{
        top: 3%;
        right: 18.3%;
        width: 24.6527777778%;
    }

    .mark-spain{
        left: 4.3%;
        top: 56.88%;
        width: 15.5555555556%;
    }

    .spain{
        left: 2.51111%;
        top: 61.2%;
        width: 32.5694444444%;
    }

    .mark-switzerland{
        left: 36.8%;
        top: 46.16%;
        width: 15.5555555556%;
    }

    .switzerland{
        right: 49.6%;
        top: 40.82%;
        width: 12.3611111111%;
    }

    .mark-austria{
        left: 51.45%;
        top: 28.8%;
        width: 15.5555555556%;
    }

    .austria{
        width: 18.6111111111%;
        left: 47%;
        top: 35.1%;
    }

    .mark-belgium{
        left: 20%;
        top: 15%;
        width: 15.5555555556%;
    }

    .belgium{
        width: 7.56944444444%;
        top: 22.4%;
        left: 31%;
    }

    .mark-france{
        left: 21.25%;
        top: 42.48%;
        width: 15.5555555556%;
    }

    .france{
        width: 30.1388888889%;
        left: 13.5%;
        top: 24.5%;
    }

    .mark-germany{
        left: 41.25%;
        top: 15.24%;
        width: 15.5555555556%;
    }

    .germany{
        width: 22.2916666667%;
        left: 37.7%;
        top: 3.5%;
    }

    .mark-luxemburg{
        left: 30.76%;
        top: 30.07%;
        width: 15.5555555556%;
    }

    .luxemburg{
        width: 1.875%;
        left: 37.4%;
        top: 28.9%;
    }

    .mark-netherlands{
        left: 26.18%;
        top: 5.78%;
        width: 15.5555555556%;
    }

    .netherlands{
        width: 9.65277777778%;
        left: 31.8%;
        top: 12%;
    }
`

const BrownText = styled.div`
    width: 100%;
    padding: clamp(12px, ${24 / 768 * 100}vw, 44px) clamp(16px, ${40 / 768 * 100}vw, 64px);
    background-color: var(--color-gold);
    font-weight: 700;
    font-size: clamp(13px, ${27 / 768 * 100}vw, 48px);
    line-height: 117%;
    text-align: center;
    color: var(--color-white);
`
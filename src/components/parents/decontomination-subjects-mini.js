import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from "swiper/modules";

import 'swiper/css';

import Left from './../../resources/left.svg'
import Right from './../../resources/right.svg'

export default function DecontominationSubjectsMini({ last, data: { title, partners } }) {
    return (
        <Wrapper className={last ? 'last' : ''}>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                <Swiper
                    slidesPerView={'auto'}
                    modules={[Navigation, A11y]}
                    navigation={true}
                >
                    {partners?.map(el => (
                        <SwiperSlide>
                            <GatsbyImage className="image" image={el.localFile.childImageSharp.gatsbyImageData} alt={el.altText} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    &.last{
        margin-bottom: var(--section-margin);
    }

    .title{
        margin-bottom: clamp(26px, ${60 / 768 * 100}vw, 96px);
        h1,h2,h3,h4,h5,h6{
            font-weight: 900;
            font-size: clamp(18px, ${48 / 1140 * 100}vw, 56px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            text-align: center;
        }

        p{
            text-align: center;
            font-size: clamp(17px, calc(27vw/7.68), 36px);
            font-weight: 700;
            line-height: 133.333%;
            margin-top: clamp(32px, calc(64vw/7.68), 64px);
        }
    }

    .image{
        width: 100%;
        height: 100%;
        max-width: clamp(100px, calc(150vw/7.68), 300px);
    }
    
    .swiper-wrapper {
      align-items: center;
    }

    .swiper-slide{
        width: fit-content;
        margin-right: clamp(24px, calc(48vw/7.68), 96px);
    }

    .swiper {
        padding-bottom: 96px;
    }

    .swiper-button-prev{
        cursor: pointer;
        position: absolute;
        width: 64px;
        height: 64px;
        background-color: var(--blue-700, #177BC3);
        right: calc(50% + 8px);
        bottom: 0;
        transition: background-color .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

        &::after{
            content: url(${Left});
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 26px;
        }
    }

    .swiper-button-next{
        cursor: pointer;
        position: absolute;
        width: 64px;
        height: 64px;
        background-color: var(--blue-700, #177BC3);
        left: calc(50% + 8px);
        bottom: 0;
        transition: background-color .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

        &::after{
            content: url(${Right});
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 26px;
        }
    }

    .swiper-button-disabled{
        background-color:#177BC399;
    }

    .swiper-notification{
        display: none;
    }
`
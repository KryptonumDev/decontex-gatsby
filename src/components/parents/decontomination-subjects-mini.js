import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage } from "gatsby-plugin-image";
import 'swiper/css';

export default function DecontominationSubjectsMini({ data: { title, partners } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                <Swiper slidesPerView={'auto'}>
                    {partners?.map(el => (
                        <SwiperSlide>
                            <GatsbyImage className="image" image={el.partnerLogo.localFile.childImageSharp.gatsbyImageData} alt={el.partnerLogo.altText} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

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
        max-width: clamp(150px, calc(150vw/7.68), 300px);
    }
    
    .swiper-wrapper {
      align-items: center;
    }

    .swiper-slide{
        width: fit-content;
        margin-right: clamp(24px, calc(48vw/7.68), 96px);
    }
`
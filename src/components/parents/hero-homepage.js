import React from "react"
import styled from "styled-components"
import { ButtonBlue, ButtonOutlined, Container } from './../../styles/style'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Hero({ data: { title, subTitle, link, backgroundImage } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div className="subTitle" dangerouslySetInnerHTML={{ __html: subTitle }}></div>
                    <ButtonsWrapper>
                        {link.map((el, index) => {
                            if (index === 0) {
                                return <ButtonBlue to={el.link.url}>{el.text}</ButtonBlue>
                            }
                            return <ButtonOutlined to={el.link.url}>{el.text}</ButtonOutlined>
                        })}
                    </ButtonsWrapper>
                </Content>
            </Container>
            <ImageWrapper image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: #111315;   
    position: relative;
    overflow: hidden;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: #00000070;
    }
`

const Content = styled.div`
    max-width: 750px;
    position: relative;
    z-index: 1;

    .title{
        h1,h2,h3,h4,h5,h6,p{
            padding-top: clamp(120px, ${220 / 768 * 100}vw, 320px);
            color: var(--color-white);
            text-transform: uppercase;
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
        }
    }

    .subTitle{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
            color: #F3F3F3;
            margin-top: clamp(12px, ${12 / 768 * 100}vw, 32px);
            max-width: 600px;
            color: var(--color-white);
        }
    }

    @media (max-width: 768px) {
        h1,h2,h3,h4,h5,h6,p{
            margin: 0 auto;
            text-align: center;
        }
    }
`

const ButtonsWrapper = styled.div`
    margin-top: clamp(30px, ${60 / 768 * 100}vw, 120px);
    margin-bottom: clamp(120px, ${120 / 768 * 100}vw, 240px);
    display: flex;
    gap: clamp(14px, ${40 / 768 * 100}vw, 40px);

    @media (max-width: 768px){
        margin-bottom: 0;
        a{
            line-height: 122%;
            padding: clamp(16px, ${18 / 768 * 100}vw, 18px) 0;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        }
    }
`

const ImageWrapper = styled(GatsbyImage)`
    position: absolute;
    right: -260px;
    bottom: 0;
    z-index: 0;

    @media (max-width: 768px){
        position: relative;
        left: clamp(-80px, ${80 / 768 * -100}vw, -40px);
        bottom: clamp(-160px, ${160 / 768 * -100}vw, -10px);
        margin-top: clamp(-154px, ${154 / 768 * -100}vw, -10px);
        width: calc(100% + clamp(80px, ${240 / 768 * 100}vw, 240px));
    }

    @media (max-width: 480px) {
        bottom: -10px;
        margin-top: -4px;
    }
`
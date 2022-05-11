import React from "react"
import styled from "styled-components"
import { ButtonBlue, ButtonOutlined, Container } from './../../styles/style'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Hero({ data: { title, subTitle, background } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div className="subTitle" dangerouslySetInnerHTML={{ __html: subTitle }}></div>
                </Content>
            </Container>
            <ImageWrapper image={background.localFile.childImageSharp.gatsbyImageData} alt={background.altText} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    background-color: #111315;   
    position: relative;
    overflow: hidden;
    position: relative;
    overflow: hidden;

    /* &::after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: #00000070;
    } */
`

const Content = styled.div`
    max-width: 820px;
    position: absolute;
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

        h1,h2,h3,h4,h5,h6,p + h1,h2,h3,h4,h5,h6,p{

        }
    }

    @media (max-width: 768px) {
        h1,h2,h3,h4,h5,h6,p{
            margin: 0 auto;
            text-align: center;
        }
    }
`

const ImageWrapper = styled(GatsbyImage)`
    z-index: 0;
`
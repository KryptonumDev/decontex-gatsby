import React from "react"
import styled from "styled-components"
import { ButtonBlue, ButtonOutlined, Container } from './../../styles/style'
import { StructuredText } from 'react-datocms'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Hero({ data: { title, subTitle, links, backgroundImage } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <StructuredText data={title} />
                    <StructuredText data={subTitle} />
                    <ButtonsWrapper>
                        {links.map((el, index) => {
                            if (index === 0) {
                                return <ButtonBlue to={el.slug}>{el.name}</ButtonBlue>
                            }
                            return <ButtonOutlined to={el.slug}>{el.name}</ButtonOutlined>
                        })}
                    </ButtonsWrapper>
                </Content>
            </Container>
            <ImageWrapper image={backgroundImage.gatsbyImageData} alt={backgroundImage.alt} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: #111315;   
    position: relative;
    overflow: hidden;
`

const Content = styled.div`
    max-width: 750px;
    position: relative;
    z-index: 1;

    h1{
        padding-top: 320px;
        color: var(--color-white);
        text-transform: uppercase;
        font-weight: 900;
        font-size: 72px;
        line-height: 82px;
        letter-spacing: -0.015em;
    }

    h2{
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;
        color: #F3F3F3;
        margin-top: 32px;
        max-width: 600px;
        color: var(--color-white);
    }
`

const ButtonsWrapper = styled.div`
    margin-top: 120px;
    margin-bottom: 240px;
    display: flex;
    gap: 40px;
`

const ImageWrapper = styled(GatsbyImage)`
    position: absolute;
    right: -260px;           
    bottom: 0;
    z-index: 0;
`
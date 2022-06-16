import React from "react"
import styled from "styled-components"
import { ButtonBlue, ButtonOutlined, Container, ButtonOutlinedOuter, ButtonBlueOuter } from './../../styles/style'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function     Hero({ data: { title, subTitle, background, links }, position, parent }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                    {subTitle
                        ? <div className="subTitle" dangerouslySetInnerHTML={{ __html: subTitle }}></div>
                        : null}
                    {links
                        ? <Buttons>
                            {links.map((el, index) => {
                                if (index === 0) {
                                    if (links.isouter === null) {
                                        return <ButtonBlueOuter href={el.link}>{el.name}</ButtonBlueOuter>
                                    }
                                    return <ButtonBlue to={el.link}>{el.name}</ButtonBlue>
                                }
                                if (links.isouter === null) {
                                    return <ButtonOutlinedOuter className="outline" href={el.link}>{el.name}</ButtonOutlinedOuter>
                                }
                                return <ButtonOutlined className="outline" to={el.link}>{el.name}</ButtonOutlined>
                            })}
                        </Buttons>
                        : null}
                </Content>
            </Container>
            <ImageWrapper parent={parent} position={position} imgClassName='image' image={background.localFile.childImageSharp.gatsbyImageData} alt={background.altText} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    background-color: #111315;   
    position: relative;
    overflow: hidden;
    min-height: clamp(640px, ${1080 / 768 * 100}vw, 1080px);

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

const Buttons = styled.div`
    display: grid;
    width: fit-content;
    grid-gap: clamp(16px, ${28 / 768 * 100}vw, 40px);
    margin-top: clamp(32px, ${56 / 768 * 100}vw, 80px);
    grid-template-columns: auto auto;

    .outline{
        border-color: var(--color-white) !important;
        color: var(--color-white) !important;
    }

    @media (max-width: 360px) {
        grid-template-columns: 1fr;

        a{
            margin: 0;
        }
    }
`

const Content = styled.div`
    max-width: 980px;
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
    }

    @media (max-width: 768px) {
        h1,h2,h3,h4,h5,h6,p{
        }
    }
`

const ImageWrapper = styled(GatsbyImage)`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;


    @media (max-width: 1800px) {
        ${props => props.parent}
    }

    .image{
        object-position: ${props => props.position};
    }
`
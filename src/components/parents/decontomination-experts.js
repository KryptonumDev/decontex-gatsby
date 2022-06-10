import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonBlue, ButtonOutlined, Container } from "../../styles/style"
import Mark from './../../resources/list-mark.svg'

export default function DecontominationExperts({ data: {title, list, image, textAboveButtons, buttons} }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <Flex mark={Mark}>
                    <div dangerouslySetInnerHTML={{ __html: list }} />
                    <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                </Flex>
                <div className="sub" dangerouslySetInnerHTML={{ __html: textAboveButtons }} />
                <Buttons>
                    {buttons.map((el, index) => {
                        if(index === 0){
                            return <ButtonBlue to={el.url}>{el.text}</ButtonBlue>
                        }
                        return <ButtonOutlined className='black' to={el.url}>{el.text}</ButtonOutlined>
                    })}
                </Buttons>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        h1,h2,h3,h4,h5,h6,p{
            margin-bottom: 80px;
            font-weight: 900;
            font-size: 64px;
            line-height: 112%;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }

    .sub{
        h1,h2,h3,h4,h5,h6,p{
            margin-top: 80px;
            margin-bottom: 40px;
            font-weight: 700;
            font-size: 40px;
            line-height: 120%;
            text-align: center;
        }
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 64px;

    ul{
        display: grid;
        grid-gap: 48px;
        max-width: 750px;
        min-width: 500px;
        li{
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
            padding-left: 50px;
            position: relative;
            &::before{
                content: url(${props => props.mark});
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }

    .image{
        width: 100%;
        max-width: 600px;
        height: fit-content;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;

    .black{
        border-color: black;
        color: black;
    }
`
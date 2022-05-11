import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import Mark from './../../resources/list-mark.svg'

export default function TwoColumnWithTitleAndList({ data: { title, subTitle, text, img } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="subTitle" dangerouslySetInnerHTML={{ __html: subTitle }} />
                <Content>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                    <GatsbyImage image={img.localFile.childImageSharp.gatsbyImageData} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: var(--section-margin);

    .title{
        margin-bottom: 64px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
        }
    }    

    .subTitle{
        margin-bottom: 128px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(27px, ${40 / 768 * 100}vw, 40px);
            line-height: 130%;
        }
    }

`

const Content = styled.div`
    display: grid;
    grid-template-columns: 7.5fr 6fr;
    grid-gap: 72px;

    ul{
        display: grid;
        grid-gap: 32px;
        h1,h2,h3,h4,h5,h6,p,li{
            padding-left: 50px;
            font-weight: 500;
            font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
            position: relative;

            &::before{
                content: url(${Mark});
                position: absolute;
                left: 0;
                top: 6px;
            }
        }
    }
`
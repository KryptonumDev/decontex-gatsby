import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function TwoColumnWithTitleAndImage({ data: { title, subTitle, text, img } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="subTitle" dangerouslySetInnerHTML={{ __html: subTitle }} />
                <Content>
                    <GatsbyImage image={img.localFile.childImageSharp.gatsbyImageData} />
                    <div dangerouslySetInnerHTML={{ __html: text }} />
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    h1,h2,h3,h4,h5,h6,p{
        margin-bottom: 32px;
        font-weight: 500;
        font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
        line-height: 130%;

        &:last-child{
            font-weight: 700;
            font-size: clamp(27px, ${39 / 768 * 100}vw, 39px);
        }
    }
`
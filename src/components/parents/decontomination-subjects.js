import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonOutlined, Container } from "../../styles/style"

export default function DecontominationSubject({ data: { title, text, repeater, repeaterLastElement, img } }) {
    return (
        <Wrapper>
            <Container>
                <TextContent>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div className="subTitle" dangerouslySetInnerHTML={{ __html: text }}></div>
                </TextContent>
                <Repeater>
                    {repeater.map(el => (
                        <Item>
                            <GatsbyImage image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                            <div className="title" dangerouslySetInnerHTML={{ __html: el.title }}></div>
                            <div className="text" dangerouslySetInnerHTML={{ __html: el.text }}></div>
                        </Item>
                    ))}
                    <Item>
                        <div className="title" dangerouslySetInnerHTML={{ __html: repeaterLastElement.text }}></div>
                        <ButtonOutlined to={repeaterLastElement.link.link}>{repeaterLastElement.link.name}</ButtonOutlined>
                    </Item>
                </Repeater>
                <Image image={img.localFile.childImageSharp.gatsbyImageData} alt={img.altText} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--section-margin);
    padding-top: clamp(40px, ${80 / 768 * 100}vw, 120px);
    padding-bottom: clamp(48px, ${96 / 768 * 100}vw, 192px);
    background-color: var(--color-black);
`

const TextContent = styled.div`
    .title{
        margin-bottom: 64px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 1140 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            color: var(--color-white);
            text-align: center;
        }
    }

    .subTitle{
        margin-bottom: 120px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${40 / 768 * 100}vw, 40px);
            line-height: 130%;
            color: var(--color-white);
            text-align: center;
        }
    }
`

const Repeater = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 64px 40px;
    margin-bottom: 120px;
`

const Item = styled.div`
    .title{
        margin-top: 16px;
        margin-bottom: 24px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${40 / 768 * 100}vw, 40px);
            line-height: 130%;
            color: var(--color-white);
        }
    }

    .text{
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 400;
            font-size: clamp(20px, ${20 / 768 * 100}vw, 20px);
            line-height: 150%;
            letter-spacing: 0.005em;
            color: var(--color-white);
        }
    }

    a{
        margin-top: 64px;
    }
`

const Image = styled(GatsbyImage)`
    display: block;
    width: fit-content;
    margin: 0 auto;
`
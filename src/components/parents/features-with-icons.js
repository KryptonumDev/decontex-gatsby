import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Container } from '../../styles/style'

export default function FeaturesWithIcons({ data: { title, rightText, leftText, benefits } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <StructuredText data={title} />
                    <Flex>
                        <span>
                            <StructuredText data={leftText} />
                        </span>
                        <span>
                            <StructuredText data={rightText} />
                        </span>
                    </Flex>
                    <Icons>
                        {benefits.map(el => (
                            <div>
                                {/* <GatsbyImage image={el.icon.gatsbyImageData} /> */}
                                <img src={el.icon.url} alt={el.icon.alt} />
                                <p className="big-m">
                                    {el.name}
                                </p>
                                <p>
                                    {el.text}
                                </p>
                            </div>
                        ))}
                    </Icons>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: clamp(100px, 8.33vw, 160px);
`

const Content = styled.div`
    h2{
        max-width: 870px;
        margin: 0 auto 100px auto;
        font-weight: 800;
        font-size: 72px;
        line-height: 82px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        text-align: center;
    }

`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-bottom: clamp(100px, 8.33vw, 160px);

    p{
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;
        letter-spacing: unset;

    }

`

const Icons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
    text-align: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            margin-bottom: 32px;
        }

        p + p{
            margin-top: 12px;
        }
    }
`
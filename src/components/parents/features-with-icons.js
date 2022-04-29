import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from '../../styles/style'

export default function FeaturesWithIcons({ data: { title, rightText, leftText, icons } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div className='title' dangerouslySetInnerHTML={{ __html: title }} />
                    <Flex>
                        <div dangerouslySetInnerHTML={{ __html: rightText }} />
                        <div dangerouslySetInnerHTML={{ __html: leftText }} />
                    </Flex>
                    <Icons>
                        {icons.map(el => (
                            <div>
                                <img src={el.icon.sourceUrl} alt={el.icon.altText} />
                                <div className="big" dangerouslySetInnerHTML={{ __html: el.name }} />
                                <div className="small" dangerouslySetInnerHTML={{ __html: el.text }} />
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
    .title{
        h1,h2,h3,h4,h5,h6,p{
            max-width: 870px;
            margin: 0 auto 100px auto;
            font-weight: 800;
            font-size: 72px;
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            text-align: center;
        }
    }
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-bottom: clamp(100px, 8.33vw, 160px);

    h1,h2,h3,h4,h5,h6,p{
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

        .big{
            h1,h2,h3,h4,h5,h6,p{
                font-weight: 700;
                font-size: 32px;
                line-height: 42px;
                text-align: center;
            }
        }

        .small{
            margin-top: 12px;
            h1,h2,h3,h4,h5,h6,p{
                font-weight: 400;
                font-size: 20px;
                line-height: 30px;
                text-align: center;
                letter-spacing: 0.005em;
            }
        }
    }
`
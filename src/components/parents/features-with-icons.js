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
                        <div dangerouslySetInnerHTML={{ __html: leftText }} />  
                        <div dangerouslySetInnerHTML={{ __html: rightText }} />
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
    padding-top: var(--section-margin);
`

const Content = styled.div`
    .title{
        h1,h2,h3,h4,h5,h6,p{
            max-width: 870px;
            margin: 0 auto clamp(48px, ${48 / 768 * 100}vw, 100px) auto;
            font-weight: 800;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            text-align: center;

            @media (max-width: 1024px) {
                text-align: left;
                max-width: unset;
            }
        }
    }
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-bottom: var(--section-margin);

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 500;
        font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
        line-height: 130%;
        letter-spacing: unset;
    }

    p+p{
        margin-top: 40px;
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 640px){
        p+p{
            margin-top: 24px;
        }

        grid-gap: 24px;
    }
`

const Icons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: clamp(24px, ${24 / 768 * 100}vw, 40px);
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
                font-size: clamp(21px, ${32 / 768 * 100}vw, 32px);
                line-height: 130%;
                text-align: center;
            }
        }

        .small{
            margin-top: 12px;
            h1,h2,h3,h4,h5,h6,p{
                font-weight: 400;
                font-size: clamp(17px, ${20 / 768 * 100}vw, 20px);
                line-height: 130%;
                text-align: center;
                letter-spacing: 0.005em;
            }
        }
    }

    @media (max-width: 1320px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 64px;
    }

    @media (max-width: 640px){
        grid-template-columns: 1fr;
    }
`
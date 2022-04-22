import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { useInView } from 'react-intersection-observer';

export default function DecontominationSteps({ data: { bottomAnnotation, outfits, steps, subTitle, title } }) {

    const [activeImg, setActiveImg] = useState(1)

    const { ref, inView, entry } = useInView()

    return (
        <Wrapper>
            <Container>
                <Title>
                    <div className="title">
                        <StructuredText data={title} />
                    </div>
                    <div className="sub-title">
                        <StructuredText data={subTitle} />
                    </div>
                </Title>
                <Slider>
                    <OutfitView activeImg={activeImg}>
                        {outfits.map(el => (
                            <div key={el.alt} className="item">
                                <div className="text">
                                    <StructuredText data={el.viewName} />
                                </div>
                                <OutfitImage image={el.img.gatsbyImageData} alt={el.alt} />
                            </div>
                        ))}
                    </OutfitView>
                    <StepView>
                        <div className="track">
                            {steps.map(el => (
                                <div key={el.icon.url} className="item">
                                    <img src={el.icon.url} alt={el.icon.alt} />
                                    <div>
                                        <div className="title">
                                            <StructuredText data={el.title} />
                                        </div>
                                        <div className="text">
                                            <StructuredText data={el.subTitle} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </StepView>
                </Slider>
                <Annotation>
                    <StructuredText data={bottomAnnotation} />
                </Annotation>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: clamp(100px, 8.33vw, 160px);
`

const Slider = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 200px;
`

const OutfitImage = styled(GatsbyImage)`

`

const OutfitView = styled.div`
    position: relative;

    .item{
        position: absolute;
        opacity: 0;
        /* transition: opacity var(--animation-fast); */

        :nth-child(${props => props.activeImg}){
            position: relative;
            opacity: 1;
        }
    }

    .text{
        margin-bottom: 100px;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 48px;
            line-height: 60px;
            text-align: center;

        }
    }
`

const StepView = styled.div`
    max-height: 840px;
    max-width: 750px;
    width: 100%;
    overflow-x: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none;
    }
    
    .track{
        height: max-content;
        display: grid;
        grid-gap: 160px;
    }

    .item{
        display: flex;
        align-items: flex-start;

        img{
            margin-right: 60px;
        }
    }

    .title{
        h1,h2,h3,h4,h5,h6,p {
            font-weight: 700;
            font-size: 32px;
            line-height: 42px;
            margin-bottom: 30px;
        }
    }

    .text{
        h1,h2,h3,h4,h5,h6,p {
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
        }
    }
`

const Title = styled.div`
    .title{
        h1,h2,h3,h4,h5,h6,p {
            font-weight: 900;
            font-size: 72px;
            line-height: 82px;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;

        }
    }

    .sub-title{
        max-width: 1024px;
        margin: 64px auto 180px auto;

        h1,h2,h3,h4,h5,h6,p {
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
            text-align: center;
        }
    }
`

const Annotation = styled.div`
    padding: 72px clamp(120px, 12.5vw, 240px) 72px 120px;
    margin-right: calc(clamp(120px, 12.5vw, 240px) * -1);
    margin-left: auto;
    width: fit-content;
    background-color: var(--color-yellow);

    h1,h2,h3,h4,h5,h6,p {
        color: var(--color-white);
        font-weight: 700;
        font-size: 40px;
        line-height: 52px;
    }
`
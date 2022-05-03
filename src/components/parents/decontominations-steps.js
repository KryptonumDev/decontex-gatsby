import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import DecontominationStep from "../childrens/decontomination-step"

export default function DecontominationSteps({ data: { bottomAnnotation, outfits, steps, subTitle, title } }) {

    const [activeImg, setActiveImg] = useState(1)
    const [activeArr, changeActiveArr] = useState([])

    useEffect(() => {
        console.log(activeArr)
        if (activeArr[0]) {
            setActiveImg(activeArr[0])
        } else {
            setActiveImg(1)
        }
    }, [activeArr])

    return (
        <Wrapper>
            <Container>
                <Title>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                    <div className="sub-title" dangerouslySetInnerHTML={{ __html: subTitle }} />
                </Title>
                <Slider>
                    <OutfitView activeImg={activeImg}>
                        {outfits.map(el => (
                            <div key={el.altText} className="item">
                                <div className="text" dangerouslySetInnerHTML={{ __html: el.viewName }} />
                                <OutfitImage image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.altText} />
                            </div>
                        ))}
                    </OutfitView>
                    <StepView>
                        <div className="track">
                            {steps.map((el, index) => (
                                <DecontominationStep changeActiveArr={changeActiveArr} activeArr={activeArr} activeImg={activeImg} setActiveImg={setActiveImg} el={el} index={index} />
                            ))}
                        </div>
                    </StepView>
                </Slider>
                <Annotation dangerouslySetInnerHTML={{ __html: bottomAnnotation }} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: clamp(60px, ${120 / 768 * 100}vw, 160px);
`

const Slider = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 200px;
`

const OutfitImage = styled(GatsbyImage)`
    max-width: 333px;
`

const OutfitView = styled.div`
    position: sticky;
    top: clamp(60px, ${120 / 768 * 100}vw, 160px);
    height: fit-content;

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
    max-width: 750px;
    width: 100%;

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
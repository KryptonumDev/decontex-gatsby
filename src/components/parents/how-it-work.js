import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function HowItWork({ data: { title, subTitle, backgroundImage, layers } }) {

    const changeCurrentTab = (tabName) => {
        document.querySelectorAll('.tabs').forEach(el => el.classList.remove('active'))
        document.getElementById(tabName).classList.add('active')
        document.getElementById(tabName + '-tab').classList.add('active')
    }

    useEffect(() => {
        document.querySelectorAll('.tabs-0').forEach(el => el.classList.add('active'))
    }, [])

    return (
        <Wrapper>
            <Container>
                <Content>
                    <div>
                        <div className="main-title">
                            <StructuredText data={title} />
                        </div>
                        <div className="sub-title">
                            <StructuredText data={subTitle} />
                        </div>
                        <LayersButtons>
                            {layers.map((el, index) => (
                                <button className={'tabs tabs-' + index} id={el.name.replace(/\s+/g, '-') + '-tab'} onClick={() => { changeCurrentTab(el.name.replace(/\s+/g, '-')) }}><div><img src={el.icon.url} alt={el.icon.alt} /></div>{el.name}</button>
                            ))}
                        </LayersButtons>
                        <LayersContent>
                            {layers.map((el, index) => (
                                <div className={'tabs tabs-' + index} id={el.name.replace(/\s+/g, '-')}>
                                    <div className="main-title">
                                        <StructuredText data={el.layerTitle} />
                                    </div>
                                    <div className="sub-title">
                                        <StructuredText data={el.layerText} />
                                    </div>
                                </div>
                            ))}
                        </LayersContent>
                    </div>
                    <div>
                        <GatsbyImage image={backgroundImage.gatsbyImageData} alt={backgroundImage.alt} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-gap: 40px;

    .main-title{
        max-width: 700px;
        h1,h2,h3,h4,h5,h6{
            text-align: left;
            margin-bottom: 64px;
            font-weight: 700;
            font-size: 64px;
            line-height: 72px;
            letter-spacing: -0.005em;
            text-transform: uppercase;
        }

    }

    .sub-title{
        max-width: 700px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 40px;
            line-height: 52px;
        }
    }
`

const LayersButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 46px;

    button{
        display: flex;
        align-items: center;
        padding: 24px 40px;
        border: 1px solid #111315;
        background-color: transparent;
        box-sizing: border-box;
        width: max-content;
        div{
            height: 36px;
            display: flex;
            align-items: center;

            img{
                display: block;
                margin-right: 12px;
            }
        }

        :nth-child(2){
            margin: 0 -1px;
        }

        &.active{
            border: 5px solid #CE2029;
            padding: 20px 36px;
        }
    }
`

const LayersContent = styled.div`
    position: relative;

    .main-title{
        margin: 56px 0;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
        }

    }

    .sub-title{
        p{
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.005em;

        }
    }

    .tabs{  
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        &.active{
            opacity: 1;
            pointer-events: all;
            position: relative;
        }
    }
`
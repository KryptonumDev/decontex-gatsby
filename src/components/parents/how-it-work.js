import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function HowItWork({ data: { title, subTitle, layersTitle, desctopImage, mobileImage, layers } }) {

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
                        <div className="main-title" dangerouslySetInnerHTML={{ __html: title }} />
                        <div className="sub-title" dangerouslySetInnerHTML={{ __html: subTitle }} />
                        <GatsbyImage image={desctopImage.localFile.childImageSharp.gatsbyImageData} alt={desctopImage.altText} />
                        <div className="layers-title" dangerouslySetInnerHTML={{ __html: layersTitle }} />
                        <LayersWrapper>
                            <LayersButtons>
                                {layers.map((el, index) => (
                                    <button className={'tabs tabs-' + index} id={el.name.replace(/\s+/g, '-') + '-tab'} onClick={() => { changeCurrentTab(el.name.replace(/\s+/g, '-')) }}><div><img src={el.icon.sourceUrl} alt={el.icon.altText} /></div>{el.name}</button>
                                ))}
                            </LayersButtons>
                            <LayersContent>
                                {layers.map((el, index) => (
                                    <div className={'tabs tabs-' + index} id={el.name.replace(/\s+/g, '-')}>
                                        <div className="title" dangerouslySetInnerHTML={{ __html: el.title }} />
                                        <div className="text" dangerouslySetInnerHTML={{ __html: el.text }} />
                                    </div>
                                ))}
                            </LayersContent>
                        </LayersWrapper>
                    </div>
                    <div>
                        {/*  */}
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

    .main-title{
        max-width: 1100px;
        margin: 0 auto;
        h1,h2,h3,h4,h5,h6{
        text-align: center;
            margin-bottom: 64px;
            font-weight: 700;
            font-size: 64px;
            line-height: 72px;
            letter-spacing: -0.005em;
            text-transform: uppercase;
        }

    }

    .sub-title{
        max-width: 1200px;
        margin: 0 auto 64px auto;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 40px;
            line-height: 52px;
            text-align: center;
        }
    }

    .layers-title{
        text-align: center;
        margin-top: 128px;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 40px;
            line-height: 52px;
        }

    }
`

const LayersWrapper = styled.div`
    max-width: 1070px;
    margin: 120px auto 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 56px;
`

const LayersButtons = styled.div`
    display: grid;
    grid-gap: 56px;
    height: min-content;

    button{
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px 40px;
        border: 1px solid #111315;
        background-color: transparent;
        box-sizing: border-box;
        div{
            height: 36px;
            display: flex;
            align-items: center;

            img{
                display: block;
                margin-right: 12px;
            }
        }

        &.active{
            border: 5px solid #CE2029;
            padding: 20px 36px;
        }
    }
`

const LayersContent = styled.div`
    position: relative;

    .title{
        margin: 0 0 32px 0;
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 40px;
            line-height: 52px;
            text-align: left;
        }

    }

    .text{
        p{
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
            text-align: left;

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
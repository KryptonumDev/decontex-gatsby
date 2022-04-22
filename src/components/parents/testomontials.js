import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function Testomontials({ data: { backgroundImage, countries, leftText, persons, rightText, subTitle, title } }) {
    return (
        <Wrapper>
            <Container>
                <Helmet image={backgroundImage.gatsbyImageData} alt={backgroundImage.alt} />
                <Content>
                    <div className="title">
                        <StructuredText data={title} />
                    </div>
                    <div className="grid">
                        <div>
                            <StructuredText data={leftText} />
                        </div>
                        <div>
                            <StructuredText data={rightText} />
                        </div>
                    </div>
                    <div className="sub-title">
                        <StructuredText data={subTitle} />
                    </div>
                    <Grid>
                        <Countries>
                            {countries.map(el => (
                                <div>
                                    <div className="countries-title">
                                        <StructuredText data={el.title} />
                                    </div>
                                    <div className="countries-sub-title">
                                        <StructuredText data={el.subTitle} />
                                    </div>
                                </div>
                            ))}
                        </Countries>
                        <Persons>
                            {persons.map(el => (
                                <div>
                                    <div className="flex">
                                        <Image image={el.img.gatsbyImageData} alt={el.img.alt} />
                                        <div className='person-title'>
                                            <StructuredText data={el.title} />
                                        </div>
                                    </div>
                                    <div className='person-sub-title'>
                                        <StructuredText data={el.subTitle} />
                                    </div>
                                </div>
                            ))}
                        </Persons>
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: clamp(100px, 8.33vw, 160px);
    padding-top: clamp(100px, 8.33vw, 160px);
    padding-bottom: clamp(100px, 8.33vw, 160px);
    background-color: var(--color-black);
    position: relative;
`

const Helmet = styled(GatsbyImage)`
    position: absolute;
    left: clamp(120px,12.5vw,240px);
    top: 0;
    transform: translateY(calc((clamp(100px, 8.33vw, 160px) + 50%) * -1));
`

const Content = styled.div`
    .title{
        margin-bottom: 64px;

        h1,h2,h3,h4,h5,h6,p{
            max-width: 770px;
            font-weight: 900;
            font-size: 72px;
            line-height: 82px;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            color: var(--color-white);
        }
    }

    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
            color: var(--color-white);
        }

    }

    .sub-title{
        margin-top: 32px;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 40px;
            line-height: 52px;
            color: #F3F3F3;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 120px;
    margin-top: 50px;
`

const Countries = styled.div`
    .countries-title{
        margin-bottom: 6px;

        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 700;
            font-size: 32px;
            line-height: 42px;
        }
    }

    .countries-sub-title{
        margin-bottom: 54px;

        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.005em;
        }
    }
`

const Persons = styled.div`
    
    .flex{
        display: grid;
        grid-template-columns: auto auto;
    }

    .person-title{
        margin-bottom: 6px;

        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 700;
            font-size: 32px;
            line-height: 42px;
        }
    }

    .person-sub-title{
        margin-bottom: 54px;
        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.005em;
        }
    }
    
`

const Image = styled(GatsbyImage)`
    width: 80px;
    aspect-ratio: 1/1;
    margin-right: 20px;
`
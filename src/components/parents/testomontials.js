import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function Testomontials({ data: { helmetImg, countries, leftText, persons, rightText, subTitle, title } }) {
    return (
        <Wrapper>
            <LocContainer>
                {helmetImg
                    ? <Helmet image={helmetImg.localFile.childImageSharp.gatsbyImageData} alt={helmetImg.altText} />
                    : null
                }
                <Content>
                    <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
                    <div className="grid">
                        <div className="text" dangerouslySetInnerHTML={{ __html: leftText }} />
                        <div className="text" dangerouslySetInnerHTML={{ __html: rightText }} />
                    </div>
                    <div className="sub-title" dangerouslySetInnerHTML={{ __html: subTitle }} />
                    <Grid>
                        <Countries>
                            {countries.map(el => (
                                <div className="item">
                                    <div className="countries-title" dangerouslySetInnerHTML={{ __html: el.title }} />
                                    <div className="countries-sub-title" dangerouslySetInnerHTML={{ __html: el.text }} />
                                </div>
                            ))}
                        </Countries>
                        <Persons>
                            {persons.map(el => (
                                <div className="item">
                                    <div className="flex">
                                        <Image image={el.img.localFile.childImageSharp.gatsbyImageData} alt={el.img.altText} />
                                        <div className='person-title' dangerouslySetInnerHTML={{ __html: el.title }} />
                                    </div>
                                    <div className='person-sub-title' dangerouslySetInnerHTML={{ __html: el.text }} />
                                </div>
                            ))}
                        </Persons>
                    </Grid>
                </Content>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--section-margin);
    padding-top: clamp(60px, ${80 / 768 * 100}vw, 160px);
    padding-bottom: clamp(45px, ${90 / 768 * 100}vw, 160px);
    background-color: var(--color-black);
    position: relative;

    @media (max-width: 1024px){
        padding-top: clamp(60px, ${240 / 768 * 100}vw, 240px);
    }

    @media (max-width: 480px){
        padding-top: 60px;
    }
`

const LocContainer = styled(Container)`
    @media (max-width: 1024px) {
        position: unset;
    }
`

const Helmet = styled(GatsbyImage)`
    position: absolute;
    left: clamp(120px,12.5vw,240px);
    top: 0;
    transform: translateY(calc((clamp(100px, 8.33vw, 160px) + 50%) * -1));

    @media (max-width: 1024px) {
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: 50% 50%;
    }

    @media (max-width: 768px) {
        max-width: clamp(77px, ${77 / 380 * 100}vw, 232px);
    }

    @media (max-width: 480px) {
        max-width: 77px;
    }
`

const Content = styled.div`
    .title{
        margin-bottom: clamp(24px, ${48 / 768 * 100}vw, 64px);

        h1,h2,h3,h4,h5,h6,p{
            max-width: 770px;
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            color: var(--color-white);
        }
    }

    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: clamp(24px, ${40 / 768 * 100}vw, 40px);

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
            color: var(--color-white);
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }

    }

    .sub-title{
        margin-top: 32px;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${40 / 768 * 100}vw, 40px);
            line-height: 130%;
            color: #F3F3F3;
        }

        @media (max-width: 1024px) {
            margin-top: clamp(48px, ${56 / 768 * 100}vw, 56px);
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 120px;
    margin-top: clamp(24px, ${59 / 768 * 100}vw, 59px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-gap: 48px;
    }
`

const Countries = styled.div`
    .countries-title{
        margin-bottom: 6px;

        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 700;
            font-size: clamp(20px, ${20 / 768 * 100}vw, 32px);
            line-height: 130%;
        }
    }

    .countries-sub-title{

        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 400;
            font-size: clamp(14px, ${20 / 768 * 100}vw, 20px);
            line-height: 130%;
            letter-spacing: 0.005em;
        }
    }

    .item + .item{
        margin-top: clamp(24px, ${48 / 768 * 100}vw, 54px);

    }
`

const Persons = styled.div`
    
    .flex{
        display: grid;
        grid-template-columns: clamp(50px, ${50 / 480 * 100}vw, 80px) auto;
        grid-gap: 20px;
    }

    .person-title{
        margin-bottom: 6px;

        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 700;
            font-size: clamp(17px, ${27 / 768 * 100}vw, 32px);
            line-height: 130%;
        }
    }

    .person-sub-title{
        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 400;
            font-size: clamp(14px, ${20 / 768 * 100}vw, 20px);
            line-height: 130%;
            letter-spacing: 0.005em;
        }
    }

    .item + .item {
        margin-top: 54px;
    }
    
`

const Image = styled(GatsbyImage)`
    width: clamp(50px, ${50 / 480 * 100}vw, 80px);
    aspect-ratio: 1/1;
    margin-right: 20px;

`
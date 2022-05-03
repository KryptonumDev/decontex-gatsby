import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonBlack, Container } from "../../styles/style"

export default function FeaturedWithImg({ data: { backgroundImage, link, text } }) {
    return (
        <OuterWrapper>
            <Wrapper>
                <LocContainer>
                    <Content>
                        <div className="texts" dangerouslySetInnerHTML={{ __html: text }} />
                        <ButtonBlack to={link.url.url}>{link.text}</ButtonBlack>
                    </Content>
                </LocContainer>
                <Image image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
            </Wrapper>
        </OuterWrapper>
    )
}

const OuterWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`

const Wrapper = styled.div`
    margin-top: clamp(60px, ${120 / 768 * 100}vw, 160px);
    padding-top: clamp(40px, ${80 / 768 * 100}vw, 120px);
    padding-bottom: clamp(48px, ${90 / 768 * 100}vw, 90px);
    margin-right: 280px;
    background-color: var(--color-yellow);
    position: relative;

    a{
        margin: 0 auto;
    }
`

const LocContainer = styled(Container)`
    max-width: 1230px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(40px, ${60 / 768 * 100}vw, 100px);
    

    .texts{
        display: grid;
        grid-gap: clamp(16px, ${32 / 768 * 100}vw, 48px);

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${39 / 768 * 100}vw, 39px);
            line-height: 130%;

            small{
                font-weight: 500;
                font-size: clamp(21px, ${32 / 768 * 100}vw, 32px);
                line-height: 130%;

            }
        }

    }

    a{
        height: fit-content;
    }
`

const Image = styled(GatsbyImage)`
    position: absolute;
    right: -424px;
    top: -128px;
    bottom: -128px;
`
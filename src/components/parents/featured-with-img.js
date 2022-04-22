import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { ButtonBlack, Container } from "../../styles/style"

export default function FeaturedWithImg({ data: { backgroundImage, button, leftText } }) {
    return (
        <OuterWrapper>
            <Wrapper>
                <LocContainer>
                    <Content>
                        <div className="texts">
                            <StructuredText data={leftText} />
                        </div>
                        <ButtonBlack to={button[0].slug}>{button[0].name}</ButtonBlack>
                    </Content>
                </LocContainer>
                <Image image={backgroundImage.gatsbyImageData} alt={backgroundImage.alt} />
            </Wrapper>
        </OuterWrapper>
    )
}

const OuterWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;

`

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);
    margin-right: 280px;
    padding-top: clamp(60px, 4.68vw, 90px);
    padding-bottom: clamp(60px, 4.68vw, 90px);
    background-color: var(--color-yellow);
    position: relative;

    a{
        margin: 0 auto;
    }
`

const LocContainer = styled(Container)`
    max-width: 1640px;

`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    

    .texts{
        display: grid;
        grid-gap: 48px;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: 40px;
            line-height: 52px;

            del{
                font-weight: 500;
                font-size: 32px;
                line-height: 42px;

            }
        }

    }

    a{
        height: fit-content;
    }
`

const Image = styled(GatsbyImage)`
    position: absolute;
    right: -280px;
    top: -128px;
    bottom: -128px;
`
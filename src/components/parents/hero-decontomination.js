import React from 'react'
import styled from 'styled-components'
import {
  ButtonBlue,
  ButtonOutlined,
  Container,
  ButtonOutlinedOuter,
  ButtonBlueOuter
} from './../../styles/style'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Hero({
  data: { title, subTitle, background, links },
  position,
  parent
}) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <div
            className='title'
            dangerouslySetInnerHTML={{
              __html: title
            }}></div>
          {subTitle ? (
            <div
              className='subTitle'
              dangerouslySetInnerHTML={{
                __html: subTitle
              }}></div>
          ) : null}
          {links ? (
            <Buttons>
              {links.map((el, index) => {
                if (index === 0) {
                  if (links.isouter === null) {
                    return (
                      <ButtonBlueOuter
                        key={el.name}
                        href={el.link}>
                        {el.name}
                      </ButtonBlueOuter>
                    )
                  }
                  return (
                    <ButtonBlue key={el.name} to={el.link}>
                      {el.name}
                    </ButtonBlue>
                  )
                }
                if (links.isouter === null) {
                  return (
                    <ButtonOutlinedOuter
                      key={el.name}
                      className='outline'
                      href={el.link}>
                      {el.name}
                    </ButtonOutlinedOuter>
                  )
                }
                return (
                  <ButtonOutlined
                    key={el.name}
                    className='outline'
                    to={el.link}>
                    {el.name}
                  </ButtonOutlined>
                )
              })}
            </Buttons>
          ) : null}
        </Content>
      </Container>
      <ImageWrapper
        parent={parent}
        position={position}
        imgClassName='image'
        image={
          background.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={background.altText}
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 2560px;
  margin: 0 auto;
  background-color: #111315;
  position: relative;
  overflow: hidden;
  min-height: clamp(640px, ${(1080 / 768) * 100}vw, 1080px);

  /* &::after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: #00000070;
    } */
`

const Buttons = styled.div`
  display: grid;
  width: fit-content;
  grid-gap: clamp(16px, ${(28 / 768) * 100}vw, 40px);
  margin-top: clamp(32px, ${(56 / 768) * 100}vw, 80px);
  grid-template-columns: auto auto;

  .outline {
    border-color: var(--color-white) !important;
    color: var(--color-white) !important;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;

    a {
      margin: 0;
    }
  }
`

const Content = styled.div`
  max-width: 996px;
  margin-right: 16px;
  position: absolute;
  z-index: 1;

  .title {
    padding-top: clamp(
      160px,
      ${(180 / 1124) * 100}vw,
      320px
    );

    @media(max-width: 1024px) {
      padding-top: clamp(
        120px,
        ${(220 / 1124) * 100}vw,
        320px
      );
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      color: var(--color-white);
      text-transform: uppercase;
      font-weight: 900;
      line-height: 130%;
      letter-spacing: -0.015em;
      font-size: clamp(24px, ${(48 / 1440) * 100}vw, 60px);

      @media(max-width: 1024px) {
        font-size: clamp(24px, ${(60 / 1440) * 100}vw, 60px);
      }
    }
  }

  .subTitle {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 500;
      font-size: clamp(17px, ${(27 / 768) * 100}vw, 28px);
      line-height: 130%;
      color: #f3f3f3;
      margin-top: clamp(12px, ${(12 / 768) * 100}vw, 32px);
      max-width: 600px;
      color: var(--color-white);
    }

    p + p {
      font-weight: 400;
    }
  }
`

const ImageWrapper = styled(GatsbyImage)`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (max-width: 1800px) {
    ${(props) => props.parent}
  }

  .image {
    object-position: ${(props) => props.position};
  }
`

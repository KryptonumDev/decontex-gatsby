import React from 'react'
import styled from 'styled-components'
import { ButtonBlue, Container } from './../../styles/style'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function Hero({
  data: { pageTitle, textUnderTitle, link, backgroundImage }
}) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <div className='title' dangerouslySetInnerHTML={{ __html: pageTitle }} />
          <div className='subTitle' dangerouslySetInnerHTML={{ __html: textUnderTitle }} />
          <ButtonBlue to={link.url}>{link.title}</ButtonBlue>
        </Content>
      </Container>
      <ImageWrapper
        imgClassName='image'
        image={
          backgroundImage.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={backgroundImage.altText}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 2560px;
  margin: 0 auto;
  background-color: #f3f3f3;
  position: relative;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  min-height: clamp(640px, ${(1080 / 768) * 100}vw, 1080px);

  @media (max-width: 1440px) {
    min-height: clamp(640px, ${(1080 / 768) * 100}vw, 900px);
  }

  @media (max-width: 1024px) {
    min-height: clamp(640px, ${(1080 / 768) * 100}vw, 1020px);
  }
`

const Content = styled.div`
  max-width: 950px;
  position: relative;
  z-index: 1;

  @media (max-width: 1600px) {
    max-width: 1200px;
  }

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
      text-transform: uppercase;
      font-weight: 900;
      line-height: 130%;
      letter-spacing: -0.9px;
      font-size: clamp(24px, ${(48 / 1440) * 100}vw, 60px);

      @media(max-width: 1024px) {
        font-size: clamp(24px, ${(60 / 1440) * 100}vw, 60px);
      }
    }
  }

  .subTitle {
    max-width: 800px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 500;
      font-size: clamp(17px, ${(27 / 768) * 100}vw, 36px);
      line-height: 130%;
      margin-top: clamp(12px, ${(12 / 768) * 100}vw, 32px);
      color: var(--black-700, #111315);
    }
  }

  a{
    margin-top: clamp(32px, calc(48vw/7.68), 64px);
    margin-left: 0;
  }
`

const ImageWrapper = styled(GatsbyImage)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 0;

  .image {
    object-position: 100%;
  }

  @media (max-width: 1440px) {
    top: unset;
    left: unset;
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 140%;
  }

  @media (max-width: 768px) {
    width: 160%;
  }
`

import React from 'react'
import styled from 'styled-components'
import { ButtonBlue, Container } from './../../styles/style'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Hero({
  data: { pageTitle, text, backgroundImage, goHomeText },
  home
}) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <div
            className='title'
            dangerouslySetInnerHTML={{
              __html: pageTitle
            }}></div>
          <div
            className='subTitle'
            dangerouslySetInnerHTML={{
              __html: text
            }}></div>
          <ButtonBlue to={home}>{goHomeText}</ButtonBlue>
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

const Wrapper = styled.section`
  max-width: 2560px;
  margin: 0 auto;
  background-color: #111315;
  position: relative;
  overflow: hidden;
  min-height: clamp(640px, ${(1080 / 768) * 100}vw, 1080px);

  a {
    margin: 0 !important;
  }
`

const Content = styled.div`
  max-width: 980px;
  position: absolute;
  z-index: 1;

  .title {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      padding-top: clamp(
        86px,
        ${(180 / 768) * 100}vw,
        320px
      );
      color: var(--color-white);
      text-transform: uppercase;
      font-weight: 900;
      font-size: clamp(27px, ${(48 / 768) * 100}vw, 72px);
      line-height: 130%;
      letter-spacing: -0.015em;

      @media (max-width: 1240px) {
        padding-top: clamp(
          86px,
          ${(120 / 768) * 100}vw,
          320px
        );
      }
    }
  }

  .subTitle {
    margin-top: clamp(16px, ${(16 / 768) * 100}vw, 32px);
    margin-bottom: clamp(24px, ${(24 / 768) * 100}vw, 80px);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 500;
      font-size: clamp(17px, ${(27 / 768) * 100}vw, 32px);
      line-height: 130%;
      color: #f3f3f3;
      max-width: 600px;
      color: var(--color-white);
    }
  }

  @media (max-width: 768px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
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

  @media (max-width: 1540px) {
    top: 30%;
  }

  .image {
    object-position: 100%;
  }

  @media (max-width: 500px) {
    top: 40%;
    .image {
      object-position: 102%;
    }
  }
`

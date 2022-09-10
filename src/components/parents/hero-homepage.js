import React from 'react'
import styled from 'styled-components'
import { Container } from './../../styles/style'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function Hero({
  data: { title, subTitle, link, backgroundImage }
}) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <ButtonsWrapper>
            {link.map((el) => (
              <Item
                key={el.link}
                to={el.link}
                aria-label={el.ariaLabel}>
                <GatsbyImage
                  className='image'
                  image={
                    el.image.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={el.image.altText}
                />
              </Item>
            ))}
          </ButtonsWrapper>
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
`

const Content = styled.div`
  max-width: 750px;
  position: relative;
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
        120px,
        ${(220 / 768) * 100}vw,
        320px
      );
      color: var(--color-white);
      text-transform: uppercase;
      font-weight: 900;
      font-size: clamp(27px, ${(48 / 768) * 100}vw, 72px);
      line-height: 130%;
      letter-spacing: -0.015em;
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
      font-size: clamp(17px, ${(27 / 768) * 100}vw, 32px);
      line-height: 130%;
      color: #f3f3f3;
      margin-top: clamp(12px, ${(12 / 768) * 100}vw, 32px);
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
      margin: 0 auto;
      text-align: center;
    }
  }
`

const ButtonsWrapper = styled.div`
  margin-top: clamp(100px, ${(210 / 768) * 100}vw, 320px);
  margin-bottom: 220px;
  display: flex;
  gap: clamp(18px, ${(18 / 768) * 100}vw, 48px);

  @media (max-width: 768px) {
    margin-bottom: 0;
    a {
      padding: clamp(16px, ${(18 / 768) * 100}vw, 18px) 0;
      width: 100%;
    }
  }
`

const Item = styled(Link)`
  max-width: 500px;
  width: 100%;
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
`

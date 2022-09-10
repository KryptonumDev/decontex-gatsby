import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/style'
import Mark from './../../resources/list-mark-white.svg'

export default function FeaturedJackets({
  data: {
    leftText,
    rightText,
    textFirst,
    textSecond,
    firstJacket,
    secondJacket
  }
}) {
  return (
    <Wrapper>
      <Container>
        <Content mark={Mark}>
          <div className='wrap'>
            <div
              className='left'
              dangerouslySetInnerHTML={{ __html: leftText }}
            />
            <Jackets className='desctop'>
              <div>
                <GatsbyImage
                  className='image'
                  image={
                    firstJacket.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={firstJacket.altText}
                />
                <div
                  className='text'
                  dangerouslySetInnerHTML={{
                    __html: textFirst
                  }}
                />
              </div>
              <div>
                <GatsbyImage
                  className='image'
                  image={
                    secondJacket.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={secondJacket.altText}
                />
                <div
                  className='text'
                  dangerouslySetInnerHTML={{
                    __html: textSecond
                  }}
                />
              </div>
            </Jackets>
          </div>
          <div
            className='right'
            dangerouslySetInnerHTML={{ __html: rightText }}
          />
          <Jackets className='mobile'>
            <div>
              <GatsbyImage
                className='image'
                image={
                  firstJacket.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={firstJacket.altText}
              />
              <div
                className='text'
                dangerouslySetInnerHTML={{
                  __html: textFirst
                }}
              />
            </div>
            <div>
              <GatsbyImage
                className='image'
                image={
                  secondJacket.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={secondJacket.altText}
              />
              <div
                className='text'
                dangerouslySetInnerHTML={{
                  __html: textSecond
                }}
              />
            </div>
          </Jackets>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: clamp(40px, ${(60 / 768) * 100}vw, 110px) 0;
  background-color: var(--color-gold);
  max-width: 2560px;
  margin: 0 auto;
  margin-top: var(--section-margin);
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(60px, ${(60 / 1024) * 100}vw, 100px);

  .wrap {
    width: 100%;
    min-width: 330px;

    @media (max-width: 600px) {
      min-width: unset;
    }
  }

  .left {
    margin-bottom: 64px;
    max-width: 660px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 700;
      font-size: clamp(13px, ${(17 / 768) * 100}vw, 28px);
      line-height: 125%;
      color: var(--color-white);
    }
  }

  .right {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 700;
      font-size: clamp(13px, ${(17 / 768) * 100}vw, 28px);
      line-height: 125%;
      color: var(--color-white);
    }

    ul {
      margin-top: 20px;
      display: grid;
      grid-gap: 24px;

      li {
        font-weight: 700;
        font-size: clamp(13px, ${(17 / 768) * 100}vw, 28px);
        line-height: 125%;
        color: var(--color-white);

        padding-left: 48px;
        position: relative;

        @media (max-width: 600px) {
          padding-left: 30px;
        }

        &::before {
          content: url(${(props) => props.mark});
          position: absolute;
          left: 0;
          top: 0;

          @media (max-width: 860px) {
            transform: scale(0.8);
            top: -3px;
          }

          @media (max-width: 700px) {
            transform: scale(0.8);
            top: -5px;
          }

          @media (max-width: 600px) {
            transform: scale(0.6);
            top: -7px;
            left: -5px;
          }
        }
      }
    }
  }

  @media (max-width: 760px) {
    display: block;
    .left {
      margin-bottom: 24px;
    }
  }
`

const Jackets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  width: fit-content;

  &.mobile {
    display: none;
  }

  .image {
    max-width: 350px;
    width: fit-content;
    height: fit-content;
  }

  .text {
    margin-top: 18px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 700;
      font-size: clamp(13px, ${(17 / 768) * 100}vw, 28px);
      line-height: 125%;
      color: var(--color-white);
      text-align: center;
    }
  }

  @media (max-width: 760px) {
    margin-top: 36px;

    &.mobile {
      display: grid;
    }

    &.desctop {
      display: none;
    }
  }
`

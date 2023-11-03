import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Guarantee({ data: { sectionTitle, text, link, backgroundImage } }) {
  return (
    <Wrapper>
      <Container className="container">
        <div className="content">
          <div className="title" dangerouslySetInnerHTML={{ __html: sectionTitle }} />
          <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
          <ButtonBlue to={link.url}>
            {link.title}
          </ButtonBlue>
        </div>
        <ImageWrapper
          imgClassName='image'
          image={backgroundImage.localFile.childImageSharp.gatsbyImageData}
          alt={backgroundImage.altText}
        />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 2560px;
  margin: clamp(128px, calc(128vw/7.68), 256px) auto 0;
  background-color: #111315;
  position: relative;
  overflow: hidden;
  min-height: clamp(560px, ${(900 / 768) * 100}vw, 980px);
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    min-height: unset;
    padding-top: 48px;
  }

  a{
    margin-left: 0;
  }

  .container{
    position: static;
    height: 100%;
  }

  .content{
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title{
      max-width: 700px;
      >*{
        color: var(--white-100, #F3F3F3);
        font-size: clamp(24px, calc(40vw/7.68), 60px);
        font-weight: 900;
        line-height: 120%;
        letter-spacing: -0.9px;
        text-transform: uppercase;
      }
    }

    .text{
      max-width: 700px;
      margin: clamp(16px, calc(24vw/7.68), 32px) 0 clamp(32px, calc(32vw/7.68), 64px);
      >*{
        color: var(--white-100, #F3F3F3);
        font-size: clamp(17px, calc(27vw/7.68), 36px);
        font-style: normal;
        font-weight: 700;
        line-height: 133.333%;
      }
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

  @media (max-width: 768px) {
    position: relative;
    right: -40px;
    left: -40px;
    aspect-ratio: 1/1;
    width: calc(100% + 80px);
    top: unset;

    img{
      object-position: right;
    }
  }

  @media (max-width: 480px) {
    width: calc(100% + 32px);
    right: -16px;
    left: -16px;

  }

`
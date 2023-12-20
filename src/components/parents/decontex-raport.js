import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Raport({ data: { title, text, image, textUnderImage, downloadRaportText, downloadRaportFileButtonText, raportFile, raportImage } }) {
  return (
    <Wrapper>
      <Container>
        {(title && text && image) && (
          <>
            <div className="flex">
              <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
              <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
            <div className="sub-title" dangerouslySetInnerHTML={{ __html: textUnderImage }} />
          </>
        )}
        <RaportPart>
          <div className="content">
            <div dangerouslySetInnerHTML={{ __html: downloadRaportText }} />
            <ButtonBlue as='a' href={raportFile.localFile.publicURL}>
              {downloadRaportFileButtonText}
            </ButtonBlue>
          </div>
          <GatsbyImage layout='fixed' className="rap" image={raportImage.localFile.childImageSharp.gatsbyImageData} alt={raportImage.altText} />
        </RaportPart>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: clamp(128px, calc(128vw/7.68), 256px) auto 0;
  .flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(24px, calc(32vw/7.68), 32px);

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .title{
    >* {
      color: var(--black-700, #111315);
      font-size: clamp(24px, calc(40vw/7.68), 60px);
      font-weight: 900;
      line-height: 120%;
      letter-spacing: -0.9px;
      text-transform: uppercase;
    }
  }

  .text{
    >*{
      color: var(--black-700, #111315);
      font-size: clamp(17px, calc(19vw/7.68), 20px);
      font-weight: 600;
      line-height: 160%;
    }
  }

  .sub-title{
    max-width: 950px;
    margin: clamp(32px, calc(48vw/7.68), 96px) auto 0;

    >*{
      color: var(--black-700, #111315);
      text-align: center;
      font-size: clamp(17px, calc(21vw/7.68), 28px);
      font-weight: 700;
      line-height: 142.857%;
    }
  }

  .image{
    margin-top: clamp(32px, calc(48vw/7.68), 96px);
  }
`

const RaportPart = styled.div`
  margin-top: clamp(32px, calc(48vw/7.68), 192px);
  background: var(--black-700, #111315);

  display: grid;
  grid-template-columns: 1fr auto;
  gap: clamp(48px, calc(64vw/7.68), 80px);
  padding: 0 clamp(42px, calc(64vw/7.68), 100px);
  height: fit-content;
  align-items: center;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }

  .content{
    height: fit-content;
    padding: 30px 0;
    @media (max-width: 1080px) {
      padding-top: clamp(24px, calc(64vw/7.68), 64px);
      padding-bottom: 0;
    }

    >div >*+*{
      margin-top: 32px;
    }

    h1,h2,h3,h4,h5,h6{
      color: var(--white-100, #F3F3F3);
      font-size: clamp(17px, calc(27vw/7.68), 36px);
      font-weight: 700;
      line-height: 133.333%;
    }

    p{
      color: var(--white-100, #F3F3F3);
      font-size: clamp(14px, calc(24vw/7.68), 26px);
      font-weight: 500;
      line-height: 146.154%;
    }

    a{
      margin-top: clamp(32px, calc(48vw/7.68), 64px);
      padding: 23px 0;
      width: 100%;
      text-align: center;
      max-width: 450px;
    }
  }

  .rap{
    position: relative;
    margin-top: -64px;
    height: calc(100% + 64px);

    @media (max-width: 1080px) {
      height: auto;
      width: fit-content;
      margin-top: 0;
    }
  }
`
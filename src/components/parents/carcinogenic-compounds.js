import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image"

export default function CarcinogenicCompounds({ data: { sectionTitle, textUnderTitle, imageUnderText } }) {
  return (
    <Wrapper>
      <Container>
        <div className="title" dangerouslySetInnerHTML={{ __html: sectionTitle }} />
        {textUnderTitle && <div className="text" dangerouslySetInnerHTML={{ __html: textUnderTitle }} />}
        <GatsbyImage image={imageUnderText.localFile.childImageSharp.gatsbyImageData} alt={imageUnderText.altText} />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: var(--section-margin);

  .title{
    text-align: center;
    max-width: 950px;
    margin: 0 auto;
    margin-bottom: clamp(16px, ${16 / 768 * 100}vw, 24px);
    >*{
        font-weight: 900;
        font-size: clamp(24px, ${40 / 768 * 100}vw, 64px);
        line-height: 120%;
        letter-spacing: -0.9px;
        text-transform: uppercase;
    }
  }

  .text{
    max-width: 706px;
    margin: 0 auto 24px;
    text-align: center;

    >*{
      font-weight: 500;
      font-size: clamp(17px, ${17 / 768 * 100}vw, 26px);
      line-height: 125%;
    }
  }
`
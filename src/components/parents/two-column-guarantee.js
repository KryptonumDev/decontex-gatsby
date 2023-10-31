import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumns({ data }) {
  return (
    <Wrapper>
      <Container className="container">
        {data.map((el, i) => (
          <Flex className={i % 2 === 0 ? 'alt' : ''} key={i}>
            <GatsbyImage className="image" alt={el.image.altText} image={el.image.localFile.childImageSharp.gatsbyImageData} />
            <div className="content" dangerouslySetInnerHTML={{ __html: el.content }} />
          </Flex>
        ))}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: clamp( 64px, calc(96vw/7.68), 192px);
  .container{
    display: grid;
    gap: clamp(64px, calc(128vw/7.68), 128px);
  }

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
        text-transform: uppercase;
        font-weight: 900;
        font-size: clamp(24px, ${(40 / 768) * 100}vw, 56px);
        line-height: 130%;
        letter-spacing: -0.015em;
        text-align: center;
      }
    }
`

const Flex = styled.div`
  display: grid;
  align-items: center;
  gap: clamp(32px, calc(48vw/7.68), 120px);
  grid-template-columns:  700fr 620fr;
  grid-template-areas: 
  'content image';

  @media (max-width: 1024px) {
    grid-template-areas: 
    'image'
    'content';
    grid-template-columns: 1fr;

    .image{
      margin-left: auto;
    }
  }

  .image{
    grid-area: image;
  }

  .content{
    grid-area: content;

    h1,h2,h3,h4,h5,h6{
      font-size: clamp(21px, calc(38vw/7.68), 44px);
      font-weight: 700;
      line-height: 127.273%;
      text-transform: uppercase;
      margin-bottom: clamp(24px, calc(32vw/7.68), 48px);
    }

    p{
      font-family: Inter;
      font-size: clamp(17px, calc(24vw/7.68), 26px);
      font-style: normal;
      font-weight: 500;
      line-height: 146.154%;
    }

    p+p{
      margin-top: clamp(16px, calc(24vw/7.68), 32px);
    }
  }

  &.alt{
    grid-template-columns: 620fr 700fr;
    grid-template-areas: 
    'image content';

    @media (max-width: 1024px) {
      grid-template-areas: 
      'image'
      'content';
      grid-template-columns: 1fr;

      .image{
        margin-right: auto;
        margin-left: 0;
      }
    }
  }
`
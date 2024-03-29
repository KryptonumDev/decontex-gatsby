import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/style'

export default function Technologies({
  data: { title, repeater }
}) {
  return (
    <Wrapper>
      <Container>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: title }}></div>
        <Repeater>
          {repeater.map((el) => (
            <Item key={el.text}>
              <GatsbyImage
                className='image'
                image={
                  el.img.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={el.img.altText}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: el.text
                }}
              />
            </Item>
          ))}
        </Repeater>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 2560px;
  margin: 0 auto;
  margin-top: var(--section-margin);
  padding-top: clamp(40px, ${(80 / 768) * 100}vw, 144px);
  padding-bottom: clamp(48px, ${(96 / 768) * 100}vw, 160px);
  background-color: var(--color-black);

  .title {
    margin: 0 auto;
    text-align: center;
    margin-bottom: clamp(
      36px,
      ${(36 / 768) * 100}vw,
      128px
    );
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
      font-size: clamp(19px, ${(32 / 768) * 100}vw, 52px);
      line-height: 130%;
      letter-spacing: -0.015em;
    }
  }
`

const Repeater = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 40px;

  .image {
    max-width: clamp(64px, ${(80 / 768) * 100}vw, 90px);
    width: fit-content;
    margin: 0 auto;
    display: block;
  }
`

const Item = styled.div`
  width: calc(${100 / 3}% - 27px);
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 32px;
    font-weight: 700;
    font-size: clamp(17px, ${(24 / 1140) * 100}vw, 32px);
    color: var(--color-white);
    line-height: 130%;
    text-align: center;
  }
  img {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    width: calc(${100 / 2}% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

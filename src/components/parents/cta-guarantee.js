import React from 'react'
import styled from 'styled-components'
import { ButtonBlack, Container } from '../../styles/style'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Cta({ data: { sectionTitle, link, image } }) {
  return (
    <Wrapper>
      <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
      <Tile>
        <Container>
          <div
            className='title'
            dangerouslySetInnerHTML={{ __html: sectionTitle }}></div>
          <div className='button'>
            <ButtonBlack to={link.url}>
              {link.title}
            </ButtonBlack>
          </div>
        </Container>
      </Tile>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: clamp( 64px, calc(96vw/7.68), 192px);
`

const Tile = styled.div`
  max-width: 2560px;
  margin: 0 auto;
  margin-top: var(--section-margin);
  padding-top: clamp(40px, ${(80 / 768) * 100}vw, 100px);
  padding-bottom: clamp(48px, ${(90 / 768) * 100}vw, 90px);
  background-color: var(--color-gold);

  .title {
    max-width: 1194px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 48px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-size: clamp(17px, calc(24vw/7.68), 44px);
      font-weight: 700;
      line-height: 130%;
      color: var(--color-white);
      text-transform: uppercase;
    }
  }

  .button {
    width: fit-content;
    margin: 0 auto;

    a {
      color: #e8d07b;
    }
  }
`

const Image = styled(GatsbyImage)`
    display: block;
    max-width: fit-content;
    width: 100%;
    height: fit-content;
    margin: 0 auto;
`
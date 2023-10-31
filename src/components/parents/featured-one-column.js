import React from 'react'
import styled from 'styled-components'
import { ButtonBlack, Container } from '../../styles/style'

export default function FeaturedOneColumn({
  data: { text, platesUnderTitle }
}) {
  return (
    <Wrapper>
      <Container>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className='flex'>
          {platesUnderTitle.map(el => (
            <div className='item'>
              <img src={el.icon.localFile.publicURL} alt={el.icon.altText}/>
              <p>{el.textUnderIcon}</p>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 2560px;
  margin: 0 auto;
  margin-top: var(--section-margin);
  padding-top: clamp(40px, ${(80 / 768) * 100}vw, 100px);
  padding-bottom: clamp(48px, ${(90 / 768) * 100}vw, 90px);
  background-color: var(--color-blue);

  .title {
    max-width: 1024px;
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
      font-size: clamp(24px, calc(40vw/7.68), 60px);
      font-weight: 900;
      line-height: 130%;
      color: var(--color-white);
    }
  }

  .flex {
    max-width: 940px;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    display: grid;
    gap: clamp(16px, calc(20vw/7.68), 40px);

    @media (max-width: 580px) {
      grid-template-columns: 1fr;
    }

    .item{
      padding: clamp(16px, calc(24vw/7.68), 32px);
      background: var(--blue-800, #0864A6);
      display: grid;
      grid-template-rows: auto 1fr;
      gap: clamp(8px, calc(16vw/7.68), 16px);

      @media (max-width: 580px) {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto;

        p{
          margin-top: 1px;
        }
      }

      img{
        width: clamp(24px, calc(40vw/7.68), 40px);
        height: clamp(24px, calc(40vw/7.68), 40px);
      }

      p{
        color: var(--white-100, #F3F3F3);
        font-size: clamp(17px, calc(24vw/7.68), 25px);
        font-weight: 500;
        line-height: 146.154%;
      }
    }
  }
`

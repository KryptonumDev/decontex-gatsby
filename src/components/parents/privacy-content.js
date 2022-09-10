import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/style'
import Mark from './../../resources/list-mark.svg'
import MarkSmall from './../../resources/list-mark-small.svg'

export default function PrivacyContent({
  data: { columns, contactPrivacy }
}) {
  return (
    <Wrapper>
      <Container>
        <Content mark={Mark} markSmall={MarkSmall}>
          <div
            dangerouslySetInnerHTML={{
              __html: columns.leftColumn
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: columns.rightColumn
            }}
          />
        </Content>
        <Contact>
          <p>{contactPrivacy.contactText}</p>
          <a href={'mailto:' + contactPrivacy.contactMail}>
            {contactPrivacy.contactMail}
          </a>
        </Contact>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: clamp(60px, ${(120 / 768) * 100}vw, 180px);
  padding-bottom: clamp(
    75px,
    ${(120 / 768) * 100}vw,
    192px
  );
  max-width: 2560px;
  margin: 0 auto;
`

const Contact = styled.div`
  margin: clamp(32px, ${(48 / 768) * 100}vw, 64px) auto 0
    auto;
  max-width: 450px;
  p {
    margin-bottom: clamp(0px, ${(15 / 768) * 100}vw, 30px);
    font-weight: 700;
    font-size: clamp(17px, ${(17 / 768) * 100}vw, 32px);
    line-height: 125%;
    text-align: center;
  }

  a {
    color: var(--color-blue);
    display: block;
    text-align: center;
    font-weight: 700;
    font-size: clamp(17px, ${(17 / 768) * 100}vw, 32px);
    line-height: 135%;
    letter-spacing: 0.005em;
    text-transform: unset;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 44px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }

  div {
    display: grid;
    grid-gap: 30px;
    height: fit-content;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    font-size: clamp(13px, ${(17 / 768) * 100}vw, 32px);
    line-height: 130%;
  }

  p {
    font-size: clamp(12px, ${(16 / 768) * 100}vw, 20px);
    line-height: 130%;

    a {
      font-size: inherit;
      line-height: inherit;
      color: var(--color-blue);
      word-break: break-word;
      text-transform: unset !important;
    }
  }

  p + h1,
  p + h2,
  p + h3,
  p + h4,
  p + h5,
  p + h6 {
    margin-top: 32px;
  }

  ul {
    display: grid;
    grid-gap: 16px;

    li {
      font-size: clamp(12px, ${(16 / 768) * 100}vw, 20px);
      padding-left: 44px;
      position: relative;

      &::before {
        content: url(${(props) => props.mark});
        position: absolute;
        left: 0;
        top: 0;
        transform: scale(0.8) translateY(-5px);

        @media (max-width: 768px) {
          transform: scale(0.7) translateY(-5px);
        }

        @media (max-width: 640px) {
          transform: scale(0.7) translateY(-12px);
        }
      }

      ul {
        margin: 16px 0 0 0;
        li {
          font-size: clamp(
            11px,
            ${(12 / 768) * 100}vw,
            13px
          );
          padding-left: 32px;

          &::before {
            content: url(${(props) => props.markSmall});
            transform: scale(0.5) translateY(-50%);

            @media (max-width: 768px) {
              transform: scale(0.4) translateY(-50%);
            }
          }
        }
      }

      em {
        color: inherit;
        margin-left: 30px;
        font-weight: 400;
      }

      strong {
        color: inherit;
        margin-bottom: 4px;
      }
    }
  }
`

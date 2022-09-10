import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/style'
import JobForm from '../childrens/forms/job-form'
import IconBlue from './../../resources/icon.png'
import IconGolden from './../../resources/icon-golden.png'
import IconBlack from './../../resources/icon-black.png'

const icons = {
  blue: IconBlue,
  golden: IconGolden,
  black: IconBlack
}

export default function JobOffer({
  data: {
    jobOfferSectionTitle,
    jobTitle,
    jobPlace,
    textParts,
    divider,
    submitForm
  }
}) {
  return (
    <Wrapper>
      <Container>
        <h2
          className='section-title'
          dangerouslySetInnerHTML={{
            __html: jobOfferSectionTitle
          }}
        />
        <div
          className='main-text'
          dangerouslySetInnerHTML={{ __html: jobTitle }}
        />
        <div className='place'>
          <svg
            width='34'
            height='48'
            viewBox='0 0 34 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.9969 34.92C21.1569 31.56 24.2969 28.33 26.4169 25.23C28.5369 22.13 29.5969 19.24 29.5969 16.56C29.5969 14.2 29.1669 12.2 28.3069 10.56C27.4469 8.92 26.3869 7.58 25.1269 6.54C23.8669 5.5 22.4969 4.75 21.0169 4.29C19.5369 3.83 18.1969 3.6 16.9969 3.6C15.7969 3.6 14.4569 3.83 12.9769 4.29C11.4969 4.75 10.1269 5.5 8.86687 6.54C7.60687 7.58 6.54687 8.92 5.68687 10.56C4.82687 12.2 4.39687 14.2 4.39687 16.56C4.39687 19.24 5.45687 22.13 7.57687 25.23C9.69687 28.33 12.8369 31.56 16.9969 34.92ZM16.9969 39.48C11.5169 35.36 7.44687 31.42 4.78687 27.66C2.12687 23.9 0.796875 20.2 0.796875 16.56C0.796875 13.84 1.28688 11.45 2.26688 9.39C3.24688 7.33 4.51687 5.6 6.07687 4.2C7.63687 2.8 9.37687 1.75 11.2969 1.05C13.2169 0.35 15.1169 0 16.9969 0C18.8769 0 20.7769 0.35 22.6969 1.05C24.6169 1.75 26.3569 2.8 27.9169 4.2C29.4769 5.6 30.7469 7.33 31.7269 9.39C32.7069 11.45 33.1969 13.84 33.1969 16.56C33.1969 20.2 31.8669 23.9 29.2069 27.66C26.5469 31.42 22.4769 35.36 16.9969 39.48ZM16.9969 20.4C18.1569 20.4 19.1469 19.99 19.9669 19.17C20.7869 18.35 21.1969 17.36 21.1969 16.2C21.1969 15.04 20.7869 14.05 19.9669 13.23C19.1469 12.41 18.1569 12 16.9969 12C15.8369 12 14.8469 12.41 14.0269 13.23C13.2069 14.05 12.7969 15.04 12.7969 16.2C12.7969 17.36 13.2069 18.35 14.0269 19.17C14.8469 19.99 15.8369 20.4 16.9969 20.4ZM0.796875 48V44.4H33.1969V48H0.796875Z'
              fill='#928367'
            />
          </svg>
          <div
            dangerouslySetInnerHTML={{ __html: jobPlace }}
          />
        </div>
      </Container>
      <div>
        {textParts.map((el) => (
          <Item icon={icons[el.iconColourInList]}>
            <Container>
              <div
                className='title'
                dangerouslySetInnerHTML={{
                  __html: el.partTitle
                }}
              />
              <div
                className='text'
                dangerouslySetInnerHTML={{
                  __html: el.partContent
                }}
              />
            </Container>
          </Item>
        ))}
      </div>
      <Divider>
        <Container>
          <div
            className='title'
            dangerouslySetInnerHTML={{
              __html: divider.title
            }}
          />
          <div
            className='text'
            dangerouslySetInnerHTML={{
              __html: divider.text
            }}
          />
        </Container>
      </Divider>
      <Form>
        <Container>
          <div
            className='title'
            dangerouslySetInnerHTML={{
              __html: submitForm.title
            }}
          />
          <div className='form'>
            <JobForm data={submitForm} lang='en' />
          </div>
        </Container>
      </Form>
    </Wrapper>
  )
}

const Form = styled.div`
  background: #07438a;
  padding: clamp(48px, ${(70 / 768) * 100}vw, 96px) 0;
  overflow: hidden;

  .form {
    max-width: 680px;
    margin: 0 auto;
  }

  .title {
    margin-bottom: clamp(32px, ${(70 / 768) * 100}vw, 80px);
    * {
      text-align: center;
      font-weight: 700;
      font-size: clamp(17px, ${(36 / 768) * 100}vw, 64px);
      line-height: 112%;
      letter-spacing: -0.015em;
      @media (max-width: 640px) {
        font-weight: 600;
        letter-spacing: 0;
      }
      text-transform: uppercase;
      color: #f3f3f3;
    }
  }
`

const Divider = styled.div`
  padding: clamp(40px, ${(70 / 768) * 100}vw, 80px) 0
    clamp(40px, ${(70 / 768) * 100}vw, 64px) 0;
  .title {
    margin-bottom: clamp(24px, ${(70 / 768) * 100}vw, 64px);
    * {
      font-weight: 700;
      font-size: clamp(21px, ${(36 / 768) * 100}vw, 64px);
      line-height: 112%;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      text-align: center;
      color: #f3f3f3;
      @media (max-width: 640px) {
        text-align: left;
      }
    }
  }

  .text {
    * {
      font-weight: 600;
      font-size: clamp(17px, ${(24 / 768) * 100}vw, 40px);
      line-height: 120%;
      text-align: center;
      color: #f3f3f3;
      @media (max-width: 640px) {
        text-align: left;
        line-height: 140%;
      }
    }
    a {
      text-transform: lowercase;
    }
  }
`

const Wrapper = styled.section`
  padding-top: var(--section-margin);
  background: #111315;

  .section-title {
    font-weight: 800;
    @media (max-width: 640px) {
      font-weight: 700;
    }
    font-size: clamp(27px, ${(44 / 768) * 100}vw, 64px);
    line-height: 114%;
    text-align: center;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: var(--color-yellow);
    margin-bottom: clamp(32px, ${(40 / 768) * 100}vw, 48px);
  }

  .main-text {
    * {
      font-weight: 600;
      @media (max-width: 640px) {
        font-weight: 700;
      }
      font-size: clamp(27px, ${(44 / 768) * 100}vw, 56px);
      line-height: 114%;
      text-align: center;
      letter-spacing: -0.005em;
      text-transform: uppercase;
      color: #f3f3f3;
    }
  }

  .place {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    svg {
      margin-right: 12px;

      @media (max-width: 640px) {
        transform: scale(0.7);
      }
    }
    * {
      font-weight: 500;
      @media (max-width: 640px) {
        font-weight: 600;
      }
      font-size: clamp(17px, ${(30 / 768) * 100}vw, 40px);
      line-height: 120%;
      color: #f3f3f3;
    }
  }
`

const Item = styled.div`
  margin-top: clamp(40px, ${(70 / 768) * 100}vw, 80px);

  .title {
    text-align: center;
    margin-bottom: 40px;
    * {
      color: #f3f3f3;
      font-weight: 600;
      font-size: clamp(21px, ${(44 / 768) * 100}vw, 56px);
      line-height: 114%;
      letter-spacing: -0.005em;
      text-transform: uppercase;
    }
    @media (max-width: 640px) {
      margin-bottom: 24px;
      * {
        font-weight: 700;
        text-align: left;
      }
    }
  }

  .text {
    columns: 2;
    column-gap: 40px;

    @media (max-width: 768px) {
      columns: 1;
    }

    p {
      margin-bottom: 32px;
      @media (max-width: 640px) {
        margin-bottom: 16px;
      }
      break-inside: avoid;
      font-weight: 400;

      span {
        font-weight: 600;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul,
    ol {
      li {
        margin-bottom: 32px;
        padding-left: 49px;
        @media (max-width: 640px) {
          margin-bottom: 16px;
          padding-left: 36px;
        }
        position: relative;
        break-inside: avoid;
        font-weight: 400;

        &::before {
          content: url(${(props) => props.icon});
          position: absolute;
          left: 0;
          @media (max-width: 876px) {
            transform: scale(0.7);
          }
          @media (max-width: 776px) {
            top: -4px;
          }
        }
      }
    }
    * {
      color: #f3f3f3;
      font-weight: 400;
      font-size: clamp(16px, ${(21 / 768) * 100}vw, 32px);
      line-height: 131%;
    }
  }

  &:last-child {
    padding: clamp(40px, ${(70 / 768) * 100}vw, 120px) 0;
    background: #928367;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  }
`

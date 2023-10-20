import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/style'
import ContactForm from '../childrens/forms/contact-form'

export default function Contact({
  data: { title, text, form, background },
  contactPage,
  lang
}) {
  return (
    <Wrapper contactPage={contactPage} id='contact'>
      <Container>
        <Content>
          <div>
            <div
              className='title'
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div
              className='other'
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
          <div className='form'>
            <ContactForm data={form} lang={lang} />
          </div>
        </Content>
      </Container>
      <GatsbyImage
        className='bg'
        image={
          background.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={background.altText}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 2560px;
  margin: 0 auto;
  /* margin-top: ${(props) =>
    props.contactPage
      ? 'none'
      : 'var(--section-margin)'}; */
  padding-top: ${(props) =>
    props.contactPage
      ? `clamp(100px, ${(200 / 768) * 100}vw, 300px)`
      : `clamp(36px, ${(72 / 768) * 100}vw, 160px)`};
  padding-bottom: clamp(
    48px,
    ${(120 / 768) * 100}vw,
    160px
  );
  background-color: var(--color-black);
  position: relative;

  .bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    img {
      mix-blend-mode: screen;
    }
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  .title {
    margin-bottom: clamp(32px, ${(40 / 768) * 100}vw, 40px);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6
    {
      font-weight: 900;
      font-size: clamp(27px, ${(48 / 768) * 100}vw, 72px);
      line-height: 130%;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      color: var(--color-white);
    }

    p{
      font-weight: 500;
      font-size: clamp(20px, ${(20 / 768) * 100}vw, 32px);
      line-height: 130%;
      color: var(--color-white);
      margin-top: 16px;
    }
  }
  .other {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 500;
      font-size: clamp(20px, ${(20 / 768) * 100}vw, 32px);
      line-height: 130%;
      color: var(--color-white);
    }
  }

  .form {
    max-width: 600px;
    width: 100%;
  }

  @media (max-width: 1024px) {
    display: block;
    text-align: center;

    .title {
      text-align: left;
    }

    .other {
      text-align: left;
      margin-bottom: 40px;
    }

    .form {
      margin: 0 auto;
    }
  }
`

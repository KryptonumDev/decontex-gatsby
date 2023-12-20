import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function DecontominationExpertsAlt({ data: { title, citeUnderTitle, citeBackground,
  partTitle, leftTextUnderTitle, rightTextUnderTitle, subTitleAbovePlates, plates, textUnderPlates } }) {
  return (
    <Wrapper>
      <Container>
        <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
      </Container>
      <Cite>
        <svg width="135" height="114" viewBox="0 0 135 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M135 0V31.5458C135 47.9351 133.04 61.4962 129.12 72.229C125.2 82.8168 118.376 91.8092 108.648 99.2061C99.0652 106.458 88.1758 111.389 75.9797 114V88.5458C84.546 83.7595 89.4099 77.2328 90.5715 68.9657H75.9797V0H135ZM59.0203 0V31.5458C59.0203 47.9351 57.0602 61.4962 53.14 72.229C49.2199 82.8168 42.3959 91.8092 32.668 99.2061C23.0854 106.458 12.1961 111.389 0 114V88.5458C8.71148 83.7595 13.648 77.2328 14.8095 68.9657H0V0H59.0203Z" fill="#33383D" />
        </svg>
        <Container>
          <div className="content" dangerouslySetInnerHTML={{ __html: citeUnderTitle }} />
        </Container>
        <GatsbyImage className="image" image={citeBackground.localFile.childImageSharp.gatsbyImageData} alt={citeBackground.altText} />
      </Cite>
      <Container>
        <Text>
          <div className="title_" dangerouslySetInnerHTML={{ __html: partTitle }} />
          <div className="flex">
            <div className="text_" dangerouslySetInnerHTML={{ __html: leftTextUnderTitle }} />
            <div className="text_" dangerouslySetInnerHTML={{ __html: rightTextUnderTitle }} />
          </div>
          <h3 className="subtitle_">{subTitleAbovePlates}</h3>
          <Grid>
            {plates.map(el => (
              <Item key={el.benefitText}>
                <img className="image" src={el.plateIcon.localFile.publicURL} alt={el.plateIcon.altText} />
                <div className="plate-content" dangerouslySetInnerHTML={{ __html: el.plateContent }} />
              </Item>
            ))}
          </Grid>
          <div className="text_ sub_" dangerouslySetInnerHTML={{ __html: textUnderPlates }} />
        </Text>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        h1,h2,h3,h4,h5,h6,p{
            margin-bottom: clamp(24px, ${48 / 768 * 100}vw, 80px);
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 64px);
            line-height: 112%;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;

            @media (max-width: 480px) {
                text-align: left;
            }
        }
    }

    .sub{
        h1,h2,h3,h4,h5,h6,p{
            margin-top: clamp(24px, ${48 / 768 * 100}vw, 80px);
            margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 40px);
            font-weight: 700;
            font-size: clamp(17px, ${32 / 768 * 100}vw, 40px);
            line-height: 120%;
            text-align: center;
        }
    }

    .sub-title{
        >*{
            font-size: clamp(24px, calc(44vw/7.68), 44px);
            font-style: normal;
            font-weight: 700;
            line-height: 125%;
            text-transform: uppercase;
        }
    }
`


const Cite = styled.div`
    margin: clamp(24px, calc(48vw/7.68), 64px) auto 0 auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;
    background: #000;
    max-width: 1920px;
    width: 100%;
    background-color: #080808;

    svg{
        left: clamp(16px, calc(40vw/7.68), 64px);
        top: clamp(16px, calc(32vw/7.68 ), 64px);
        position: absolute;
        z-index: 2;
        width: clamp(96px, calc(96vw/7.68), 135px);
        height: fit-content;
    }

    .image{
        position: absolute;
        z-index: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        min-width: 1024px;
        mix-blend-mode: lighten;

        img{
            object-position: top;
        }

        @media (max-width: 480px) {
            position: relative;
            left: 100%;
            transform: translateX(-100%);
        }
        @media (max-width: 360px) {
            min-width: 840px;
        }
    }

    .content{
        padding: clamp(80px, calc(80vw/7.68), 114px) clamp(60px, calc(60vw/7.68 ), 90px);
        position: relative;
        z-index: 3;
        max-width: 800px;

        >*{
            color: var(--white-100, #F3F3F3);
            font-size: clamp(17px, calc(19vw/7.68), 20px);
            font-style: normal;
            font-weight: 600;
            line-height:  160%;
        }

        @media (max-width: 864px) {
            max-width: 70%;
        }

        @media (max-width: 540px) {
            max-width: 85%;
        }

        @media (max-width: 480px) {
            padding: 48px 16px 16px 40px;
            max-width: 100%;
        }
    }
`

const Text = styled.div`
  margin-top: var(--section-margin);

  .flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }

  }

  .subtitle_{
    text-align: center;
    margin: clamp(48px, calc(72vw/7.68), 128px) 0  clamp(24px, calc(32vw/7.68), 48px) 0;
    font-size: clamp(21px, ${24 / 768 * 100}vw, 36px);
  }

  .title_{
    margin-bottom: clamp(8px, ${44 / 768 * 100}vw, 80px);

    >*{
      font-weight: 900;
      font-size: clamp(21px, ${48 / 768 * 100}vw, 56px);
      line-height: 112%;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      word-break: break-word;

      @media (max-width: 480px) {
        text-align: left;
      }
    }
  }

  .text_{
      max-width: 706px;

      >*{
          font-size: clamp(17px, ${17 / 768 * 100}vw, 26px);
          line-height: 125%;
      }

      &.sub_{
        text-align: center;
        margin: 64px auto 0 auto;

        @media (max-width: 480px) {
            text-align: left;
        }
      }
  }
   
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: clamp(16px, ${32 / 768 * 100}vw, 40px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
      text-align: center;
    gap: 12px;
    background-color: var(--color-blue);

    h3{
      font-weight: 700;
      font-size: clamp(18px, ${24 / 768 * 100}vw, 32px);
      line-height: 125%;
      color: var(--color-white);
      margin-bottom: 6px;
    }

    p{
      color: var(--color-white);
      font-family: Inter;
      font-size: clamp(14px, ${17 / 768 * 100}vw, 18px);
      line-height: 155.556%;
      letter-spacing: 0.09px;
    }

    img{
      max-width: clamp(44px, ${66 / 768 * 100}vw, 74px);
      margin-bottom: 12px;
    }

    @media (max-width: 768px) {
      padding: clamp(24px, ${48 / 768 * 100}vw, 90px) clamp(20px, ${25 / 768 * 100}vw, 30px);
      flex-direction: row;
      gap: clamp(8px, ${24 / 768 * 100}vw, 32px);
      text-align: left;
    }
`
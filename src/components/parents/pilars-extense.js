import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image"
import Check from '../../resources/check-circle.svg'

export default function PillarsExtense({ data }) {
  return (
    <>
      {data?.map((el, index) => (
        <Wrapper key={index}>
          <Container>
            <Flex className={index % 2 === 0 ? 'reversed areas' : 'areas'}>
              <GatsbyImage className="image" image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText} />
              <div className="content area" dangerouslySetInnerHTML={{ __html: el.content }} />
            </Flex>
            <Flex>
              <div className="content" dangerouslySetInnerHTML={{ __html: el.leftText }} />
              <div className="content" dangerouslySetInnerHTML={{ __html: el.rightText }} />
            </Flex>
          </Container>
        </Wrapper>
      ))}
    </>
  )
}

const Wrapper = styled.section`
  margin-top: var(--section-margin);

  &:last-child{
    margin-bottom: var(--section-margin);
  }
`

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: clamp(24px, calc(48vw/7.68), 64px);

  @media (max-width: 864px) {
    grid-template-columns: 1fr;
  }


  &.areas{
    grid-template-areas: 'left right';

    &.reversed{
      grid-template-areas: 'right left';
    }

    @media (max-width: 864px) {
      grid-template-areas: unset !important;
    }

    .image{
      grid-area: left;
      @media (max-width: 864px) {
        grid-area: unset !important;
      }
    }

    .area{
      grid-area: right;
      @media (max-width: 864px) {
        grid-area: unset !important;
      }
    }
  }

  &:first-child{
    margin-top: 0;
  }

  .content{

    h2{
      font-size: clamp(21px, calc(38vw/7.68), 60px);
      font-weight: 800;
      line-height:  120%;
      letter-spacing: -0.27px;
      text-transform: uppercase;
    }

    h3{
      font-size: clamp(17px, calc(24vw/7.68), 28px);
      font-weight: 700;
      line-height: 140%;
    }

    p, li, span{
      font-size: clamp(17px, calc(24vw/7.68), 26px);
      font-weight: 500;
      line-height: 146%;
    }

    ul,ol{
      display: grid;
      gap: 20px;

      li{
        position: relative;
        padding-left: 56px;

        &::before{
          content: url(${Check});;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }

    >*+*{
      margin-top: clamp(24px, calc(24vw/7.68), 48px);
    }
  }

  .image{
    height: fit-content;

    @media (max-width: 864px) {
      width: fit-content;
      margin: 0 auto;
    }
  }
`
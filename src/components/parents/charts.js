import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Charts({ data: { title, text, charts, leftTextUnderCharts, rightTextUnderCharts } }) {
  return (
    <Wrapper>
      <Container>
        <div
          className='title'
          dangerouslySetInnerHTML={{
            __html: title
          }}></div>
        <div
          className='subTitle'
          dangerouslySetInnerHTML={{
            __html: text
          }}></div>

        <Grid>
          {charts.map((chart, index) => (
            <div key={index} className="item">
              <div className="chart-title" dangerouslySetInnerHTML={{ __html: chart.chartTitle }} />
              <GatsbyImage className="image" image={chart.chart.localFile.childImageSharp.gatsbyImageData} alt={chart.chart.altText} />
              <div className="chart-text" dangerouslySetInnerHTML={{ __html: chart.chartText }} />
            </div>
          ))}
        </Grid>
        <Flex>
          <div className="left" dangerouslySetInnerHTML={{ __html: leftTextUnderCharts }} />
          <div className="right" dangerouslySetInnerHTML={{ __html: rightTextUnderCharts }} />
        </Flex>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
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

      max-width: 1200px;
      margin: 0 auto;
    }

    .subTitle {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        font-weight: 700;
        font-size: clamp(17px, ${(27 / 768) * 100}vw, 36px);
        line-height: 130%;
        color: #f3f3f3;
        margin-top: 32px;
        color: var(--color-black);
        text-align: center;
      }

      max-width: 1150px;
      margin: 0 auto;
    }
`

const Grid = styled.div`
  margin-top: clamp(48px, calc(64vw/7.68), 64px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

    @media (max-width: 1240px) {
      grid-template-columns: 1fr;
    }
  
  .item{
    display: grid;
    height: fit-content;

    
    @media (max-width: 1240px) {
      grid-template-areas: 
      'image title'
      'image text';

      grid-template-columns: 275fr 381fr;
      grid-template-rows: auto 1fr;
      gap: 0 32px;
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 24px;
      grid-template-rows: auto;
      grid-template-areas: 
      'image '
      'title'
      'text';
    }
  }

  .image{
    height: fit-content;
    @media (max-width: 1240px) {
      grid-area: image;
    }
  }

  .chart-title {
    min-height: 80px;
    margin-bottom: 16px;

    @media (max-width: 1240px) {
      grid-area: title;
      min-height: 0;
      margin-bottom: 24px;
      text-align: left;
    }
    
    @media (max-width: 640px) {
      margin-bottom: 0;
    }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        text-align: center;
        font-family: Inter;
        font-size: clamp(21px, calc(21vw/7.68), 28px);
        font-style: normal;
        font-weight: 700;
        line-height: 142.857%;

        @media (max-width: 1240px) {
          text-align: left;
        }
      }
  }
  .chart-text {
    margin-top: 32px;

    @media (max-width: 1240px) {
      grid-area: text;
      margin-top: 0;
    }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        font-family: Inter;
        font-size: clamp(14px, calc(17vw/7.68), 18px);
        font-style: normal;
        font-weight: 400;
        line-height: 155.556%;
        letter-spacing: 0.09px;

        strong{
          font-size: clamp(17px, calc(19vw/7.68), 20px);
        }
      }

      >*+* {
        margin-top: 16px;
      }
  }
`

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: clamp(48px, calc(64vw/7.68), 64px);
  gap: clamp(16px, calc(24vw/7.68), 40px);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: Inter;
    font-size: clamp(17px, calc(24vw/7.68), 26px);
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`
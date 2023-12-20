import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function PillarsOfDecontex({ data: {
  sectionTitle,
  linkOnTheRight,
  cards
} }) {
  return (
    <Wrapper>
      <Container>
        <div className="flex">
          <div className={linkOnTheRight?.url ? "title" : 'long title'} dangerouslySetInnerHTML={{ __html: sectionTitle }} />
          {linkOnTheRight?.url && (
            <Link className="link" to={linkOnTheRight.url}>
              {linkOnTheRight.title}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14453 3L15.8588 12L8.14453 21" stroke="#177BC3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
          )}
        </div>
        <Grid>
          {cards.map(el => (
            <div className={`item ${el.cardBackground ? 'background' : ''}`} key={el.cardTitle}>
              <div>
                {el.cardIcon && <img src={el.cardIcon.localFile.publicURL} alt={el.cardIcon.altText} />}
              </div>
              {el.cardBackground && <GatsbyImage className="image" image={el.cardBackground.localFile.childImageSharp.gatsbyImageData} alt={el.cardBackground.altText} />}

              <h3>{el.cardTitle}</h3>
            </div>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: var(--section-margin) 0;

  .flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: clamp(24px, calc(32vw/7.68), 40px);
  }

  .title{
    max-width: 675px;
    >*{
        font-weight: 900;
        font-size: clamp(24px, ${40 / 768 * 100}vw, 60px);
        line-height: 120%;
        letter-spacing: -0.9px;
        text-transform: uppercase;
    }

    &.long{
      max-width: 1060px;
    }
  }

  .link{
    color: var(--Blue-800, #0864A6);
    font-size: clamp(17px, calc(26vw/7.68), 26px);
    font-weight: 700;
    line-height: 150%;
    text-decoration-line: underline;
    display: block;
    text-transform: capitalize;
    text-align: right;

    svg{
      transform: translateY(clamp(2px, calc(3vw/7.68), 4px));
      transition: transform .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      height: clamp(16px, calc(20vw/7.68), 24px);
    }

    &:hover{
      svg{
        transform: translateX(8px) translateY(clamp(2px, calc(3vw/7.68), 4px));
      }
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: clamp(16px, calc(24vw/7.68), 40px);
  margin-top: 64px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }

  /* @media (max-width: 380px) {
    grid-template-columns: 1fr;
  } */

  .item{
    background: var(--White-50, #FEFEFE);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    aspect-ratio: 326/371;

    /* @media (max-width: 380px) {
      grid-template-columns: 1fr;
      aspect-ratio: 332/144;
    } */

    h3{
      font-size: clamp(17px, calc(28vw/7.68), 28px);
      font-weight: 700;
    }

    &.background{
      h3{
        color: #fff;
        position: relative;
        z-index: 1;
      }
    }
  }

  .image{
    position: absolute;
    inset: 0;
  }
`
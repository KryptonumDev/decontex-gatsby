import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function HowWeDoIt({ data: { title, text } }) {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
        </Flex>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: var(--section-margin);
`

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, calc(64vw/7.68), 64px);

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }

  .title{
    >*{
      font-size: clamp(24px, calc(40vw/7.68), 60px);
      font-weight: 900;
      line-height:  120%;
      letter-spacing: -0.9px;
      text-transform: uppercase;
    }
  }

  .text{
    >*{
      font-size: clamp(17px, calc(24vw/7.68), 26px);
      font-weight: 500;
      line-height: 146%;
    }
    >*+*{
      margin-top: clamp(32px, calc(48vw/7.68), 64px);
    }
  }
`
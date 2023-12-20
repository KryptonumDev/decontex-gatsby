import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function Cite({ data: { cite } }) {
  return (
    <Wrapper>
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: cite }} />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: var(--section-margin);
  margin-bottom: var(--section-margin);
  
  @media (max-width: 420px) {
    margin-bottom: 0;
  }
`

const Content = styled.div`
  padding: clamp(16px, calc(64vw/7.68), 64px);
  background: var(--Gold-500, #928367);

  color: var(--White-50, #FEFEFE);
  text-align: center;
  font-size: clamp(17px, calc(27vw/7.68), 36px);
  font-weight: 700;
  line-height: 133.333%;

  @media (max-width: 420px) {
    margin: 0 -16px;
  }
`
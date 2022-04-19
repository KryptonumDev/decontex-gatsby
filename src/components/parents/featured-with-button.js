import React from "react"
import styled from "styled-components"
import { ButtonBlack, Container } from "../../styles/style"

export default function FeaturedWithButton() {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <p className="h5">
                        The decontamination service costs PLN 399. Cleaning with liquid carbon dioxide is recommended once a year.
                    </p>
                    <p className="h5">
                        Even after 250 Decontex cleanings, the protective clothing still meets the safety requirements.
                    </p>
                </Content>
                <ButtonBlack>education</ButtonBlack>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);
    padding-top: clamp(90px, 6.25vw, 120px);
    padding-bottom: clamp(60px, 4.68vw, 90px);
    background-color: var(--color-yellow);

    a{
        margin: 0 auto;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 75px;
    
    p{
        font-size: 39px;
    }
`
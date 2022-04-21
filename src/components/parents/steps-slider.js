import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function Footer() {
    return (
        <Wrapper>
            <Container>
                <h2 className="h1">Decontex <u>TECHNOLOGY </u>– decontamination system for contaminated clothing</h2>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(100px, 8.33vw, 160px);

    h2{
        text-align: center;
    }
`
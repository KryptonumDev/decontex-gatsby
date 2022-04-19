import React from "react"
import styled from "styled-components"
import {ButtonBlue, ButtonOutlined, Container} from './../../styles/style'

export default function Hero ({data}) {
    return(
        <Wrapper>
            <Container>
                <Content>
                    <h1 className="h1">We protect those who protect <b>US</b>.</h1>
                    <p className="big-m">We care for the <b>health and safety </b>of firefighters. Decontex is a modern decontamination with liquid CO2.</p>
                    <ButtonsWrapper>
                        <ButtonBlue>Contact</ButtonBlue>
                        <ButtonOutlined>order</ButtonOutlined>
                    </ButtonsWrapper>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: var(--color-black);   
`

const Content = styled.div`
    max-width: 750px;

    h1{
        padding-top: 320px;
        color: var(--color-white);
        text-transform: uppercase;
    }

    p{  
        max-width: 600px;
        margin-top: 32px;
        color: var(--color-white);

        b{
            font-weight: 700;
        }
    }
`

const ButtonsWrapper = styled.div`
    margin-top: 120px;
    display: flex;
    gap: 40px;
`
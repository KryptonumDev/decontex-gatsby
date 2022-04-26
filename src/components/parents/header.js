import React from "react"
import styled from "styled-components"
import { ButtonOutlined, Container } from "../../styles/style"
import { graphql, useStaticQuery } from "gatsby"

export default function Header() {


    return (
        <Wrapper>
            <Container>
                <Content>
                    <p>Logo</p>
                    <ButtonOutlined>Order</ButtonOutlined>
                    <p>Menu</p>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 48px 0;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        color: white;
    }
`
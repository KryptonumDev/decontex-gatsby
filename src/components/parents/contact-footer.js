import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import FooterForm from "../childrens/forms/footer-form"

export default function Contact({ data: { title, text, form } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div>
                        <div className="title" dangerouslySetInnerHTML={{ __html: title }}/>
                        <div className="other" dangerouslySetInnerHTML={{ __html: text }}/>
                    </div>
                    <div className="form">
                        <FooterForm data={form} />
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: clamp(36px, ${72 / 768 * 100}vw, 160px);
    padding-bottom: clamp(48px, ${120 / 768 * 100}vw, 160px);
    background-color: var(--color-black);
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;

    .title{
        margin-bottom: clamp(32px, ${40 / 768 * 100}vw, 40px);

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            color: var(--color-white);
        }
    }
    .other{

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 500;
            font-size: clamp(20px, ${20 / 768 * 100}vw, 32px);
            line-height: 130%;
            color: var(--color-white);
        }
    }

    .form{
        max-width: 600px;
        width: 100%;
    }

    @media (max-width: 1024px) {
        display: block;
        text-align: center;

        .other{
            display: none;
        }

        .form{
            margin: 0 auto;
        }
    }
`
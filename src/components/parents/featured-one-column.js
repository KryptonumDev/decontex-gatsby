import React from "react"
import styled from "styled-components"
import { ButtonBlack, Container } from "../../styles/style"

export default function FeaturedOneColumn({ data: { text, link } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: text }}></div>
                <div className="button">
                    <ButtonBlack to={link.link}>{link.name}</ButtonBlack>
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--section-margin);
    padding-top: clamp(40px, ${80 / 768 * 100}vw, 100px);
    padding-bottom: clamp(48px, ${90 / 768 * 100}vw, 90px);
    background-color: var(--color-gold);


    .title{
        max-width: 1024px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 48px;
        h1,h2,h3,h4,h5,h6,p{
            font-size: clamp(21px, ${39 / 768 * 100}vw, 39px);
            font-weight: 700;
            line-height: 130%;
            color: var(--color-white);
        }
    }

    .button{
        width: fit-content;
        margin:  0 auto;

        a{
            color: #E8D07B;
        }
    }
`
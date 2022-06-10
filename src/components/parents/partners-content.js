import React from "react"
import styled from "styled-components"
import { OuterButtonBlue, Container } from "../../styles/style"

export default function Content({ data: { title, text, repeater } }) {
    return (
        <Wrapper>
            <Container>
                <div className="main-title" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="sub-title" dangerouslySetInnerHTML={{ __html: text }} />
            </Container>
            <Repeater>
                {repeater.map(el => (
                    <Item>
                        <div className="content">
                            <img src={el.logo.sourceUrl} alt={el.logo.altText} />
                            <div dangerouslySetInnerHTML={{ __html: el.text }} />
                            <OuterButtonBlue href={el.link.link} target='_blank' rel='noopener'>{el.link.name}</OuterButtonBlue>
                        </div>
                    </Item>
                ))}
            </Repeater>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .main-title{
        max-width: 1200px;
        margin: 0 auto 64px auto;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${48 / 768 * 100}vw, 72px);
            line-height: 130%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            text-align: center;
        }
    }

    .sub-title{
        max-width: 1300px;
        margin: 0 auto 48px auto;

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(21px, ${27 / 768 * 100}vw, 48px);
            line-height: 130%;
            text-align: center;
        }
    }
`

const Repeater = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`

const Item = styled.div`
    padding: 100px 0;
    .content{
        max-width: 820px;
        margin: 0 auto;
        
        a{
            width: fit-content;
            margin: 0 auto;
        }

        h1,h2,h3,h4,h5,h6,p{
            margin-bottom: 44px;
            font-weight: 700;
            font-size: clamp(21px, ${40 / 768 * 100}vw, 40px);
            line-height: 130%;
            text-align: center;
        }

        img{
            margin: 0 auto 54px auto;
            display: block;
        }
    }

    &:nth-child(2n){
        background-color: var(--color-black);

        .content{
            h1,h2,h3,h4,h5,h6,p{
                color: var(--color-white);
            }

            img{
                filter: brightness(0) invert(1);
            }

        }
    }
`
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import { Link } from "gatsby"

export default function DecontominationBenefits({ data: { link, sectionTitle, text, textBenefits, benefits } }) {
    return (
        <Wrapper>
            <Container>
                <div className="title" dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
                <Grid>
                    {benefits.map(el => (
                        <Item key={el.benefitText}>
                            <GatsbyImage className="image" image={el.benefitIcon.localFile.childImageSharp.gatsbyImageData} alt={el.benefitIcon.altText} />
                            <h3>{el.benefitText}</h3>
                        </Item>
                    ))}
                </Grid>
                <div className="sub" dangerouslySetInnerHTML={{ __html: textBenefits }} />
                <Links>
                    {link.map(el => (
                        <Link key={el.link.url} to={el.link.url} aria-label={el.ariaLabel}>
                            <GatsbyImage image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText} />
                            <div className="content">
                                <p>{el.cardTitle}</p>
                                <span>
                                    <span>{el.link.title}</span>
                                &nbsp;
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.14453 3L15.8588 12L8.14453 21" stroke="#177BC3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </Links>
            </Container>
        </Wrapper>
    )
}

const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: fit-content;
    grid-gap: clamp(20px, ${40 / 768 * 100}vw, 60px);
    margin: clamp(48px, calc(104vw/7.68), 132px) auto;

    a{
        border: 4px solid var(--White-50, #FEFEFE);
        background: var(--White-50, #FEFEFE);
        max-width: 500px;

        &:hover{
            svg{
            transform: translateX(8px);
            }
        }

        .content{
            padding: clamp(8px, calc(16vw/7.68), 64px) clamp(8px, calc(16vw/7.68), 18px) clamp(8px, calc(16vw/7.68), 48px) clamp(8px, calc(16vw/7.68), 18px);
            text-align: center;

            p{
                color: var(--Black-700, #111315);
                font-size: clamp(21px, calc(40vw/7.68), 64px);
                font-weight: 900;
                line-height: 112.5%;
                letter-spacing: -0.96px;
                text-transform: uppercase;
                margin-bottom: clamp(12px, calc(12vw/7.68), 24px);
                word-break: break-word;
            }

            >span{
                color: var(--Blue-700, #177BC3);
                font-size: clamp(14px, calc(21vw/7.68), 36px);
                font-weight: 700;
                line-height: 150%;
                text-decoration-line: underline;
                display: block;

                >span{
                    word-break: break-word;
                }

                svg{
                    height: 24px;

                    @media (max-width: 1024px) {
                        height: 20px;
                    }

                    @media (max-width: 768px) {
                        height: 16px;
                    }

                    @media (max-width: 640px) {
                        height: 12px;
                    }

                    transition: transform .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
                }
            }
        }
    }
`

const Wrapper = styled.section`
    margin-top: var(--section-margin);

    .title{
        margin-bottom: clamp(8px, ${44 / 768 * 100}vw, 80px);

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(21px, ${48 / 768 * 100}vw, 56px);
            line-height: 112%;
            text-align: center;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            word-break: break-word;

            @media (max-width: 480px) {
                text-align: left;
            }
        }
    }

    .text{
        max-width: 930px;
        margin: 0 auto clamp(24px, ${44 / 768 * 100}vw, 64px) auto;   

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(17px, ${24 / 768 * 100}vw, 32px);
            line-height: 125%;
            text-align: center;

            @media (max-width: 480px) {
                text-align: left;
            }
        }
    }

    .sub{
        max-width: 1120px;
        margin: 0 auto;
        margin-top: clamp(24px, ${52 / 768 * 100}vw, 80px);

        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(13px, ${18 / 768 * 100}vw, 32px);
            line-height: 120%;
            text-align: center;

            @media (max-width: 480px) {
                text-align: left;
            }
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: clamp(16px, ${32 / 768 * 100}vw, 40px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    width: 100%;
    padding: 90px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    background-color: var(--color-blue);

    h3{
        font-weight: 700;
        font-size: clamp(13px, ${24 / 768 * 100}vw, 32px);
        line-height: 125%;
        text-align: center;
        color: var(--color-white);
    }

    .image{
        max-width: clamp(44px, ${66 / 768 * 100}vw, 88px);
    }

    @media (max-width: 768px) {
        padding: clamp(24px, ${48 / 768 * 100}vw, 90px) clamp(20px, ${25 / 768 * 100}vw, 30px);
        flex-direction: row;
        gap: clamp(8px, ${24 / 768 * 100}vw, 32px);

        h3{
            text-align: left;
        }
    }
`
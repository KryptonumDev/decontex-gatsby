import { Link } from "gatsby"
import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Container } from "../../styles/style"
import Contact from "./contact-footer"

export default function Footer({ data }) {

    const { copyright, logo, otherInformation, mainLinks, smallLinks, socialLinks } = data.footer[0]

    return (
        <Wrapper>
            <Contact data={data.contact[0]} />
            <MainContent>
                <Container>
                    <FirstFlex>
                        <div>
                            <img src={logo.url} alt={logo.alt} />
                            <StructuredText data={otherInformation} />
                        </div>
                        <ul className="grid">
                            {mainLinks.map((el, index) => (
                                <li key={el.name}>
                                    <Link to={el.slug}>{el.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </FirstFlex>
                    <SecondFlex socLength={socialLinks.length}>
                        <ul className="social">
                            {socialLinks.map((el) => (
                                <li key={el.ariaLabel}>
                                    <Link aria-label={el.ariaLabel} to={el.slug}><img src={el.icon.url} alt={el.icon.alt} /></Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="small">
                            {smallLinks.map((el, index) => (
                                <li key={el.name}>
                                    <Link to={el.slug}>{el.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </SecondFlex>
                    <ThirdFlex>
                        <div className="copyright">
                            <StructuredText data={copyright}/>
                        </div>
                    </ThirdFlex>
                </Container>
            </MainContent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: clamp(100px, 8.33vw, 160px);
`


const MainContent = styled.div`
    background-color: var(--color-blue);
    padding-top: clamp(80px, 8.33vw, 120px);
    padding-bottom: clamp(30px, 8.33vw, 60px);
`

const FirstFlex = styled.div`
    display: flex;
    justify-content: space-between;

    img{
        margin-bottom: 48px;
    }

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.005em;
        color: var(--color-white);
    }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px 40px;
        li{
            a{
                font-weight: 700;
                font-size: 32px;
                line-height: 42px;
                color: var(--color-white);

            }
        }
    }


`

const SecondFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 110px;

    .social{
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(${props => props.socLength}, auto);
        width: fit-content;

        li{
            width: fit-content;
        }
    }

    .small{
        display: flex;
        li{
            margin-left: 30px;
        }

        a{
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.005em;
            color: var(--color-white);
        }
    }
`

const ThirdFlex = styled.div`
    margin-top: 80px;

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.005em;
        color: var(--color-white);

    }
`
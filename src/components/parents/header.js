import React, { useState } from "react"
import styled from "styled-components"
import { ButtonOutlined, Container } from "../../styles/style"
import { graphql, Link, useStaticQuery } from "gatsby"
import { activeLanguage } from "../../helpers/activeLanguage"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Header({ location }) {

  const data = useStaticQuery(graphql`
        query{
            allWpPage(filter: {template: {templateName: {eq: "Header"}}}) {
                nodes {
                    language {
                      slug
                    }
                    header {
                      link {
                        link
                        name
                      }
                      navigation {
                        navigationItem {
                          link
                          name
                        }
                      }
                      otherLinks {
                        link
                        name
                      }
                      socialLinks {
                        link
                        ariaLabel
                        icon {
                          altText
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                        }
                      }
                      logo {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                }
            }
        }
    `)

  const locale = activeLanguage(location)
  const localeData = data.allWpPage.nodes.filter(el => el.language.slug === locale)
  const { link, navigation, otherLinks, socialLinks, logo } = localeData[0].header

  const [isMenuOpened, changeIsMenuOpened] = useState(false)

  return (
    <Wrapper>
      <LocContainer>
        <Content>
          <Logo image={logo.localFile.childImageSharp.gatsbyImageData} alt={logo.altText} />
          <ButtonOutlined className="cta" to={link.url}>{link.name}</ButtonOutlined>
          <Button isMenuOpened={isMenuOpened} onClick={() => { changeIsMenuOpened(!isMenuOpened) }}>
            <span />
          </Button>
          <Navigation isMenuOpened={isMenuOpened}>
            <div className="wrapper">
              <div>
                {navigation.map(el => (
                  <ul>
                    {el.navigationItem.map(innerEl => (
                      <li>
                        <Link onClick={() => { changeIsMenuOpened(false) }} to={innerEl.link}>
                          {innerEl.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
                <ul className="small">
                  {otherLinks.map(el => (
                    <li>
                      <Link onClick={() => { changeIsMenuOpened(false) }} className="small" to={el.link}>
                        {el.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="social">
                {socialLinks.map(el => (
                  <li>
                    <Link to={el.link} ariaLabel={el.ariaLabel}>
                      <GatsbyImage className="image" image={el.icon.localFile.childImageSharp.gatsbyImageData} alt={el.icon.altText} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="small mobile">
              {otherLinks.map(el => (
                <li>
                  <Link onClick={() => { changeIsMenuOpened(false) }} className="small" to={el.link}>
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Navigation>
        </Content>
      </LocContainer>
    </Wrapper>
  )
}

const Logo = styled(GatsbyImage)`
    mix-blend-mode: difference;
    width: 100%;
    max-width: clamp(120px, ${175 / 768 * 100}vw, 230px);
    height: fit-content;
`

const Navigation = styled.nav`
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none;
    }

    max-width: 700px;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    position: absolute;
    background-color: var(--color-blue);
    right: 0;
    top: 0;
    bottom: 0;
    transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: ${props => props.isMenuOpened ? 'translateX(0%)' : "translateX(100%)"};

    padding: clamp(80px, ${120 / 768 * 100}vw, 160px) clamp(16px, ${68 / 768 * 100}vw, 120px) clamp(40px, ${50 / 768 * 100}vw, 60px) clamp(16px, ${68 / 768 * 100}vw, 120px);

    @media (max-width: 480px) {
      .wrapper{
        display: flex;
        justify-content: space-between;
        margin-right: 68px;

        .social{
          flex-direction: column;

          .image{
            max-width: 32px;
          }
        }

        .small{
          display: none;
        }
      }

      .small.mobile{
        display: grid;
        text-align: end;
        margin-bottom: 0;
      }
    }

    .mobile{
      display: none;
    }

    ul{
      display: grid;
      grid-gap: 16px;
      height: fit-content;

      margin-bottom: clamp(16px, ${28 / 768 * 100}vw, 40px);

      &:last-child{
        margin-bottom: clamp(32px, ${42 / 768 * 100}vw, 55px);
      }

      &.small{
        grid-gap: 8px;

        li{

        }
      }

      &.social{
        display: flex;
        gap: 32px;

        .image{
          max-width: 40px;
          width: fit-content;
          height: fit-content;
        }
      }

      li{
        a{
          color: var(--color-white);
          font-weight: 700;
          font-size: clamp(13px, ${24 / 768 * 100}vw, 32px);
          line-height: 130%;

          &.small{
            font-weight: 400;
            font-size: clamp(11px, ${16 / 768 * 100}vw, 20px);
            line-height: 140%;
            letter-spacing: 0.005em;
          }
        }
      }
    }
`

const Button = styled.button`
    width: 48px;
    height: 40px;
    position: relative;
    background-color: transparent;
    border: none;
    z-index: 10;

    &::after{
        content: "";
        bottom: 0;
        position: absolute;
        display: block;
        height: 7px;
        width: 100%;
        background-color: var(--color-black);
        transform-origin: 50% 50%;

        ${props => props.isMenuOpened ? `
        ` : null}
    }

    &::before{
        content: "";
        top: 0;
        position: absolute;
        display: block;
        height: 7px;
        width: 100%;
        background-color: var(--color-black);
        transform-origin: 50% 50%;

        ${props => props.isMenuOpened ? `
        ` : null}
    }

    span{
        display: block;
        height: 7px;
        width: 100%;
        background-color: var(--color-black);
        transition: opacity .2s cubic-bezier(0.215, 0.610, 0.355, 1), transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);

        ${props => props.isMenuOpened ? `
            pointer-events: none;
            opacity: 0;
            transform: translateX(-40px);
        ` : null}
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 33px;

      &::before{
        height: 5px;
      }
      &::after{
        height: 5px;
      }
      span{
        height: 5px;
      }
    }

    @media (max-width: 480px) {
      width: 28px;
      height: 22px;

      &::before{
        height: 3px;
      }
      &::after{
        height: 3px;
      }
      span{
        height: 3px;
      }
    }
`

const Wrapper = styled.header`
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    left: 0;
    padding: clamp(20px, ${48 / 768 * 100}vw, 48px) 0;

    @media (max-width: 680px) {
      .cta{
        display: none;
      }
    }
`

const LocContainer = styled(Container)`
    position: unset;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        color: white;
    }
`
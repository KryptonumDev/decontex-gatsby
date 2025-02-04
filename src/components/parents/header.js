import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ButtonOutlined, ButtonOutlinedOuter, Container } from "../../styles/style"
import { graphql, Link, useStaticQuery } from "gatsby"
import { activeLanguage } from "../../helpers/activeLanguage"
import { urls } from "../../constants/url"
import { getCurrentPage } from "../../helpers/getCurrentPage"

export default function Header({ location }) {
  const data = useStaticQuery(graphql`
    query{
      allWpPage(filter: {template: {templateName: {eq: "Header"}}}) {
        nodes {
          language {
            slug
            name
          }
          header {
            link {
              link
              name
              isouter
            }
            navigation {
              linkName
              linkUrl
              onlyInMobileMenu
              dropdown{
                linkName
                linkUrl
              }
            }
          }
        }
      }
    }
  `)

  const whiteWersionPages = ['/', '/de/', '/fr/', '/nl/', '/es/', '/nb/', '/fi/', '/pt/', '/pl/']

  const locale = activeLanguage(location)
  const localeData = data.allWpPage.nodes.filter(el => el.language.slug === locale)
  const { link, navigation } = localeData[0].header

  const [isDark, changeIsDark] = useState(whiteWersionPages.includes(location.pathname))
  const [currentPage, changeCurrentPage] = useState(getCurrentPage(location, locale))
  const [isScrolled, changeIsScroled] = useState(0)
  const [isMenuOpened, changeIsMenuOpened] = useState(false)

  const [isLangChangerOpened, _changeIsLangChangerOpened] = useState(false)
  const isLangChangerOpenedRef = React.useRef(isLangChangerOpened)
  const changeIsLangChangerOpened = x => {
    isLangChangerOpenedRef.current = x
    _changeIsLangChangerOpened(x)
  }

  useEffect(() => {
    changeIsDark(whiteWersionPages.includes(location.pathname))
    changeCurrentPage(getCurrentPage(location, locale))
  }, [location])

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        changeIsScroled(window.pageYOffset)
      }
      document.addEventListener('click', (e) => {
        if (isLangChangerOpenedRef.current && e.currentTarget.activeElement.id !== 'lang-schoice') {
          changeIsLangChangerOpened(false)
        }
      })
      document.onkeydown = function (evt) {
        evt = evt || window.event
        if (evt.key === "Escape" || evt.key === "Esc") {
          changeIsLangChangerOpened(false)
          changeIsMenuOpened(false)
        }
      };
    }
    return null
  }, [])

  return (
    <>
      <Wrapper isDark={isDark} isScrolled={isScrolled}>
        <LocContainer>
          <Content>
            <Link aria-label="homepage" to={urls['Homepage'][locale]}>
              {locale === 'pl'
                ? <DecontexLogoPolish invert={isScrolled || isDark} />
                : (isScrolled || isDark)
                  ? <LogoDark />
                  : <LogoWhite />}
            </Link>

            <Navigation isDark={isDark} isScrolled={isScrolled} isMenuOpened={isMenuOpened}>
              <LangChoice changeIsMenuOpened={changeIsMenuOpened} isMenuOpened={isMenuOpened} desctop={false} currentPage={currentPage} isDark={isDark} isScrolled={isScrolled} isLangChangerOpened={isLangChangerOpened} data={data} locale={locale} changeIsLangChangerOpened={changeIsLangChangerOpened} />
              {navigation?.map((el, i) => (
                <div className={el.onlyInMobileMenu ? "item mobile" : "item"} key={i}>
                  <NavLink isDark={isDark} isScrolled={isScrolled} as={!el.linkUrl ? 'div' : null} to={el.linkUrl} className={el?.dropdown?.length > 0 ? 'div' : 'a'}>
                    {el.linkName}
                    {el?.dropdown?.length > 0 && (
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7148 15.5L12.7148 9.5L5.71484 15.5" stroke={isDark ? "#111315" : "#fff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </NavLink>
                  {el?.dropdown?.length > 0 && (
                    <div className="dropdown">
                      {el?.dropdown?.map(el => (
                        <NavLink className={'a'} isDark={isDark} isScrolled={isScrolled} to={el.linkUrl}>
                          {el.linkName}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </Navigation>

            {link.isouter === null
              ? <ButtonOutlined className="cta" to={link.link}>{link.name}</ButtonOutlined>
              : <ButtonOutlinedOuter className="cta" href={link.link}>{link.name}</ButtonOutlinedOuter>}

            <LangChoice changeIsMenuOpened={changeIsMenuOpened} isMenuOpened={isMenuOpened} desctop={true} currentPage={currentPage} isDark={isDark} isScrolled={isScrolled} isLangChangerOpened={isLangChangerOpened} data={data} locale={locale} changeIsLangChangerOpened={changeIsLangChangerOpened} />

            <Button aria-label='open or close mobile menu' isScrolled={isScrolled} isDark={isDark} isMenuOpened={isMenuOpened} onClick={() => { changeIsMenuOpened(!isMenuOpened) }}>
              <span />
            </Button>
            <NavOuter onClick={() => { changeIsMenuOpened(false) }} isMenuOpened={isMenuOpened} id='outer'></NavOuter>
          </Content>
        </LocContainer>
      </Wrapper>
    </>
  )
}

const NavLink = styled(Link)`
  color: var(--black-700, #111315);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 155.556%;
  letter-spacing: 0.09px;
  text-transform: unset;
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 4px;

  transition: color .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  svg{
    transition: transform .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    @media (max-width: 1365px) {
      display: none;
    }

    path{
      transition: stroke .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);


      ${props => (props.isScrolled) ? `
          stroke: var(--color-black) ;
        ` : null}
    }
  }

  @media (max-width: 1365px) {

    &.div{
      margin-top: clamp(20px, calc(40vw/7.68), 40px);
      font-size: clamp(13px, calc(18vw/7.68), 18px);
    }

    &.a{
      font-size: clamp(17px, calc(24vw/7.68), 24px);
      font-weight: 700;
      line-height: 133.333%;
    }
  }


  &:hover{
    color: #177BC3;

    @media (max-width: 1365px) {
      color: #111315;
    }
  }

  color: var(--color-white);

  ${props => (props.isScrolled || props.isDark) ? `
      color: var(--color-black) ;
    ` : null}

  @media (max-width: 1365px) {
    color: var(--color-white);
  }

`

const LanguageChoice = styled.ul`
  position: relative;

    &.mobile{
      display: none;
    }

  @media (max-width: 1365px) {
    &.desctop{
      display: none;
    }
    &.mobile{
      display: block !important;
      margin-bottom: 40px;
      margin-top: 0 !important;

      svg{

        path{
          fill: #fff !important;
        }
      }

      a,button{
        text-transform: uppercase;
      }

      ul{
        gap: 0;
        z-index: 4;
        left: 0 !important;
        right: unset !important;

        a{
          width: 100%;
          font-size: clamp(13px,3.125vw,24px);
        }

        span{
          display: none;
        }
      }
    }
  }

  @media (max-width: 550px) {
    svg{
      transform: scale(.8) !important;


      ${props => props.isLangChangerOpened ? `
      transform: scale(.8) rotateZ(180deg) !important;
    ` : null}
    }
  }
  @media (max-width: 500px) {
    svg{
      transform: scale(.8) translateY(3px) !important;

      ${props => props.isLangChangerOpened ? `
      transform: scale(.8) translateY(3px) rotateZ(180deg) !important;
    ` : null}
    }
  }

  a, button{
    font-weight: 700;
    font-size: clamp(13px, ${24 / 768 * 100}vw, 24px);
    line-height: 120%;
    letter-spacing: 0.0125em;
    text-transform: uppercase;

    color: var(--color-white);

    ${props => (props.isScrolled || props.isDark) ? `
        color: var(--color-black) ;
      ` : null}

    @media (max-width: 1365px) {
      color: var(--color-white);
    }
  }

  a{
    color: var(--color-black)
  }

  button{
    background-color: transparent;
    border: none;

    svg{
      margin-left: 4px;
      transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);

      ${props => props.isLangChangerOpened ? `
      transform: rotateZ(180deg);
    ` : null}
    }
  }

  ul{
    position: absolute;
    right: 0;
    margin: 10px 0;
    transition: .2s cubic-bezier(0.39, 0.575, 0.565, 1);
    opacity: 0;
    pointer-events: none;
    background-color: var(--color-white);
    min-width: 220px;

    border: 2px solid black;

    li{
        border-top: 2px solid black;

      &:nth-child(1){
        border-top: unset;
      }

      a{
        display: flex;
        align-items: center;
        padding: 9px 16px;

        span{
          display: block;
          width: 16px;
          height: 16px;
          box-sizing: border-box;
          border: 2px solid black;
          margin-right: 8px;
        }
      }
    }

    ${props => props.isLangChangerOpened ? `
      opacity: 1;
      pointer-events: all;
    ` : null}
  }
`

const NavOuter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  display: ${props => props.isMenuOpened ? 'block' : "none"};
  z-index: 1;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;

  @media (max-width: 1365px) {
    zoom: 1.25;
    z-index: 2;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: block;
    max-width: 700px;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    position: absolute;
    background-color: var(--color-blue);
    right: 0;
    top: 0;
    bottom: 0;
    transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: ${props => props.isMenuOpened ? 'translateX(0%)' : "translateX(100%)"};

    padding: clamp(40px, ${52 / 768 * 100}vw, 53px) clamp(16px, ${68 / 768 * 100}vw, 120px) clamp(40px, ${50 / 768 * 100}vw, 60px) clamp(16px, ${68 / 768 * 100}vw, 120px);

    @media (max-width: 768px) {
      max-width: 80%;
    }
  }


  @media (max-width: 1365px) {
    .mobile{
      margin-top: 40px;
    }

    .mobile+.mobile{
      margin-top: 0;
    }
  }

  .item{
    position: relative;

    &.mobile{
      display: none;

      @media (max-width: 1365px) {
        display: flex;
      }
    }

    &:hover{
      svg{
        transform: rotateZ(180deg);

        path{
          stroke: #177BC3;
        }
      }

      .div{
        color: #177BC3;

        @media (max-width: 1365px) {
          color: #fff;
        }
      }

      .dropdown{
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  .dropdown{
    position: absolute;
    left: -32px;
    top: 100%;
    background-color: var(--white-50, #FEFEFE);
    padding: 16px 48px 16px 48px;

    ${props => (props.isScrolled) ? null : `
      background-color: ${props.isDark ? '#f3f3f3' : 'var(--color-black)'};
    `}

    display: grid;

    transition: all .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    opacity: 0;
    pointer-events: none;

    &:hover{
      opacity: 1;
      pointer-events: all;
    }

    a{
      min-width: max-content;
    }

    @media (max-width: 1365px) {
      background-color: transparent !important;
      position: static;
      padding: 0;
      opacity: 1;
      pointer-events: all;
      margin-bottom: clamp(20px, calc(40vw/7.68), 40px);
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

    display: none;

    @media (max-width: 1365px) {
      display: block;
    }

    --color: ${props => props.isMenuOpened ? 'var(--color-white)' : props.isScrolled ? 'var(--color-black)' : props.isDark ? 'var(--color-black)' : 'var(--color-white)'};

    &::after{
        content: "";
        bottom: 0;
        position: absolute;
        display: block;
        height: 7px;
        width: 100%;
        background-color: var(--color);
        transform-origin: 50% 50%;
        transition: bottom .2s cubic-bezier(0.215, 0.610, 0.355, 1), transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);

        ${props => props.isMenuOpened ? `
          transform: rotate(45deg) translate(5px, 0px);
          bottom: 50%;
        ` : null}
    }

    &::before{
        content: "";
        top: 0;
        position: absolute;
        display: block;
        height: 7px;
        width: 100%;
        background-color: var(--color);
        transform-origin: 50% 50%;
        transition: top .2s cubic-bezier(0.215, 0.610, 0.355, 1), transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);

        ${props => props.isMenuOpened ? `
          transform: rotate(-45deg) translate(5px, 0px);
          top: 50%;
        ` : null}
    }

    span{
        display: block;
        height: 7px;
        width: 100%;
        background-color: var(--color);
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

        ${props => props.isMenuOpened ? `
          transform: rotate(-45deg) translate(1px,-1px);
        ` : null}
      }
      &::after{
        height: 5px;

        ${props => props.isMenuOpened ? `
        transform: rotate(45deg) translate(3px,2px);
        ` : null}
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

        ${props => props.isMenuOpened ? `
        transform: rotate(-45deg) translate(2px,0px);
        ` : null}

      }
      &::after{
        height: 3px;

        ${props => props.isMenuOpened ? `
        transform: rotate(45deg) translate(2px,0px);
        ` : null}

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
    padding: ${props => props.isScrolled ? '12px' : 'clamp(20px, 6.25vw, 48px)'} 0;
    transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1), padding .3s cubic-bezier(0.39, 0.575, 0.565, 1), box-shadow .5s cubic-bezier(0.39, 0.575, 0.565, 1);
    background-color: ${props => props.isScrolled ? 'var(--color-white)' : 'transparent'};


    ${props => (props.isScrolled) ? `
      filter: drop-shadow(4px 4px 7px rgba(0,0,0,0.05));
    ` : null}

    .cta{
      border-color: var(--color-white) !important;
      color: var(--color-white) !important;
    }

    .cta{
      ${props => (props.isScrolled || props.isDark) ? `
        border-color: var(--color-black) !important;
        color: var(--color-black) !important;
      ` : null}
    }

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

    svg{
      max-width: clamp(120px, ${175 / 768 * 100}vw, 230px);
    }
`

const LangChoice = ({ changeIsMenuOpened, isMenuOpened, desctop, currentPage, isDark, isScrolled, isLangChangerOpened, data, locale, changeIsLangChangerOpened }) => {
  if (currentPage) {
    return (
      <LanguageChoice className={desctop ? 'desctop' : 'mobile'} isDark={isDark} isScrolled={isScrolled} isLangChangerOpened={isLangChangerOpened} >
        {data.allWpPage.nodes.map(el => {
          if (el.language.slug === locale) {
            return <li key={el.language.slug}>
              <button id='lang-schoice' tabIndex={(desctop || isMenuOpened) ? '0' : '-1'} onClick={() => { changeIsLangChangerOpened(!isLangChangerOpened) }}>
                {el.language.slug}
                <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14.575L0 2.57499L2.15 0.424988L12 10.325L21.85 0.474987L24 2.62499L12 14.575Z" fill={(isScrolled || isDark) ? "#111315" : '#fff'} />
                </svg>
              </button>
            </li>
          }
          return null
        })}
        <li>
          <ul>
            {data.allWpPage.nodes.map(el => {
              if (el.language.slug !== locale) {
                return <li key={el.language.slug}><Link tabIndex={isLangChangerOpened ? '0' : '-1'} to={currentPage[el.language.slug]} onClick={() => { changeIsMenuOpened(false) }}><span />{el.language.name}</Link></li>
              }
              return null
            })}
          </ul>
        </li>
      </LanguageChoice >
    )
  }
  return null
}

const LogoDark = () => (
  <svg width="231" height="49" viewBox="0 0 231 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.319 17.1486C114.32 25.1311 107.046 30.2518 99.1572 29.9196C90.7293 29.8631 83.6098 23.5498 83.728 14.9611C83.6883 11.9781 84.5693 9.05519 86.2515 6.58897C87.9337 4.12275 90.3357 2.23266 93.1313 1.17523C96.4871 -0.205016 101.002 -0.349517 104.54 0.64705C106.733 1.27587 108.766 2.36295 110.505 3.83607C110.548 3.87633 110.574 3.93117 110.579 3.98992C110.584 4.04866 110.567 4.10712 110.531 4.15393C110.495 4.20074 110.443 4.23255 110.385 4.24318C110.327 4.25381 110.267 4.2425 110.217 4.21144C109.301 3.60188 108.161 2.88269 107.007 2.2698C106.888 2.20502 106.796 2.39769 106.913 2.46745C108.391 3.35772 110.122 5.02531 110.779 7.02509C110.796 7.07881 110.793 7.13677 110.771 7.18862C110.749 7.24046 110.71 7.28283 110.659 7.30817C110.609 7.3335 110.551 7.34016 110.496 7.32694C110.441 7.31373 110.393 7.28151 110.36 7.23603C107.999 3.65835 102.478 1.30977 97.4776 2.22495C97.4171 2.23405 97.3624 2.26621 97.3252 2.31467C97.288 2.36312 97.271 2.4241 97.2779 2.48477C97.2848 2.54543 97.3151 2.60107 97.3622 2.63997C97.4094 2.67887 97.4698 2.698 97.5308 2.69334C101.096 2.57209 104.76 3.54706 106.315 5.78768C106.347 5.83475 106.362 5.8919 106.355 5.94866C106.349 6.00543 106.322 6.05799 106.28 6.09673C106.238 6.13548 106.183 6.1578 106.126 6.15961C106.069 6.16142 106.013 6.14259 105.969 6.10658C104.569 4.96551 101.689 3.36768 97.5342 3.8477C95.009 4.14002 92.5237 5.58505 90.9424 7.48517C90.8993 7.53076 90.8762 7.59155 90.8781 7.65415C90.8799 7.71676 90.9067 7.77606 90.9524 7.81901C90.998 7.86196 91.059 7.88504 91.1217 7.88317C91.1845 7.8813 91.2439 7.85464 91.2869 7.80905C92.1721 6.99594 93.1665 6.31001 94.2416 5.77107C95.7248 4.9788 100.084 3.98057 103.199 5.89232C103.247 5.92467 103.282 5.9736 103.297 6.02985C103.311 6.0861 103.305 6.14577 103.278 6.19755C103.252 6.24933 103.207 6.28963 103.153 6.31082C103.099 6.33201 103.039 6.33263 102.984 6.31254C101.592 5.77932 100.096 5.57136 98.6112 5.70463C92.1675 6.28928 88.9848 12.9696 91.1987 18.7015C93.9603 25.5214 102.728 25.7655 106.503 21.1033C106.542 21.0582 106.596 21.0292 106.655 21.0217C106.714 21.0143 106.773 21.0289 106.822 21.0629C106.871 21.0968 106.905 21.1476 106.919 21.2054C106.932 21.2632 106.923 21.3239 106.894 21.3757C105.329 24.186 102.283 24.9616 100.101 25.1161C100.041 25.1211 99.9861 25.1482 99.9457 25.192C99.9052 25.2359 99.8828 25.2932 99.8828 25.3528C99.8828 25.4123 99.9052 25.4697 99.9457 25.5136C99.9861 25.5574 100.041 25.5845 100.101 25.5895C106.358 26.2539 111.635 20.7644 111.445 13.4064C111.442 13.3476 111.461 13.2898 111.499 13.2444C111.536 13.1989 111.589 13.1691 111.648 13.1608C111.706 13.1525 111.766 13.1662 111.814 13.1994C111.863 13.2326 111.898 13.2827 111.911 13.34C112.2 14.3577 112.332 15.4135 112.302 16.4709C112.301 16.529 112.321 16.5856 112.358 16.63C112.396 16.6745 112.448 16.7037 112.506 16.712C112.564 16.7204 112.622 16.7075 112.671 16.6756C112.72 16.6437 112.755 16.5951 112.77 16.539C113.27 14.6505 113.35 12.5062 112.755 9.59456C112.741 9.53797 112.748 9.47812 112.775 9.42642C112.802 9.37472 112.848 9.3348 112.902 9.31427C112.957 9.29373 113.017 9.29403 113.072 9.31509C113.127 9.33615 113.171 9.37651 113.198 9.42847C113.873 10.7943 114.301 12.2688 114.46 13.7835C114.466 13.8434 114.495 13.8986 114.541 13.9381C114.586 13.9776 114.645 13.9985 114.706 13.9966C114.766 13.9947 114.823 13.9702 114.866 13.9279C114.909 13.8856 114.935 13.8287 114.938 13.7685C114.947 13.7108 114.978 13.6588 115.024 13.6224C115.07 13.586 115.127 13.5679 115.186 13.5717C115.244 13.5754 115.299 13.6006 115.34 13.6425C115.381 13.6844 115.405 13.74 115.407 13.7984C115.468 14.9157 115.439 16.0361 115.319 17.1486Z" fill="#53A4DB" />
    <path d="M21.5032 2.29099C19.0996 1.09179 16.3252 0.492188 13.1803 0.492188H0V29.4325H13.1753C16.3225 29.4325 19.0968 28.8329 21.4983 27.6337C23.8136 26.513 25.7662 24.765 27.1329 22.5894C28.4857 20.4269 29.1621 17.8845 29.1621 14.9623C29.1621 12.0402 28.4857 9.49784 27.1329 7.33529C25.7675 5.16039 23.8167 3.41243 21.5032 2.29099ZM21.192 19.7309C20.4204 21.0799 19.2677 22.1723 17.8778 22.8718C16.4551 23.6026 14.7772 23.968 12.844 23.968H6.75326V5.95005H12.844C14.7772 5.95005 16.4551 6.31491 17.8778 7.04462C19.2634 7.74159 20.4152 8.82678 21.192 10.1672C21.9799 11.517 22.3733 13.1154 22.3722 14.9623C22.3722 16.7772 21.9788 18.3689 21.192 19.7376V19.7309Z" fill="#111315" />
    <path d="M39.0372 17.3608H52.5038V12.1088H39.0372V5.867H54.2849V0.492188H32.3672V29.4325H54.8243V24.0577H39.0372V17.3608Z" fill="#111315" />
    <path d="M65.2716 8.26556C66.1102 7.43091 67.1112 6.77637 68.2129 6.34219C69.4002 5.87741 70.6663 5.64616 71.9416 5.6612C73.3214 5.64966 74.6863 5.94588 75.9366 6.52821C77.2053 7.1384 78.3284 8.01222 79.2309 9.09105L83.5805 5.12305C82.2075 3.44916 80.4435 2.13734 78.4435 1.30288C76.3994 0.433649 74.1206 -0.000406086 71.607 0.000701211C69.4789 -0.0183927 67.3653 0.352608 65.3714 1.09526C63.5082 1.79121 61.8034 2.85236 60.3577 4.21617C58.9405 5.56002 57.8128 7.17807 57.0435 8.97146C55.4699 12.8135 55.4699 17.1182 57.0435 20.9602C57.8166 22.7655 58.9499 24.3948 60.3746 25.7489C61.7992 27.103 63.4852 28.1535 65.3298 28.8364C67.3237 29.579 69.4372 29.95 71.5654 29.9309C74.1056 29.9309 76.3983 29.488 78.4435 28.6022C80.4421 27.7536 82.2048 26.4342 83.5805 24.7571L79.2309 20.7874C78.3259 21.8692 77.2037 22.7496 75.9366 23.3719C74.6903 23.9681 73.3238 24.272 71.9416 24.2605C70.6664 24.2747 69.4004 24.0434 68.2129 23.5795C67.1105 23.1467 66.1092 22.492 65.2715 21.6561C64.4338 20.8203 63.7777 19.8212 63.344 18.7212C62.4339 16.2954 62.4339 13.623 63.344 11.1971C63.7799 10.0993 64.4358 9.10171 65.2716 8.26556Z" fill="#111315" />
    <path d="M138.011 18.05L123.592 0.492188H118.039V29.4325H124.669V11.8747L139.088 29.4325H144.639V0.492188H138.011V18.05Z" fill="#111315" />
    <path d="M146.906 5.95005H156.186V29.4325H162.898V5.95005H172.18V0.492188H146.906V5.95005Z" fill="#111315" />
    <path d="M181.115 17.3608H194.582V12.1088H181.115V5.867H196.363V0.492188H174.445V29.4325H196.902V24.0577H181.115V17.3608Z" fill="#111315" />
    <path d="M227.93 29.4325L217.11 14.4674L227.224 0.492188H219.975L213.407 9.8267L206.758 0.492188H199.176L209.313 14.6966L198.637 29.4325H206.302L213.19 19.3738L220.182 29.4325H227.93Z" fill="#111315" />
    <path d="M6.92813 47.7832C6.42421 47.9741 5.8891 48.0699 5.3501 48.0656C4.78651 48.0704 4.22719 47.9678 3.70215 47.7633C3.2047 47.5697 2.75169 47.2776 2.37047 46.9046C1.99477 46.5351 1.69557 46.0955 1.4899 45.6107C1.06812 44.5693 1.06812 43.405 1.4899 42.3636C1.69599 41.8791 1.99514 41.4395 2.37047 41.0697C2.75132 40.6966 3.20446 40.405 3.70215 40.2127C4.22696 40.0074 4.78644 39.9048 5.3501 39.9104C5.88839 39.9058 6.42305 39.9986 6.92813 40.1844C7.43542 40.3792 7.89309 40.6838 8.26813 41.0763L8.93397 40.412C8.49661 39.9319 7.95036 39.5634 7.34095 39.3373C6.02551 38.8544 4.57994 38.8591 3.26769 39.3506C2.65655 39.5883 2.0987 39.9445 1.6264 40.3987C1.16121 40.8503 0.792075 41.3909 0.541077 41.9882C0.0279743 43.2676 0.0279743 44.695 0.541077 45.9745C0.791425 46.5739 1.16092 47.1166 1.62726 47.5696C2.0936 48.0227 2.64711 48.3767 3.25437 48.6104C4.57189 49.1027 6.02344 49.1027 7.34095 48.6104C7.95025 48.3801 8.49618 48.009 8.93397 47.5275L8.26813 46.8631C7.89453 47.2642 7.43704 47.5783 6.92813 47.7832Z" fill="#111315" />
    <path d="M12.6163 48.0089V39.0664H11.5742V48.9075H18.1394V48.0089H12.6163Z" fill="#111315" />
    <path d="M21.6921 48.0089V44.3532H26.7925V43.4662H21.6921V39.965H27.4134V39.0664H20.6484V48.9075H27.6248V48.0089H21.6921Z" fill="#111315" />
    <path d="M38.724 48.9104H39.8226L35.3132 39.0693H34.2845L29.7734 48.9104H30.8588L32.039 46.2812H37.5421L38.724 48.9104ZM32.4185 45.4391L34.7922 40.1456L37.1659 45.4391H32.4185Z" fill="#111315" />
    <path d="M49.4448 39.0664V47.0489L43.0894 39.0664H42.2305V48.9075H43.2725V40.9267L49.6146 48.9075H50.4735V39.0664H49.4448Z" fill="#111315" />
    <path d="M55.0264 48.0089V44.3532H60.1284V43.4662H55.0264V39.965H60.7476V39.0664H53.9844V48.9075H60.959V48.0089H55.0264Z" fill="#111315" />
    <path d="M71.604 48.9102L69.192 45.5335C69.322 45.4919 69.4498 45.4436 69.5749 45.389C70.1417 45.1503 70.6249 44.7491 70.9631 44.2363C71.2968 43.6984 71.4658 43.0749 71.4492 42.4425C71.4692 41.7992 71.3002 41.1642 70.9631 40.6155C70.6249 40.1027 70.1417 39.7015 69.5749 39.4628C68.8898 39.1788 68.1524 39.0424 67.4109 39.0625H63.7305V48.9102H64.7725V45.7893H67.4225C67.6878 45.7892 67.9529 45.7742 68.2166 45.7445L70.4621 48.9102H71.604ZM67.3926 44.9007H64.7692V39.966H67.3926C68.378 39.966 69.1271 40.1814 69.6398 40.6122C70.1525 41.0429 70.4083 41.6519 70.4072 42.4392C70.4072 43.2143 70.1514 43.8189 69.6398 44.2529C69.1282 44.687 68.3791 44.9029 67.3926 44.9007Z" fill="#111315" />
    <path d="M74.1265 48.9785C74.0275 48.98 73.9294 48.9607 73.8385 48.9218C73.7475 48.8828 73.6659 48.8252 73.5988 48.7526C73.5271 48.6807 73.4707 48.595 73.433 48.5009C73.3952 48.4067 73.3769 48.3059 73.3791 48.2045C73.3791 48.0062 73.458 47.8161 73.5985 47.6759C73.739 47.5358 73.9295 47.457 74.1282 47.457C74.3268 47.457 74.5173 47.5358 74.6578 47.6759C74.7983 47.8161 74.8772 48.0062 74.8772 48.2045C74.8794 48.3059 74.8611 48.4067 74.8233 48.5009C74.7856 48.595 74.7292 48.6807 74.6575 48.7526C74.5901 48.8256 74.5079 48.8835 74.4163 48.9224C74.3248 48.9614 74.226 48.9805 74.1265 48.9785Z" fill="#111315" />
    <path d="M89.6971 45.0552C89.4724 44.733 89.1724 44.4703 88.8232 44.2895C88.4467 44.0905 88.05 43.9323 87.6397 43.8178C87.2113 43.696 86.7813 43.5853 86.3496 43.4856C85.9465 43.3908 85.5491 43.2733 85.1594 43.1335C84.829 43.0218 84.5296 42.8341 84.2855 42.5854C84.057 42.3313 83.9375 41.998 83.9526 41.6569C83.9483 41.3336 84.0443 41.0169 84.2273 40.75C84.4426 40.4584 84.7389 40.2361 85.0795 40.1106C85.5482 39.9368 86.0463 39.8556 86.546 39.8714C87.0106 39.875 87.4726 39.9415 87.9193 40.0691C88.3983 40.2022 88.8529 40.4108 89.266 40.6869L89.6172 39.8565C89.1862 39.5676 88.7104 39.3515 88.209 39.217C87.6727 39.0627 87.1174 38.9845 86.5594 38.9845C85.8547 38.9598 85.153 39.0867 84.5019 39.3565C84.0177 39.5625 83.6042 39.9048 83.3117 40.3415C83.0554 40.7421 82.9207 41.2082 82.9239 41.6835C82.9038 42.1314 83.0198 42.5749 83.2568 42.9558C83.4809 43.2824 83.7807 43.5501 84.1307 43.7364C84.5076 43.9395 84.9071 44.0978 85.3209 44.2081C85.7537 44.3244 86.1865 44.4357 86.6176 44.5403C87.0196 44.6339 87.4149 44.7538 87.8011 44.8991C88.1291 45.0151 88.4258 45.205 88.6684 45.4538C88.8969 45.7079 89.0164 46.0413 89.0013 46.3823C89.0033 46.6945 88.9072 46.9994 88.7266 47.2543C88.5081 47.5429 88.2086 47.7603 87.8661 47.8788C87.3799 48.0492 86.8663 48.1281 86.3513 48.1113C85.7175 48.1139 85.089 47.9973 84.4986 47.7675C83.9793 47.5792 83.5029 47.2895 83.097 46.9155L82.6875 47.7177C83.13 48.1386 83.6629 48.4533 84.2456 48.6379C84.9214 48.8779 85.6339 48.9993 86.3513 48.9966C87.0629 49.0216 87.7717 48.8947 88.4304 48.6246C88.9186 48.4187 89.3371 48.0767 89.6355 47.6396C89.8948 47.2449 90.032 46.7828 90.03 46.3109C90.0508 45.8682 89.9346 45.4298 89.6971 45.0552Z" fill="#111315" />
    <path d="M100.603 48.9108H101.704L97.1894 39.0664H96.1606L91.6562 48.9108H92.7416L93.9201 46.2816H99.4249L100.603 48.9108ZM94.298 45.4395L96.6717 40.146L99.0471 45.4395H94.298Z" fill="#111315" />
    <path d="M110.874 39.965V39.0664H104.109V48.9075H105.153V44.7319H110.253V43.8317H105.153V39.965H110.874Z" fill="#111315" />
    <path d="M114.579 48.0089V44.3532H119.679V43.4662H114.579V39.965H120.298V39.0664H113.535V48.9075H120.51V48.0089H114.579Z" fill="#111315" />
    <path d="M131.154 48.911L128.742 45.5343C128.872 45.4926 129 45.4444 129.125 45.3898C129.692 45.1511 130.175 44.7499 130.513 44.2371C130.847 43.6992 131.016 43.0757 130.999 42.4433C131.019 41.8 130.85 41.1649 130.513 40.6163C130.175 40.1034 129.692 39.7023 129.125 39.4635C128.443 39.1807 127.708 39.0444 126.969 39.0633H123.277V48.911H124.321V45.7901H126.971C127.236 45.7899 127.501 45.7749 127.765 45.7452L130.014 48.911H131.154ZM126.941 44.9048H124.321V39.9701H126.943C127.928 39.9701 128.677 40.1855 129.19 40.6163C129.703 41.047 129.958 41.656 129.957 42.4433C129.957 43.2184 129.702 43.823 129.19 44.257C128.678 44.6911 127.929 44.9059 126.941 44.9015V44.9048Z" fill="#111315" />
    <path d="M133.677 48.9785C133.578 48.98 133.48 48.9607 133.389 48.9218C133.298 48.8828 133.217 48.8252 133.15 48.7526C133.078 48.6807 133.022 48.595 132.984 48.5009C132.946 48.4067 132.928 48.3059 132.93 48.2045C132.93 48.0062 133.009 47.8161 133.149 47.6759C133.29 47.5358 133.48 47.457 133.679 47.457C133.878 47.457 134.068 47.5358 134.209 47.6759C134.349 47.8161 134.428 48.0062 134.428 48.2045C134.43 48.3057 134.412 48.4064 134.374 48.5005C134.337 48.5946 134.281 48.6804 134.21 48.7526C134.142 48.8255 134.06 48.8833 133.968 48.9222C133.876 48.9611 133.777 48.9803 133.677 48.9785Z" fill="#111315" />
    <path d="M150.218 39.0664V43.453H144.048V39.0664H143.004V48.9075H144.048V44.3665H150.218V48.9075H151.247V39.0664H150.218Z" fill="#111315" />
    <path d="M155.968 48.0089V44.3532H161.07V43.4662H155.968V39.965H161.689V39.0664H154.926V48.9075H161.9V48.0089H155.968Z" fill="#111315" />
    <path d="M173.002 48.9108H174.101L169.599 39.0664H168.572L164.055 48.9108H165.138L166.319 46.2816H171.823L173.002 48.9108ZM166.696 45.4395L169.07 40.1444L171.445 45.4395H166.696Z" fill="#111315" />
    <path d="M177.552 48.0089V39.0664H176.508V48.9075H183.075V48.0089H177.552Z" fill="#111315" />
    <path d="M183.016 39.0664V39.965H186.483V48.9075H187.525V39.965H190.992V39.0664H183.016Z" fill="#111315" />
    <path d="M200.683 39.0664V43.453H194.511V39.0664H193.469V48.9075H194.511V44.3665H200.683V48.9075H201.712V39.0664H200.683Z" fill="#111315" />
    <path d="M206.429 39.0664H205.387V48.9092H206.429V39.0664Z" fill="#111315" />
    <path d="M211.151 48.0089V44.3532H216.252V43.4662H211.151V39.965H216.873V39.0664H210.109V48.9075H217.084V48.0089H211.151Z" fill="#111315" />
    <path d="M227.728 48.9102L225.316 45.5335C225.447 45.4924 225.574 45.4442 225.699 45.389C226.266 45.1507 226.75 44.7495 227.088 44.2363C227.422 43.6987 227.591 43.075 227.574 42.4425C227.594 41.7992 227.425 41.1639 227.088 40.6155C226.75 40.1023 226.266 39.7011 225.699 39.4628C225.014 39.1788 224.277 39.0424 223.535 39.0625H219.852V48.9102H220.895V45.7893H223.544C223.809 45.7892 224.074 45.7742 224.338 45.7445L226.588 48.9102H227.728ZM223.515 44.904H220.895V39.9694H223.515C224.502 39.9694 225.251 40.1847 225.763 40.6155C226.274 41.0462 226.53 41.6552 226.532 42.4425C226.532 43.2176 226.275 43.8222 225.763 44.2563C225.25 44.6903 224.501 44.9051 223.515 44.9007V44.904Z" fill="#111315" />
    <path d="M230.256 48.9785C230.157 48.9801 230.058 48.9608 229.967 48.9218C229.876 48.8829 229.794 48.8253 229.726 48.7526C229.655 48.6804 229.599 48.5947 229.562 48.5005C229.524 48.4064 229.506 48.3057 229.508 48.2045C229.505 48.105 229.521 48.0057 229.557 47.9129C229.594 47.82 229.648 47.7355 229.718 47.6644C229.788 47.5934 229.872 47.5373 229.964 47.4997C230.057 47.462 230.156 47.4436 230.256 47.4454C230.355 47.4438 230.454 47.4624 230.547 47.5002C230.639 47.5379 230.722 47.594 230.792 47.665C230.862 47.7361 230.916 47.8205 230.952 47.9133C230.988 48.006 231.005 48.1051 231.001 48.2045C231.004 48.3058 230.986 48.4066 230.948 48.5007C230.911 48.5949 230.855 48.6806 230.783 48.7526C230.716 48.8252 230.635 48.8829 230.544 48.9218C230.453 48.9607 230.355 48.98 230.256 48.9785Z" fill="#111315" />
  </svg>
)

const LogoWhite = () => (
  <svg width="231" height="49" viewBox="0 0 231 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.319 17.1486C114.32 25.1311 107.046 30.2518 99.1572 29.9196C90.7293 29.8631 83.6098 23.5498 83.728 14.9611C83.6883 11.9781 84.5693 9.05519 86.2515 6.58897C87.9337 4.12275 90.3357 2.23266 93.1313 1.17523C96.4871 -0.205016 101.002 -0.349517 104.54 0.64705C106.733 1.27587 108.766 2.36295 110.505 3.83607C110.548 3.87633 110.574 3.93117 110.579 3.98992C110.584 4.04866 110.567 4.10712 110.531 4.15393C110.495 4.20074 110.443 4.23255 110.385 4.24318C110.327 4.25381 110.267 4.2425 110.217 4.21144C109.301 3.60188 108.161 2.88269 107.007 2.2698C106.888 2.20502 106.796 2.39769 106.913 2.46745C108.391 3.35772 110.122 5.02531 110.779 7.02509C110.796 7.07881 110.793 7.13677 110.771 7.18862C110.749 7.24046 110.71 7.28283 110.659 7.30817C110.609 7.3335 110.551 7.34016 110.496 7.32694C110.441 7.31373 110.393 7.28151 110.36 7.23603C107.999 3.65835 102.478 1.30977 97.4776 2.22495C97.4171 2.23405 97.3624 2.26621 97.3252 2.31467C97.288 2.36312 97.271 2.4241 97.2779 2.48477C97.2848 2.54543 97.3151 2.60107 97.3622 2.63997C97.4094 2.67887 97.4698 2.698 97.5308 2.69334C101.096 2.57209 104.76 3.54706 106.315 5.78768C106.347 5.83475 106.362 5.8919 106.355 5.94866C106.349 6.00543 106.322 6.05799 106.28 6.09673C106.238 6.13548 106.183 6.1578 106.126 6.15961C106.069 6.16142 106.013 6.14259 105.969 6.10658C104.569 4.96551 101.689 3.36768 97.5342 3.8477C95.009 4.14002 92.5237 5.58505 90.9424 7.48517C90.8993 7.53076 90.8762 7.59155 90.8781 7.65415C90.8799 7.71676 90.9067 7.77606 90.9524 7.81901C90.998 7.86196 91.059 7.88504 91.1217 7.88317C91.1845 7.8813 91.2439 7.85464 91.2869 7.80905C92.1721 6.99594 93.1665 6.31001 94.2416 5.77107C95.7248 4.9788 100.084 3.98057 103.199 5.89232C103.247 5.92467 103.282 5.9736 103.297 6.02985C103.311 6.0861 103.305 6.14577 103.278 6.19755C103.252 6.24933 103.207 6.28963 103.153 6.31082C103.099 6.33201 103.039 6.33263 102.984 6.31254C101.592 5.77932 100.096 5.57136 98.6112 5.70463C92.1675 6.28928 88.9848 12.9696 91.1987 18.7015C93.9603 25.5214 102.728 25.7655 106.503 21.1033C106.542 21.0582 106.596 21.0292 106.655 21.0217C106.714 21.0143 106.773 21.0289 106.822 21.0629C106.871 21.0968 106.905 21.1476 106.919 21.2054C106.932 21.2632 106.923 21.3239 106.894 21.3757C105.329 24.186 102.283 24.9616 100.101 25.1161C100.041 25.1211 99.9861 25.1482 99.9457 25.192C99.9052 25.2359 99.8828 25.2932 99.8828 25.3528C99.8828 25.4123 99.9052 25.4697 99.9457 25.5136C99.9861 25.5574 100.041 25.5845 100.101 25.5895C106.358 26.2539 111.635 20.7644 111.445 13.4064C111.442 13.3476 111.461 13.2898 111.499 13.2444C111.536 13.1989 111.589 13.1691 111.648 13.1608C111.706 13.1525 111.766 13.1662 111.814 13.1994C111.863 13.2326 111.898 13.2827 111.911 13.34C112.2 14.3577 112.332 15.4135 112.302 16.4709C112.301 16.529 112.321 16.5856 112.358 16.63C112.396 16.6745 112.448 16.7037 112.506 16.712C112.564 16.7204 112.622 16.7075 112.671 16.6756C112.72 16.6437 112.755 16.5951 112.77 16.539C113.27 14.6505 113.35 12.5062 112.755 9.59456C112.741 9.53797 112.748 9.47812 112.775 9.42642C112.802 9.37472 112.848 9.3348 112.902 9.31427C112.957 9.29373 113.017 9.29403 113.072 9.31509C113.127 9.33615 113.171 9.37651 113.198 9.42847C113.873 10.7943 114.301 12.2688 114.46 13.7835C114.466 13.8434 114.495 13.8986 114.541 13.9381C114.586 13.9776 114.645 13.9985 114.706 13.9966C114.766 13.9947 114.823 13.9702 114.866 13.9279C114.909 13.8856 114.935 13.8287 114.938 13.7685C114.947 13.7108 114.978 13.6588 115.024 13.6224C115.07 13.586 115.127 13.5679 115.186 13.5717C115.244 13.5754 115.299 13.6006 115.34 13.6425C115.381 13.6844 115.405 13.74 115.407 13.7984C115.468 14.9157 115.439 16.0361 115.319 17.1486Z" fill="#53A4DB" />
    <path d="M21.5032 2.29099C19.0996 1.09179 16.3252 0.492188 13.1803 0.492188H0V29.4325H13.1753C16.3225 29.4325 19.0968 28.8329 21.4983 27.6337C23.8136 26.513 25.7662 24.765 27.1329 22.5894C28.4857 20.4269 29.1621 17.8845 29.1621 14.9623C29.1621 12.0402 28.4857 9.49784 27.1329 7.33529C25.7675 5.16039 23.8167 3.41243 21.5032 2.29099ZM21.192 19.7309C20.4204 21.0799 19.2677 22.1723 17.8778 22.8718C16.4551 23.6026 14.7772 23.968 12.844 23.968H6.75326V5.95005H12.844C14.7772 5.95005 16.4551 6.31491 17.8778 7.04462C19.2634 7.74159 20.4152 8.82678 21.192 10.1672C21.9799 11.517 22.3733 13.1154 22.3722 14.9623C22.3722 16.7772 21.9788 18.3689 21.192 19.7376V19.7309Z" fill="#F3F3F3" />
    <path d="M39.0372 17.3608H52.5038V12.1088H39.0372V5.867H54.2849V0.492188H32.3672V29.4325H54.8243V24.0577H39.0372V17.3608Z" fill="#F3F3F3" />
    <path d="M65.2755 8.26556C66.1141 7.43091 67.1151 6.77637 68.2168 6.34219C69.4041 5.87741 70.6702 5.64616 71.9455 5.6612C73.3253 5.64966 74.6902 5.94588 75.9405 6.52821C77.2092 7.1384 78.3323 8.01222 79.2348 9.09105L83.5844 5.12305C82.2114 3.44916 80.4474 2.13734 78.4474 1.30288C76.4033 0.433649 74.1245 -0.000406086 71.6109 0.000701211C69.4828 -0.0183927 67.3692 0.352608 65.3753 1.09526C63.5121 1.79121 61.8073 2.85236 60.3616 4.21617C58.9444 5.56002 57.8167 7.17807 57.0474 8.97146C55.4738 12.8135 55.4738 17.1182 57.0474 20.9602C57.8205 22.7655 58.9539 24.3948 60.3785 25.7489C61.8031 27.103 63.4891 28.1535 65.3337 28.8364C67.3276 29.579 69.4412 29.95 71.5693 29.9309C74.1095 29.9309 76.4022 29.488 78.4474 28.6022C80.446 27.7536 82.2087 26.4342 83.5844 24.7571L79.2348 20.7874C78.3298 21.8692 77.2076 22.7496 75.9405 23.3719C74.6942 23.9681 73.3277 24.272 71.9455 24.2605C70.6703 24.2747 69.4043 24.0434 68.2168 23.5795C67.1144 23.1467 66.1131 22.492 65.2754 21.6561C64.4377 20.8203 63.7816 19.8212 63.3479 18.7212C62.4378 16.2954 62.4378 13.623 63.3479 11.1971C63.7838 10.0993 64.4397 9.10171 65.2755 8.26556Z" fill="#F3F3F3" />
    <path d="M138.011 18.05L123.592 0.492188H118.039V29.4325H124.669V11.8747L139.088 29.4325H144.639V0.492188H138.011V18.05Z" fill="#F3F3F3" />
    <path d="M146.906 5.95005H156.186V29.4325H162.898V5.95005H172.18V0.492188H146.906V5.95005Z" fill="#F3F3F3" />
    <path d="M181.115 17.3608H194.582V12.1088H181.115V5.867H196.363V0.492188H174.445V29.4325H196.902V24.0577H181.115V17.3608Z" fill="#F3F3F3" />
    <path d="M227.934 29.4325L217.114 14.4674L227.228 0.492188H219.979L213.411 9.8267L206.762 0.492188H199.18L209.317 14.6966L198.641 29.4325H206.306L213.194 19.3738L220.186 29.4325H227.934Z" fill="#F3F3F3" />
    <path d="M6.92813 47.7832C6.42421 47.9741 5.8891 48.0699 5.3501 48.0656C4.78651 48.0704 4.22719 47.9678 3.70215 47.7633C3.2047 47.5697 2.75169 47.2776 2.37047 46.9046C1.99477 46.5351 1.69557 46.0955 1.4899 45.6107C1.06812 44.5693 1.06812 43.405 1.4899 42.3636C1.69599 41.8791 1.99514 41.4395 2.37047 41.0697C2.75132 40.6966 3.20446 40.405 3.70215 40.2127C4.22696 40.0074 4.78644 39.9048 5.3501 39.9104C5.88839 39.9058 6.42305 39.9986 6.92813 40.1844C7.43542 40.3792 7.89309 40.6838 8.26813 41.0763L8.93397 40.412C8.49661 39.9319 7.95036 39.5634 7.34095 39.3373C6.02551 38.8544 4.57994 38.8591 3.26769 39.3506C2.65655 39.5883 2.0987 39.9445 1.6264 40.3987C1.16121 40.8503 0.792075 41.3909 0.541077 41.9882C0.0279743 43.2676 0.0279743 44.695 0.541077 45.9745C0.791425 46.5739 1.16092 47.1166 1.62726 47.5696C2.0936 48.0227 2.64711 48.3767 3.25437 48.6104C4.57189 49.1027 6.02344 49.1027 7.34095 48.6104C7.95025 48.3801 8.49618 48.009 8.93397 47.5275L8.26813 46.8631C7.89453 47.2642 7.43704 47.5783 6.92813 47.7832Z" fill="#F3F3F3" />
    <path d="M12.6202 48.0089V39.0664H11.5781V48.9075H18.1433V48.0089H12.6202Z" fill="#F3F3F3" />
    <path d="M21.6921 48.0089V44.3532H26.7925V43.4662H21.6921V39.965H27.4134V39.0664H20.6484V48.9075H27.6248V48.0089H21.6921Z" fill="#F3F3F3" />
    <path d="M38.724 48.9104H39.8226L35.3132 39.0693H34.2845L29.7734 48.9104H30.8588L32.039 46.2812H37.5421L38.724 48.9104ZM32.4185 45.4391L34.7922 40.1456L37.1659 45.4391H32.4185Z" fill="#F3F3F3" />
    <path d="M49.4487 39.0664V47.0489L43.0933 39.0664H42.2344V48.9075H43.2764V40.9267L49.6185 48.9075H50.4774V39.0664H49.4487Z" fill="#F3F3F3" />
    <path d="M55.0264 48.0089V44.3532H60.1284V43.4662H55.0264V39.965H60.7476V39.0664H53.9844V48.9075H60.959V48.0089H55.0264Z" fill="#F3F3F3" />
    <path d="M71.6079 48.9102L69.1959 45.5335C69.3259 45.4919 69.4537 45.4436 69.5788 45.389C70.1456 45.1503 70.6288 44.7491 70.967 44.2363C71.3007 43.6984 71.4697 43.0749 71.4531 42.4425C71.4731 41.7992 71.3041 41.1642 70.967 40.6155C70.6288 40.1027 70.1456 39.7015 69.5788 39.4628C68.8937 39.1788 68.1563 39.0424 67.4148 39.0625H63.7344V48.9102H64.7764V45.7893H67.4264C67.6917 45.7892 67.9568 45.7742 68.2205 45.7445L70.466 48.9102H71.6079ZM67.3965 44.9007H64.7731V39.966H67.3965C68.3819 39.966 69.131 40.1814 69.6437 40.6122C70.1564 41.0429 70.4122 41.6519 70.4111 42.4392C70.4111 43.2143 70.1553 43.8189 69.6437 44.2529C69.1321 44.687 68.383 44.9029 67.3965 44.9007Z" fill="#F3F3F3" />
    <path d="M74.1226 48.9785C74.0236 48.98 73.9255 48.9607 73.8346 48.9218C73.7436 48.8828 73.662 48.8252 73.5949 48.7526C73.5232 48.6807 73.4668 48.595 73.429 48.5009C73.3913 48.4067 73.373 48.3059 73.3752 48.2045C73.3752 48.0062 73.4541 47.8161 73.5946 47.6759C73.735 47.5358 73.9256 47.457 74.1242 47.457C74.3229 47.457 74.5134 47.5358 74.6539 47.6759C74.7944 47.8161 74.8733 48.0062 74.8733 48.2045C74.8755 48.3059 74.8572 48.4067 74.8194 48.5009C74.7817 48.595 74.7253 48.6807 74.6536 48.7526C74.5862 48.8256 74.504 48.8835 74.4124 48.9224C74.3209 48.9614 74.2221 48.9805 74.1226 48.9785Z" fill="#F3F3F3" />
    <path d="M89.6971 45.0552C89.4724 44.733 89.1724 44.4703 88.8232 44.2895C88.4467 44.0905 88.05 43.9323 87.6397 43.8178C87.2113 43.696 86.7813 43.5853 86.3496 43.4856C85.9465 43.3908 85.5491 43.2733 85.1594 43.1335C84.829 43.0218 84.5296 42.8341 84.2855 42.5854C84.057 42.3313 83.9375 41.998 83.9526 41.6569C83.9483 41.3336 84.0443 41.0169 84.2273 40.75C84.4426 40.4584 84.7389 40.2361 85.0795 40.1106C85.5482 39.9368 86.0463 39.8556 86.546 39.8714C87.0106 39.875 87.4726 39.9415 87.9193 40.0691C88.3983 40.2022 88.8529 40.4108 89.266 40.6869L89.6172 39.8565C89.1862 39.5676 88.7104 39.3515 88.209 39.217C87.6727 39.0627 87.1174 38.9845 86.5594 38.9845C85.8547 38.9598 85.153 39.0867 84.5019 39.3565C84.0177 39.5625 83.6042 39.9048 83.3117 40.3415C83.0554 40.7421 82.9207 41.2082 82.9239 41.6835C82.9038 42.1314 83.0198 42.5749 83.2568 42.9558C83.4809 43.2824 83.7807 43.5501 84.1307 43.7364C84.5076 43.9395 84.9071 44.0978 85.3209 44.2081C85.7537 44.3244 86.1865 44.4357 86.6176 44.5403C87.0196 44.6339 87.4149 44.7538 87.8011 44.8991C88.1291 45.0151 88.4258 45.205 88.6684 45.4538C88.8969 45.7079 89.0164 46.0413 89.0013 46.3823C89.0033 46.6945 88.9072 46.9994 88.7266 47.2543C88.5081 47.5429 88.2086 47.7603 87.8661 47.8788C87.3799 48.0492 86.8663 48.1281 86.3513 48.1113C85.7175 48.1139 85.089 47.9973 84.4986 47.7675C83.9793 47.5792 83.5029 47.2895 83.097 46.9155L82.6875 47.7177C83.13 48.1386 83.6629 48.4533 84.2456 48.6379C84.9214 48.8779 85.6339 48.9993 86.3513 48.9966C87.0629 49.0216 87.7717 48.8947 88.4304 48.6246C88.9186 48.4187 89.3371 48.0767 89.6355 47.6396C89.8948 47.2449 90.032 46.7828 90.03 46.3109C90.0508 45.8682 89.9346 45.4298 89.6971 45.0552Z" fill="#F3F3F3" />
    <path d="M100.603 48.9108H101.704L97.1894 39.0664H96.1606L91.6562 48.9108H92.7416L93.9201 46.2816H99.4249L100.603 48.9108ZM94.298 45.4395L96.6717 40.146L99.0471 45.4395H94.298Z" fill="#F3F3F3" />
    <path d="M110.874 39.965V39.0664H104.109V48.9075H105.153V44.7319H110.253V43.8317H105.153V39.965H110.874Z" fill="#F3F3F3" />
    <path d="M114.575 48.0089V44.3532H119.675V43.4662H114.575V39.965H120.294V39.0664H113.531V48.9075H120.506V48.0089H114.575Z" fill="#F3F3F3" />
    <path d="M131.158 48.911L128.746 45.5343C128.876 45.4926 129.004 45.4444 129.129 45.3898C129.696 45.1511 130.179 44.7499 130.517 44.2371C130.851 43.6992 131.02 43.0757 131.003 42.4433C131.023 41.8 130.854 41.1649 130.517 40.6163C130.179 40.1034 129.696 39.7023 129.129 39.4635C128.447 39.1807 127.712 39.0444 126.973 39.0633H123.281V48.911H124.325V45.7901H126.975C127.24 45.7899 127.505 45.7749 127.769 45.7452L130.018 48.911H131.158ZM126.945 44.9048H124.325V39.9701H126.947C127.932 39.9701 128.681 40.1855 129.194 40.6163C129.707 41.047 129.962 41.656 129.961 42.4433C129.961 43.2184 129.705 43.823 129.194 44.257C128.682 44.6911 127.933 44.9059 126.945 44.9015V44.9048Z" fill="#F3F3F3" />
    <path d="M133.677 48.9785C133.578 48.98 133.48 48.9607 133.389 48.9218C133.298 48.8828 133.217 48.8252 133.15 48.7526C133.078 48.6807 133.022 48.595 132.984 48.5009C132.946 48.4067 132.928 48.3059 132.93 48.2045C132.93 48.0062 133.009 47.8161 133.149 47.6759C133.29 47.5358 133.48 47.457 133.679 47.457C133.878 47.457 134.068 47.5358 134.209 47.6759C134.349 47.8161 134.428 48.0062 134.428 48.2045C134.43 48.3057 134.412 48.4064 134.374 48.5005C134.337 48.5946 134.281 48.6804 134.21 48.7526C134.142 48.8255 134.06 48.8833 133.968 48.9222C133.876 48.9611 133.777 48.9803 133.677 48.9785Z" fill="#F3F3F3" />
    <path d="M150.222 39.0664V43.453H144.052V39.0664H143.008V48.9075H144.052V44.3665H150.222V48.9075H151.251V39.0664H150.222Z" fill="#F3F3F3" />
    <path d="M155.972 48.0089V44.3532H161.074V43.4662H155.972V39.965H161.693V39.0664H154.93V48.9075H161.904V48.0089H155.972Z" fill="#F3F3F3" />
    <path d="M173.002 48.9108H174.101L169.599 39.0664H168.572L164.055 48.9108H165.138L166.319 46.2816H171.823L173.002 48.9108ZM166.696 45.4395L169.07 40.1444L171.445 45.4395H166.696Z" fill="#F3F3F3" />
    <path d="M177.552 48.0089V39.0664H176.508V48.9075H183.075V48.0089H177.552Z" fill="#F3F3F3" />
    <path d="M183.016 39.0664V39.965H186.483V48.9075H187.525V39.965H190.992V39.0664H183.016Z" fill="#F3F3F3" />
    <path d="M200.683 39.0664V43.453H194.511V39.0664H193.469V48.9075H194.511V44.3665H200.683V48.9075H201.712V39.0664H200.683Z" fill="#F3F3F3" />
    <path d="M206.425 39.0664H205.383V48.9092H206.425V39.0664Z" fill="#F3F3F3" />
    <path d="M211.151 48.0089V44.3532H216.252V43.4662H211.151V39.965H216.873V39.0664H210.109V48.9075H217.084V48.0089H211.151Z" fill="#F3F3F3" />
    <path d="M227.728 48.9102L225.316 45.5335C225.447 45.4924 225.574 45.4442 225.699 45.389C226.266 45.1507 226.75 44.7495 227.088 44.2363C227.422 43.6987 227.591 43.075 227.574 42.4425C227.594 41.7992 227.425 41.1639 227.088 40.6155C226.75 40.1023 226.266 39.7011 225.699 39.4628C225.014 39.1788 224.277 39.0424 223.535 39.0625H219.852V48.9102H220.895V45.7893H223.544C223.809 45.7892 224.074 45.7742 224.338 45.7445L226.588 48.9102H227.728ZM223.515 44.904H220.895V39.9694H223.515C224.502 39.9694 225.251 40.1847 225.763 40.6155C226.274 41.0462 226.53 41.6552 226.532 42.4425C226.532 43.2176 226.275 43.8222 225.763 44.2563C225.25 44.6903 224.501 44.9051 223.515 44.9007V44.904Z" fill="#F3F3F3" />
    <path d="M230.256 48.9785C230.157 48.9801 230.058 48.9608 229.967 48.9218C229.876 48.8829 229.794 48.8253 229.726 48.7526C229.655 48.6804 229.599 48.5947 229.562 48.5005C229.524 48.4064 229.506 48.3057 229.508 48.2045C229.505 48.105 229.521 48.0057 229.557 47.9129C229.594 47.82 229.648 47.7355 229.718 47.6644C229.788 47.5934 229.872 47.5373 229.964 47.4997C230.057 47.462 230.156 47.4436 230.256 47.4454C230.355 47.4438 230.454 47.4624 230.547 47.5002C230.639 47.5379 230.722 47.594 230.792 47.665C230.862 47.7361 230.916 47.8205 230.952 47.9133C230.988 48.006 231.005 48.1051 231.001 48.2045C231.004 48.3058 230.986 48.4066 230.948 48.5007C230.911 48.5949 230.855 48.6806 230.783 48.7526C230.716 48.8252 230.635 48.8829 230.544 48.9218C230.453 48.9607 230.355 48.98 230.256 48.9785Z" fill="#F3F3F3" />
  </svg>
)

const DecontexLogoPolish = ({ invert }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="231" height="49" fill={!invert ? '#F3F3F3' : '#111315'} viewBox="0 0 390 83">
    <path d="M0 50.434V.852h22.536c5.38 0 10.127 1.027 14.238 3.08a23.44 23.44 0 0 1 9.632 8.642c2.315 3.71 3.472 8.066 3.469 13.069-.003 5.003-1.16 9.36-3.47 13.069a23.44 23.44 0 0 1-9.631 8.64c-4.108 2.055-8.854 3.082-14.238 3.082H0Zm11.544-9.348h10.413a18.53 18.53 0 0 0 8.604-1.881 13.548 13.548 0 0 0 5.67-5.382 17.666 17.666 0 0 0 0-16.397 13.635 13.635 0 0 0-5.67-5.345 18.583 18.583 0 0 0-8.604-1.876H11.544v30.88Zm55.193.141h27.01v9.207h-38.39V.852h37.468v9.211H66.76l-.023 31.164Zm-.835-20.473H89.77v8.997H65.9v-8.997Zm56.447 30.529a29.67 29.67 0 0 1-10.658-1.876 25.034 25.034 0 0 1-8.536-5.35 24.73 24.73 0 0 1-5.629-8.143 27.092 27.092 0 0 1 0-20.542 24.528 24.528 0 0 1 5.665-8.143 25.438 25.438 0 0 1 8.568-5.35 31.499 31.499 0 0 1 22.368.356 22.736 22.736 0 0 1 8.764 6.555l-7.441 6.801a16.833 16.833 0 0 0-5.642-4.396 15.855 15.855 0 0 0-6.847-1.488 16.892 16.892 0 0 0-6.391 1.169 14.699 14.699 0 0 0-8.321 8.321 18.36 18.36 0 0 0 0 12.891 14.699 14.699 0 0 0 8.321 8.322c2.035.8 4.205 1.196 6.391 1.169a15.517 15.517 0 0 0 6.847-1.52 17.308 17.308 0 0 0 5.629-4.428l7.44 6.797a23.001 23.001 0 0 1-8.782 6.587 29.349 29.349 0 0 1-11.746 2.268Zm79.437-.849V.852h9.49l29.256 35.7h-4.606V.853h11.334v49.582h-9.494l-29.251-35.71h4.605V50.42l-11.334.013Zm65.212 0v-40.23h-15.867V.853h43.205v9.353h-15.862v40.23h-11.476Zm42.617-9.207h26.978v9.207h-38.385V.852h37.472v9.211h-26.065v31.164Zm-.867-20.473h23.869v8.997h-23.869v-8.997Zm30.816 29.68 21.25-29.392v8.353L340.487.852h12.964l14.091 19.834-5.523.141L376.042.852h12.393l-20.254 28.05v-8.216l21.454 29.748h-13.237L361.79 29.395h5.245l-14.379 21.04h-13.092Z" />
    <path fill="#53A4DB" d="M197.134 29.39a22.593 22.593 0 0 1-1.766 6.486 24.195 24.195 0 0 1-5.702 8.18 25.836 25.836 0 0 1-8.604 5.36 29.677 29.677 0 0 1-10.431 1.871h-1.136a29.443 29.443 0 0 1-10.016-1.917 26.188 26.188 0 0 1-8.641-5.382 24.351 24.351 0 0 1-5.701-8.144 26.885 26.885 0 0 1 0-20.436 24.444 24.444 0 0 1 5.701-8.107 25.52 25.52 0 0 1 2.808-2.282l.082-.06a22.486 22.486 0 0 1 5.478-2.935l.109-.041.142-.06a29.613 29.613 0 0 1 10.8-1.907c2.852-.02 5.693.352 8.445 1.104a27.494 27.494 0 0 1 10.202 5.478.41.41 0 0 1-.488.653c-1.566-1.046-3.515-2.283-5.478-3.333-.201-.105-.361.224-.16.343 2.529 1.524 5.478 4.382 6.61 7.81a.405.405 0 0 1-.205.486.406.406 0 0 1-.512-.125 20.501 20.501 0 0 0-12.051-8.084c-4.341-1.091-7.664-.94-9.969-.503a.408.408 0 0 0-.186.7.407.407 0 0 0 .272.104c6.09-.21 12.348 1.456 15.009 5.286a.406.406 0 0 1-.579.561c-2.397-1.958-7.304-4.692-14.42-3.87a17.92 17.92 0 0 0-11.271 6.23.405.405 0 0 0 .042.555.405.405 0 0 0 .556-.007 22.074 22.074 0 0 1 5.044-3.483c2.538-1.37 9.988-3.067 15.31.206a.403.403 0 0 1 .144.525.408.408 0 0 1-.509.196 17.019 17.019 0 0 0-7.029-1.073h-.448c-1.541.14-3.053.508-4.487 1.091a14.401 14.401 0 0 0-4.925 3.332 15.655 15.655 0 0 0-3.26 5.022 18.16 18.16 0 0 0 0 12.818 15.677 15.677 0 0 0 3.26 5.02A14.66 14.66 0 0 0 161 38.657c.319.334 1.305.808 1.698 1.123l.082.046c8.047 3.775 15.301.99 19.295-3.684a.405.405 0 0 1 .703.169c.024.097.011.2-.036.288-4.378 7.732-13.535 6.998-15.653 6.3 12.348 4.331 23.787-5.79 23.422-19.949a.401.401 0 0 1 .794-.119c.797 2.72.893 5.597.279 8.363-.096.379-.192.749-.297 1.114.196-.397.388-.817.57-1.256 1.452-3.482 2.283-8.307.891-14.639a.405.405 0 0 1 .757-.274 22.14 22.14 0 0 1 2.159 7.464.408.408 0 0 0 .657.279.408.408 0 0 0 .147-.243v-.064a.409.409 0 0 1 .425-.324.404.404 0 0 1 .378.38c.112 1.92.066 3.847-.137 5.76Z" />
    <path d="M7.586 83C3.234 83 0 79.936 0 75.776s3.234-7.225 7.607-7.225c2.114 0 4.022.69 5.307 2.07l-.975.954c-1.181-1.177-2.632-1.684-4.29-1.684-3.503 0-6.136 2.516-6.136 5.885 0 3.368 2.633 5.885 6.136 5.885 1.658 0 3.109-.508 4.29-1.705l.975.954C11.629 82.29 9.72 83 7.586 83Zm9.219-1.42h9.846v1.298H14.753v-1.035l9.618-11.871h-9.473v-1.299h11.504v1.035l-9.597 11.871Zm23.659-12.907-5.804 9.294v4.911h-1.513v-4.91l-5.804-9.295h1.637l4.975 7.975 4.975-7.975h1.534Zm5.018-1.157L48.322 65h1.97l-3.359 2.516h-1.45ZM46.54 83c-2.176 0-4.311-.75-5.389-1.847l.601-1.156c1.037.994 2.882 1.725 4.788 1.725 2.716 0 3.897-1.117 3.897-2.517 0-3.896-8.934-1.501-8.934-6.757 0-2.09 1.659-3.897 5.348-3.897 1.638 0 3.338.467 4.498 1.258l-.518 1.198a7.578 7.578 0 0 0-3.98-1.177c-2.653 0-3.834 1.157-3.834 2.577 0 3.896 8.934 1.542 8.934 6.717 0 2.09-1.7 3.876-5.41 3.876Zm15.053 0c-4.353 0-7.587-3.064-7.587-7.224s3.234-7.225 7.608-7.225c2.114 0 4.02.69 5.306 2.07l-.974.954c-1.182-1.177-2.633-1.684-4.29-1.684-3.504 0-6.136 2.516-6.136 5.885 0 3.368 2.632 5.885 6.135 5.885 1.658 0 3.11-.508 4.29-1.705l.975.954C65.635 82.29 63.728 83 61.593 83Zm8.597-.122V68.673h1.534v14.205H70.19Zm7.789-1.298h8.726v1.298h-10.26V68.673h9.95v1.299h-8.416v5.053h7.503v1.278H77.98v5.276ZM91.865 83c-1.637 0-3.13-.73-4.02-2.03l.911-1.014c.788 1.136 1.845 1.745 3.13 1.745 1.783 0 2.695-1.035 2.695-3.125v-8.604h-5.307v-1.299h6.82v9.842c0 3.004-1.451 4.485-4.229 4.485Zm8.482-.02a1.103 1.103 0 0 1-1.099-1.116c0-.63.498-1.096 1.099-1.096s1.119.466 1.119 1.096a1.12 1.12 0 0 1-1.119 1.116Zm19.124-7.428c1.866.406 2.985 1.604 2.985 3.531 0 2.415-1.824 3.795-5.451 3.795h-6.675V68.673h6.26c3.234 0 5.099 1.34 5.099 3.653 0 1.623-.891 2.699-2.218 3.226Zm-2.984-5.641h-4.623v5.154h4.623c2.321 0 3.668-.872 3.668-2.577 0-1.704-1.347-2.577-3.668-2.577Zm.497 11.73c2.55 0 3.938-.812 3.938-2.68 0-1.846-1.388-2.658-3.938-2.658h-5.12v5.337h5.12Zm10.507-.061h8.727v1.298h-10.261V68.673h9.95v1.299h-8.416v5.053h7.504v1.278h-7.504v5.276Zm12.954 0h9.846v1.298h-11.898v-1.035l9.618-11.871h-9.473v-1.299h11.504v1.035l-9.597 11.871Zm18.311-12.907c3.689 0 5.928 1.826 5.928 4.87 0 3.024-2.239 4.85-5.928 4.85h-3.897v4.485h-1.534V68.673h5.431Zm-.042 8.401c2.902 0 4.436-1.298 4.436-3.53 0-2.273-1.534-3.572-4.436-3.572h-3.855v7.102h3.855Zm9.287 5.804V68.673h1.534v14.205h-1.534Zm7.788-1.298h8.727v1.298h-10.26V68.673h9.949v1.299h-8.416v5.053h7.504v1.278h-7.504v5.276ZM194.342 83c-4.353 0-7.587-3.064-7.587-7.224s3.234-7.225 7.608-7.225c2.114 0 4.021.69 5.306 2.07l-.974.954c-1.182-1.177-2.633-1.684-4.291-1.684-3.503 0-6.135 2.516-6.135 5.885 0 3.368 2.632 5.885 6.135 5.885 1.658 0 3.109-.508 4.291-1.705l.974.954c-1.285 1.38-3.192 2.09-5.327 2.09Zm9.219-1.42h9.846v1.298h-11.898v-1.035l9.617-11.871h-9.472v-1.299h11.504v1.035l-9.597 11.871Zm23.492-12.907h1.513v14.205h-1.264l-9.328-11.526v11.526h-1.534V68.673h1.265l9.348 11.526V68.674Zm6.249 14.205V68.673h1.534v14.205h-1.534Zm7.789-1.298h8.727v1.298h-10.261V68.673h9.95v1.299h-8.416v5.053h7.504v1.278h-7.504v5.276ZM254.978 83c-1.638 0-3.13-.73-4.022-2.03l.913-1.014c.787 1.136 1.844 1.745 3.129 1.745 1.783 0 2.695-1.035 2.695-3.125v-8.604h-5.306v-1.299h6.819v9.842c0 3.004-1.451 4.485-4.228 4.485Zm8.481-.02a1.103 1.103 0 0 1-1.098-1.116c0-.63.497-1.096 1.098-1.096.602 0 1.12.466 1.12 1.096a1.12 1.12 0 0 1-1.12 1.116Zm10.606-1.4h9.845v1.298h-11.897v-1.035l9.617-11.871h-9.472v-1.299h11.504v1.035l-9.597 11.871Zm12.879 1.298V68.673h5.908c4.643 0 7.773 2.922 7.773 7.103 0 4.18-3.13 7.102-7.773 7.102h-5.908Zm1.534-1.299h4.291c3.855 0 6.343-2.394 6.343-5.803 0-3.41-2.488-5.804-6.343-5.804h-4.291V81.58Zm27.178 1.299h-1.679l-3.316-4.566c-.373.04-.746.061-1.161.061h-3.897v4.505h-1.534V68.673h5.431c3.69 0 5.928 1.826 5.928 4.87 0 2.233-1.202 3.795-3.316 4.465l3.544 4.87Zm-6.197-5.783c2.902 0 4.435-1.32 4.435-3.552 0-2.272-1.533-3.571-4.435-3.571h-3.856v7.123h3.856ZM325.391 83c-4.394 0-7.628-3.085-7.628-7.224 0-4.14 3.234-7.225 7.628-7.225 4.353 0 7.608 3.065 7.608 7.225S329.744 83 325.391 83Zm0-1.34c3.483 0 6.074-2.495 6.074-5.884 0-3.39-2.591-5.885-6.074-5.885-3.503 0-6.114 2.496-6.114 5.885s2.611 5.885 6.114 5.885Zm29.048-12.987h1.472l-4.892 14.205h-1.616l-4.25-12.115-4.27 12.115h-1.596l-4.892-14.205h1.576l4.187 12.216 4.332-12.216h1.43l4.27 12.277 4.249-12.277Zm4.285 14.205V68.673h1.533v14.205h-1.533Zm7.788-1.298h8.727v1.298h-10.261V68.673h9.95v1.299h-8.416v5.053h7.504v1.278h-7.504v5.276ZM380.399 83c-1.638 0-3.13-.73-4.021-2.03l.912-1.014c.787 1.136 1.845 1.745 3.13 1.745 1.782 0 2.694-1.035 2.694-3.125v-8.604h-5.306v-1.299h6.82v9.842c0 3.004-1.451 4.485-4.229 4.485Zm8.482-.02a1.103 1.103 0 0 1-1.099-1.116c0-.63.498-1.096 1.099-1.096s1.119.466 1.119 1.096a1.12 1.12 0 0 1-1.119 1.116Z" />
  </svg>
)

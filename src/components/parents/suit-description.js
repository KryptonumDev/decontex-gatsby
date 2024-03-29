import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/style'

const Card = ({
  className,
  suit,
  activeItem,
  setActiveItem
}) => {
  const parent = useRef()

  const closeAll = (event) => {
    event.stopPropagation()
    document.querySelectorAll('.card').forEach((el) => {
      el.classList.remove('active')
    })
  }

  const addClass = (e) => {
    if (e.key) {
      if (e.key === 'Enter' || e.keyCode === 32) {
        document.querySelectorAll('.card').forEach((el) => {
          el.classList.remove('active')
        })

        parent.current.classList.add('active')
        setActiveItem(className)
      }
    } else {
      document.querySelectorAll('.card').forEach((el) => {
        el.classList.remove('active')
      })

      parent.current.classList.add('active')
      setActiveItem(className)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        document.querySelectorAll('.card').forEach((el) => {
          el.classList.remove('active')
        })
      }
    })
  }, [])

  return (
    <div
      ref={parent}
      className={
        'card ' +
        className +
        (className === 'overall' ? ' active' : '')
      }>
      <div>
        <h3
          tabIndex='0'
          onKeyDown={(key) => {
            addClass(key)
          }}
          onClick={addClass}>
          {suit.title}
        </h3>
        <p>{suit.text}</p>
        <button
          tabIndex={activeItem === className ? '0' : '-1'}
          onClick={(e) => {
            closeAll(e)
          }}
        />
      </div>
    </div>
  )
}

export default function SuitDescription({
  data: { sectionTitle, text, suit }
}) {
  const [activeItem, setActiveItem] = useState('overall')

  return (
    <Wrapper>
      <Container>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: sectionTitle }}
        />
        <div
          className='text'
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <Suit>
          <GatsbyImage
            className='image'
            image={
              suit.image.localFile.childImageSharp
                .gatsbyImageData
            }
            alt={suit.image.altText}
          />
          <Card
            className={'helmet'}
            suit={suit.helmet}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <Card
            className={'balaclava'}
            suit={suit.balaclava}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <Card
            className={'jacket'}
            suit={suit.jacket}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <Card
            className={'gloves'}
            suit={suit.gloves}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <Card
            className={'pants'}
            suit={suit.pants}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <Card
            className={'boots'}
            suit={suit.boots}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <Card
            className={'overall'}
            suit={suit.overall}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Suit>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: var(--section-margin) 0;
  background-color: var(--color-black);
  max-width: 2560px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    overflow: hidden;

    padding-bottom: clamp(
      120px,
      ${(240 / 768) * 100}vw,
      240px
    );
  }

  .title {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin-bottom: clamp(
        8px,
        ${(34 / 768) * 100}vw,
        50px
      );
      font-weight: 900;
      font-size: clamp(21px, ${(48 / 768) * 100}vw, 56px);
      line-height: 112%;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      text-align: center;
      color: var(--color-white);
    }
  }

  .text {
    max-width: 800px;
    margin: 0 auto;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin-bottom: clamp(
        60px,
        ${(90 / 768) * 100}vw,
        120px
      );
      font-weight: 700;
      font-size: clamp(13px, ${(24 / 768) * 100}vw, 32px);
      line-height: 125%;
      text-align: center;
      color: var(--color-white);
    }
  }
`

const Suit = styled.div`
  position: relative;
  height: 1025px;
  width: clamp(934px, ${(934 / 1024) * 100}vw, 1440px);
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    width: 100%;
  }

  .image {
    height: 1025px;
    width: 452px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1024px) {
      left: calc(100% + 40px);
    }

    @media (max-width: 480px) {
      left: calc(100% + 16px);
    }
  }

  .card {
    position: absolute;

    &.active {
      z-index: 100;

      div {
        background-color: #33383d;
        box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.35);
        pointer-events: all;

        h3 {
        }

        p {
          opacity: 1;
          pointer-events: all;
        }

        button {
          opacity: 1;
          pointer-events: all;
        }
      }
    }

    div {
      position: absolute;
      transform: translate(-50%, -130px);
      left: 50%;
      padding: 36px;
      width: min-content;
      min-width: 510px;
      background-color: transparent;
      transition: background-color 0.3s linear;
      z-index: 3;
      margin-left: 26px;
      pointer-events: none;

      @media (max-width: 1024px) {
        left: 50%;
        transform: translate(-50%, -95px);
        padding: 16px;
        min-width: 380px;
      }

      @media (max-width: 768px) {
        transform: translate(-50%, -85px);
        min-width: 320px;
      }

      @media (max-width: 560px) {
        transform: translate(-50%, -75px);
      }

      @media (max-width: 450px) {
        min-width: 287px;
      }

      @media (max-width: 355px) {
        min-width: 220px;
      }

      h3 {
        margin-right: 52px;
        margin-bottom: clamp(
          16px,
          ${(24 / 768) * 100}vw,
          32px
        );
        color: white;
        font-weight: 700;
        font-size: 32px;
        line-height: 125%;
        text-align: center;
        pointer-events: all;
        cursor: pointer;

        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1024px) {
          font-size: clamp(
            17px,
            ${(24 / 768) * 100}vw,
            24px
          );
          margin-bottom: 0;
          height: clamp(54px, ${(70 / 768) * 100}vw, 80px);
        }

        @media (max-width: 450px) {
          white-space: normal;
        }
      }

      p {
        color: white;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: 0.005em;
        opacity: 0;
        transition: opacity 0.3s linear;
        pointer-events: none;

        @media (max-width: 1024px) {
          font-size: clamp(
            12px,
            ${(17 / 768) * 100}vw,
            17px
          );
        }
      }

      button {
        position: absolute;
        z-index: 101;
        right: 24px;
        top: 32px;
        border: none;
        width: 44px;
        height: 44px;
        background-color: #ce2029;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s linear;

        &::after {
          content: '';
          position: absolute;
          left: 11px;
          top: 10px;
          height: 2px;
          width: 32px;
          transform-origin: 0 0;
          transform: rotateZ(45deg);
          background-color: white;
        }

        &::before {
          content: '';
          position: absolute;
          right: 11px;
          top: 10px;
          height: 2px;
          width: 32px;
          transform-origin: 100% 0;
          transform: rotateZ(-45deg);
          background-color: white;
        }

        @media (max-width: 1024px) {
          width: 32px;
          height: 32px;
          right: 12px;
          top: 12px;

          &::after {
            left: 10px;
            width: 20px;
            top: 9px;
          }

          &::before {
            right: 10px;
            width: 20px;
            top: 9px;
          }
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 50%;
      height: 4px;
      background-color: var(--color-white);
      z-index: 1;

      @media (max-width: 1024px) {
        left: unset;
        right: 0;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotateZ(45deg);
      width: 24px;
      height: 24px;
      background-color: var(--color-blue);
      z-index: 2;
    }

    &.helmet {
      right: 0;
      left: 53%;
      top: 45px;

      @media (max-width: 1024px) {
        left: 0px;
        right: -24px;
        top: 34px;
      }

      @media (max-width: 480px) {
        right: 0;
      }
    }

    &.harness {
      right: 0;
      left: 57%;
      top: 286px;

      @media (max-width: 1024px) {
        left: 0px;
        right: 0px;
        top: 322px;
      }

      @media (max-width: 480px) {
        right: 24px;
      }
    }

    &.gloves {
      right: 0;
      left: 59%;
      top: 559px;

      @media (max-width: 1024px) {
        left: 0px;
        right: 118px;
        top: 568px;
      }

      @media (max-width: 480px) {
        right: 132px;
      }
    }

    &.pants {
      right: 0;
      left: 59%;
      top: 770px;

      @media (max-width: 1024px) {
        left: 0px;
        right: 66px;
        top: 731px;
      }

      @media (max-width: 480px) {
        right: 90px;
      }
    }

    &.balaclava {
      left: 0;
      right: 53%;
      top: 88px;

      &::after {
        left: unset;
        right: 0;
      }

      @media (max-width: 1024px) {
        left: 0px;
        right: -12px;
        top: 120px;
      }

      @media (max-width: 480px) {
        right: 12px;
      }
    }

    &.jacket {
      left: 0;
      right: 56%;
      top: 227px;

      &::after {
        left: unset;
        right: 0;
      }

      @media (max-width: 1024px) {
        left: 0px;
        right: 0px;
        top: 227px;
      }

      @media (max-width: 480px) {
        right: 24px;
      }
    }

    &.overall {
      left: 0;
      right: 57%;
      top: 454px;

      &::after {
        left: unset;
        right: 0;
      }

      @media (max-width: 1024px) {
        left: 0px;
        right: 69px;
        top: 425px;
      }

      @media (max-width: 480px) {
        right: 93px;
      }
    }

    &.boots {
      left: 0;
      right: 57%;
      top: 953px;

      &::after {
        left: unset;
        right: 0;
      }

      @media (max-width: 1024px) {
        left: 0px;
        right: 73px;
        top: 980px;
      }

      @media (max-width: 480px) {
        right: 97px;
      }
    }
  }
`

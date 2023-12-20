import React from "react"
import { Container, ButtonBlue } from "../../styles/style"
import styled from "styled-components"
import Mark from './../../resources/list-mark-white.svg'

export default function PatentedPlates({ data: { title, plates, link } }) {
  return (

    <Wrapper>
      <Container>
        <Section>
          <div>
            <div className="sub-title" dangerouslySetInnerHTML={{ __html: title }} />
            <ButtonBlue to={link.url}>
              {link.title}
            </ButtonBlue>
          </div>
          <div className="plates">
            <div className="lines">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="grid">
              {plates.map((plate, index) => (
                <div className="item">
                  <img src={plate.plateIcon.localFile.publicURL} alt={plate.plateIcon.altText} />
                  <div dangerouslySetInnerHTML={{ __html: plate.plateContent }} />
                  <img className="pattent" src={plate.patentedIcon.localFile.publicURL} alt={plate.patentedIcon.altText} />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: var(--section-margin);

  .sub-title{
      >*{
          font-size: clamp(24px, calc(44vw/7.68), 44px);
          font-style: normal;
          font-weight: 700;
          line-height: 125%;
          text-transform: uppercase;
      }
  }
`

const Section = styled.div`
    display: grid;
    grid-template-columns: 453px auto;
    gap: 40px;
    align-items: center;
    margin-top: clamp(24px, calc(40vw/7.68), 160px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 64px;
    }

    .sub-title{
        margin-top: 120px;
        margin-bottom: 40px;
        width: min-content;

        @media (max-width: 1024px) {
            margin-top: 0;
        }
    }

    a{
        margin-left: 0 !important;
    }

    .plates{
        display: grid;
        gap: 40px;
        grid-template-columns: 330fr 577fr;
        align-items: center;
        grid-template-areas: 
        'lines plates';

        @media (max-width: 1024px) {
            grid-template-areas: 
            'plates lines';
            grid-template-columns: 480fr 177fr;
            gap: 32px;
        }

        @media (max-width: 480px) {
            gap: 0;
        }
        
        >svg{
            width: 100%;
            height: 100%;
        }

        .grid{
            grid-area: plates;
            display: grid;
            gap: 32px;

            .item{
                background: var(--blue-700, #177BC3);
                padding: clamp(16px, calc(24vw/7.68), 24px) clamp(16px, calc(32vw/7.68), 32px) clamp(24px, calc(32vw/7.68), 32px) clamp(16px, calc(32vw/7.68), 32px);
                position: relative;
                z-index: 2;

                display: grid;
                grid-template-columns: clamp(36px, calc(70vw/7.68), 82px) 1fr;
                gap: 24px;

                @media (max-width: 540px) {
                    grid-template-columns: 1fr;
                }

                >img{
                    width: 100%;
                    height: fit-content;

                    @media (max-width: 540px) {
                        width: 36px;
                    }
                }

                .pattent{
                    position: absolute;
                    right: 0;
                    top: 0;
                    margin-top: 0;
                    width: 96px;
                    height: 64px;
                    z-index: -1;
                }

                >div>*+*{
                    margin-top: 12px;
                }

                h1,h2,h3,h4,h5,h6{
                    color: var(--white-100, #F3F3F3);
                    font-size: 26px;
                    font-weight: 700;
                    line-height: 146.154%;

                    margin-right: 64px;
                }

                p{
                    color: var(--white-100, #F3F3F3);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 155.556%;
                    letter-spacing: 0.09px;
                }

                ul,ol {
                    li{
                        list-style: none;
                        position: relative;
                        padding-left: 32px;
                        margin-top: 12px;

                        color: var(--white-100, #F3F3F3);
                        font-size: 18px;
                        line-height: 155.556%;
                        letter-spacing: 0.09px;

                        &::before{
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 0;
                            transform: translateY(-50%);
                            width: 24px;
                            height: 24px;
                            background: url(${Mark}) no-repeat;
                            background-size: contain;
                        }
                    }
                }
            }
        }

        .lines{
            grid-area: lines;
            position: relative;
            z-index: 2;
            height: 100%;

            &::before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                border-bottom: 2px dashed #177BC3;
            }

            &::after{
                content: "";
                position: absolute;
                left: 30%;
                top: 60px;
                bottom: 60px;
                border-left: 2px dashed #177BC3;
                    
                @media (max-width: 1024px) {
                    right: 50%;
                    left: unset;
                }

                @media (max-width: 480px) {
                    top: 120px;
                    bottom: 120px;
                }
            }

            span {
                &:nth-child(1){
                    position: absolute;
                    left: 30%;
                    bottom: 60px;
                    width: 70%;
                    border-top: 2px dashed #177BC3;
                    
                    @media (max-width: 1024px) {
                        right: 50%;
                        width: 50%;
                        left: unset;
                    }

                    @media (max-width: 480px) {
                        bottom: 120px;
                    }
                }

                &:nth-child(2){
                    position: absolute;
                    left: 30%;
                    top: 60px;
                    width: 70%;
                    border-top: 2px dashed #177BC3;

                    @media (max-width: 1024px) {
                        right: 50%;
                        width: 50%;
                        left: unset;
                    }

                    @media (max-width: 480px) {
                        top: 120px;
                    }
                }

                &:nth-child(3){
                    @media (max-width: 1024px) {
                        position: absolute;
                        right: 0%;
                        bottom: 50%;
                        height: 90%;
                        border-left: 2px dashed #177BC3;
                    }

                    @media (max-width: 680px) {
                        height: 80%;
                    }

                    @media (max-width: 480px) {
                        height: 70%;
                    }
                }

                &:nth-child(4){
                    @media (max-width: 1024px) {
                        position: absolute;
                        right: 0;
                        bottom: 140%;
                        width: 100%;
                        border-bottom: 2px dashed #177BC3;
                    }

                    @media (max-width: 680px) {
                        bottom: 130%;
                    }

                    @media (max-width: 480px) {
                        bottom: 120%;
                    }
                }
            }
        }
    }
`
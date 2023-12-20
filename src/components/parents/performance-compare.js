import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import Check from './../../resources/check-golden.svg'

export default function PerformanceCompare({ data: { compareTitle, compare } }) {
  return (
    <Wrapper>
      <Container>
        <Compare>
          <div className="sub-title" dangerouslySetInnerHTML={{ __html: compareTitle }} />
          <div className="grid">
            {compare?.map((item, index) => (
              <div className="item" key={index}>
                <h3>{item.groupName}</h3>
                <div className="content" dangerouslySetInnerHTML={{ __html: item.groupContent }} />
              </div>
            ))}
          </div>
        </Compare>
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

const Compare = styled.div`
    margin-top: clamp(48px, calc(96vw/7.68), 160px);

    .grid{
        margin-top: clamp(40px, calc(64vw/7.68), 96px);
        columns: 3;
        column-gap: 40px;

        @media (max-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: unset;
            columns: unset;
            gap: clamp(32px, calc(48vw/7.68), 96px) 24px;
        }

        @media (max-width: 580px) {
            grid-template-columns: 1fr;
            max-width: 360px;
        }

        .item{
            break-inside: avoid;
            margin-top: clamp(32px, calc(48vw/7.68), 96px);

            @media (max-width: 1024px) {
                margin-top: 0;
            }

            &:first-child{
                margin-top: 0;
            }

            h3{
                color: var(--black-700, #111315);
                font-family: Inter;
                font-size: clamp(17px, calc(24vw/7.68), 28px);
                font-style: normal;
                font-weight: 700;
                line-height: 142.857%;
                margin-bottom: 32px;
            }

            .content{
                *{
                    font-size: clamp(14px, calc(17vw/7.68), 18px);
                    font-weight: 400;
                    line-height: 155.556%;
                    letter-spacing: 0.09px;
                }

                h1,h2,h3,h4,h5,h6{
                    font-size: clamp(17px, calc(24vw/7.68), 26px);
                    font-weight: 500;
                    line-height: 146.154%;
                    margin-top: 32px;

                    &:first-child{
                        margin-top: 0;
                    }
                }

                >*+*{
                    margin-top: 20px;
                }

                ul > * {
                    margin-top: 16px;

                    &:first-child{
                        margin-top: 0;
                    }
                }

            li{
                position: relative;
                padding-left: 32px;

                &::before{
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 0;
                    width: 24px;
                    height: 24px;
                    background: url(${Check}) no-repeat;
                    background-size: contain;
                }
            }
            }
        }
    }
`
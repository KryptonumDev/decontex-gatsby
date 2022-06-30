import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"

export default function DecontominationBenefits({ data: { table, link } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Table>
                    <Row>
                        {table.firstRow.cell.map((el) => (
                            <Cell key={el.topText}>
                                <span className="top">{el.topText}</span>
                                <span className="bottom">{el.bottomText}</span>
                            </Cell>
                        ))}
                    </Row>
                    {table.row.map((el, index) => (
                        <Row key={index} red={el.isRed}>
                            {el.cell.map((innerEl, index) => (
                                <Cell key={innerEl.name}>
                                    <span className={index === 0 ? "name" : ''}>{innerEl.name === null ? '0' : innerEl.name}</span>
                                </Cell>
                            ))}
                        </Row>
                    ))}
                </Table>
                <Button to={link.url}>{link.text}</Button>
            </LocContainer >
        </Wrapper >
    )
}

const Wrapper = styled.div`
    padding-top: clamp(100px, 8.33vw, 160px);
    overflow: hidden;
`

const LocContainer = styled(Container)`
    max-width: 1440px;
    padding: 0;
`

const Table = styled.table`
    border-spacing: 0;
    width: 100%;
`

const Cell = styled.th`
    padding: clamp(9px, ${12 / 768 * 100}vw, 28px);
    text-align: left;

    @media (max-width: 420px) {
        padding: 6px;
    }

    .top{
        white-space: unset;
        font-size: clamp(7px, ${10 / 768 * 100}vw, 13px);
        font-weight: 400;
        margin-bottom: 4px;

        @media (max-width: 360px) {
            font-size: 6px;
        }
    }   

    .bottom{
        white-space: unset;
    }

    span{
        font-weight: 700;
        font-size: clamp(12px, ${17 / 768 * 100}vw, 32px);
        line-height: 130%;
        white-space: nowrap;
        text-align: left;
        display: block;
        text-align: center;

        &.name{
            text-align: left;
        }

        &.check{
            font-weight: 400;
            font-size: clamp(24px, ${36 / 768 * 100}vw, 48px);
            margin: -100px 0;
        }
    }

    :first-child{

        span{
            font-weight: 400;
            font-size: clamp(10px, ${13 / 768 * 100}vw, 20px);
            line-height: 130%;
            letter-spacing: 0.005em;
            white-space: normal;
        }
    }

    :nth-child(1){
        max-width: 300px;
        box-sizing: content-box;
    }

    :nth-child(n + 2){
        text-align: center;
    }

    :nth-child(3){
        background-color: #1A6AE1;

        span{
            color: var(--color-white);
        }
    }

    @media (max-width: 500px) {
        span{
            white-space: normal;

        }
    }

    @media (max-width: 379px) {
        :nth-child(3){
            width: 87px;
            word-break: break-word;
        }
    }
`

const Row = styled.tr`

    :nth-child(2n){
        background-color: #ECECEC;
        

        ${Cell}{
            :nth-child(3){
                background-color: #1764D9;
            }
        }
    }

    ${props => props.red ? `
        background-color: #FFC5C5 !important;

        .name{
            color: #CE2029 !important;
            font-weight: 700 !important; 
        }
    ` : null}

    :first-child{
        background-color: unset;
    }

    @media (max-width: 640px) {
        padding: 0 0 0 13px;
    }

    @media (max-width: 379px){
        :first-child{
            th{
                text-align: left;
            }
        }
    }
`

const Button = styled(ButtonBlue)`
    margin: clamp(27px, ${56 / 768 * 100}vw, 64px) auto 0 auto;
`
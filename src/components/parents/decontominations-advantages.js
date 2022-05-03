import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"

export default function DecontominationBenefits({ data: { table, link } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Table>
                    {table.row.map(el => (
                        <Row>
                            {el.cell.map(innerEl => (
                                <Cell>
                                    {innerEl.textOrSymbol === 'text'
                                        ? <span>{innerEl.name}</span>
                                        : <span className="check">{innerEl.isincluded ? '✓' : ''}</span>
                                    }
                                </Cell>
                            ))}
                        </Row>
                    ))}
                </Table>
                <Button to={link.url.url}>{link.text}</Button>
            </LocContainer >
        </Wrapper >
    )
}

const Wrapper = styled.div`
    padding-top: clamp(100px, 8.33vw, 160px);
`

const LocContainer = styled(Container)`
    max-width: 1440px;
    padding: 0;
`

const Table = styled.table`
    border-spacing: 0;
`

const Cell = styled.th`
    padding: clamp(9px, ${12 / 768 * 100}vw, 28px);
    text-align: left;

    span{
        font-weight: 700;
        font-size: clamp(12px, ${17 / 768 * 100}vw, 32px);
        line-height: 130%;
        white-space: nowrap;
        text-align: left;

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

    :nth-child(2n + 1){
        background-color: #ECECEC;
        

        ${Cell}{
            :nth-child(3){
                background-color: #1764D9;
            }
        }
    }

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
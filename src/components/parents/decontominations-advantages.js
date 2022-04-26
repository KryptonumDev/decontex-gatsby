import React from "react"
import styled from "styled-components"
import { ButtonBlue, Container } from "../../styles/style"

export default function DecontominationBenefits({ data: { table, link } }) {
    return (
        <Wrapper>
            <Container>
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
            </Container >
        </Wrapper >
    )
}

const Wrapper = styled.div`
    padding-top: clamp(100px, 8.33vw, 160px);
`

const Table = styled.div`

`

const Cell = styled.div`
    padding: 28px;

    span{
        font-weight: 700;
        font-size: 32px;
        line-height: 42px;

        &.check{
            font-weight: 400;
            font-size: 60px;
        }
    }

    :first-child{
        span{
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.005em;
        }
    }

    :nth-child(n + 2){
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :nth-child(3){
        background-color: #1A6AE1;

        span{
            color: var(--color-white);
        }
    }
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;


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
`

const Button = styled(ButtonBlue)`
    margin: 64px auto 0 auto;
`
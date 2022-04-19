import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"

export default function DecontominationBenefits () {
    return(
        <Wrapper>
            <Container>
                <Table>
                    {
                        //map
                        <Row>
                            {
                                //map
                                <Cell>
                                    {
                                        // true/false/text
                                    }
                                </Cell>
                            }
                        </Row>
                    }
                </Table>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: clamp(100px, 8.33vw, 160px);
`

const Table = styled.div`

`

const Row = styled.div`

`

const Cell = styled.div`

`
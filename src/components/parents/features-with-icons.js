import React from "react"
import styled from "styled-components"
import { Container } from '../../styles/style'

export default function FeaturesWithIcons() {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h2 className="h1">
                        Decontamination of protective <u>CLOTHING</u>.
                    </h2>
                    <div>
                        <p className="big-m">
                            The decontamination of protective clothing
                            is the removal of <i>toxic substances</i> from it.
                            <br /><br />
                            Decontamination with liquid carbon dioxide (<u>CO2</u>) effectively removes contamination without damaging fabrics.
                        </p>
                        <p className="big-m">
                            Decontex decontamination in the <u>Decontex technology</u> guarantees cleanliness and preservation of protective properties.
                        </p>
                    </div>
                    <Icons>
                        <div>
                            <img />
                            <p className="big-m">

                            </p>
                            <p>

                            </p>
                        </div>
                    </Icons>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: clamp(100px, 8.33vw, 160px);
`

const Content = styled.div`
    h2{
        max-width: 870px;
        margin: 0 auto 100px auto;
    }

    div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
        margin-bottom: clamp(100px, 8.33vw, 160px);
    }
`

const Icons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
    text-align: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            
        }
    }
`
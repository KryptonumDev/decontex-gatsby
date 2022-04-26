import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import NewsletterForm from "../childrens/forms/newsletter-form"

export default function Newsletter({ data: { title, firstNamePlaceholder, emailPlaceholdere, agreementText, buttonText, backgroundImage } }) {
    return (
        <Wrapper>
            <Image layout='constrained' image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
            <Container>
                <Content>
                    <NewsletterForm
                        title={title}
                        firstNamePlaceholder={firstNamePlaceholder}
                        emailPlaceholdere={emailPlaceholdere}
                        agreementText={agreementText}
                        buttonText={buttonText}
                    />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: clamp(100px, 8.33vw, 160px);
    padding: 100px 0;
    background-color: var(--color-black);
    position: relative;
`

const Content = styled.div`
    max-width: 600px;
    margin-left: auto;
`

const Image = styled(GatsbyImage)`
    position: absolute;
    left: 0;
    bottom: 0;
`
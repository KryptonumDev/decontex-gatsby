import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../styles/style"
import NewsletterForm from "../childrens/forms/newsletter-form"

export default function Newsletter({ lang, data: { title, firstNamePlaceholder, emailPlaceholdere, agreementText, buttonText, backgroundImage, image, emailErrorText, agreementErrorText, successfulSendTitle, successfulSendText, sendAgainButtonText, errorSendText } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <NewsletterForm
                        title={title}
                        firstNamePlaceholder={firstNamePlaceholder}
                        emailPlaceholdere={emailPlaceholdere}
                        agreementText={agreementText}
                        buttonText={buttonText}
                        emailErrorText={emailErrorText}
                        agreementErrorText={agreementErrorText}
                        successfulSendTitle={successfulSendTitle}
                        successfulSendText={successfulSendText}
                        sendAgainButtonText={sendAgainButtonText}
                        errorSendText={errorSendText}
                        lang={lang}
                    />
                </Content>
            </Container>
            <Image layout='constrained' image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
            <Background layout='constrained' image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--section-margin);
    padding: clamp(45px, ${90 / 768 * 100}vw, 90px) 0;
    background-color: var(--color-black);
    position: relative;

    @media (max-width: 768px){
        padding-bottom: 0;
    }
`

const Content = styled.div`
    max-width: 600px;
    margin-left: auto;  
    position: relative;
    z-index: 4;

    @media (max-width: 768px) {
        margin-left: unset;
    }
`
const Background = styled(GatsbyImage)`
    position: absolute;
    left: 0;
    bottom: 0;
    
    img{
        mix-blend-mode: screen;
    }

    @media (max-width: 1360px) {
        left: -10%;
    }
    @media (max-width: 1240px) {
        left: -20%;
    }
    @media (max-width: 1120px) {
        left: -30%;
    }
    @media (max-width: 1000px) {
        left: -40%;
    }
    @media (max-width: 880px) {
        left: -50%;
    }

    @media (max-width: 768px) {
        left: 0;
        right: 0;
        height: 400px;
    }
`
 
const Image = styled(GatsbyImage)`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 3;

    @media (max-width: 1360px) {
        left: -10%;
    }
    @media (max-width: 1240px) {
        left: -20%;
    }
    @media (max-width: 1120px) {
        left: -30%;
    }
    @media (max-width: 1000px) {
        left: -40%;
    }
    @media (max-width: 880px) {
        left: -50%;
    }

    @media (max-width: 768px) {
        position: relative;
        left: 0;
    }
    @media (max-width: 500px){
        height: 400px;
    }
`
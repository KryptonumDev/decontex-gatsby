import { Link } from "gatsby";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
    padding: 0 40px;
    position: relative;
    
    @media (max-width: 480px) {
        padding: 0 16px;
    }
`

export const OuterButtonBlue = styled.a`
    padding: 23px 100px;
    border: 2px solid var(--color-blue);
    background-color: var(--color-blue);
    color: var(--color-white);
    display: block;
    width: fit-content;
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, clamp(48px, ${72 / 768 * 100}vw, 72px), 72px);
        width: fit-content;
    }
`

export const ButtonBlue = styled(Link)`
    padding: 23px 100px;
    border: 2px solid var(--color-blue);
    background-color: var(--color-blue);
    color: var(--color-white);
    display: block;
    width: fit-content;
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, clamp(48px, ${72 / 768 * 100}vw, 72px), 72px);
        width: fit-content;
    }
`

export const ButtonBlack = styled(Link)`
    padding: 23px 100px;
    border: 2px solid var(--color-black);
    background-color: var(--color-black);
    color: var(--color-yellow);
    display: block;
    width: fit-content;
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, clamp(48px, ${72 / 768 * 100}vw, 72px), 72px);
        width: fit-content;
    }

`

export const ButtonOutlined = styled(Link)`
    padding: 23px 100px;
    border: 2px solid var(--color-white);
    background-color: transparent;
    color: var(--color-white);
    display: block;
    width: fit-content;
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, clamp(48px, ${72 / 768 * 100}vw, 72px), 72px);
        width: fit-content;
    }
`
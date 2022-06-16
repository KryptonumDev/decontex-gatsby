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
    transition: background-color .2s cubic-bezier(0.23, 1, 0.320, 1);
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, clamp(48px, ${72 / 768 * 100}vw, 72px), 72px);
        width: fit-content;
    }
    &:hover{
        background-color: #0864A6;
    }
`

export const ButtonBlueOuter = styled.a`
    padding: 23px 100px;
    border: 2px solid var(--color-blue);
    background-color: var(--color-blue);
    color: var(--color-white);
    display: block;
    width: fit-content;
    transition: background-color .2s cubic-bezier(0.23, 1, 0.320, 1);
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, clamp(48px, ${72 / 768 * 100}vw, 72px), 72px);
        width: fit-content;
    }
    &:hover{
        background-color: #0864A6;
    }
`

export const ButtonBlack = styled(Link)`
    padding: 23px 100px;
    background-color: var(--color-black);
    box-sizing: border-box;
    color: var(--color-yellow);
    display: block;
    width: fit-content;
    transition: background-color .2s cubic-bezier(0.23, 1, 0.320, 1);
    &:hover{
        background-color: #33383D;
    }
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, clamp(48px, ${72 / 768 * 100}vw, 72px), 72px);
        width: fit-content;
    }
`

export const ButtonOutlinedOuter = styled.a`
    padding: 23px 100px;
    border: 2px solid var(--color-black);
    background-color: transparent;
    color: var(--color-black);
    box-sizing: border-box;
    display: block;
    width: fit-content;
    transition: border .12s linear,  padding .12s linear;
    &:hover{
        border: 6px solid var(--color-black);
        padding: 19px 96px;
    }
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, ${72 / 768 * 100}vw, 72px);
        width: fit-content;

        &:hover{
            border: 6px solid var(--color-black);
            padding: clamp(12px, ${14 / 768 * 100}vw, 14px) clamp(44px, ${68 / 768 * 100}vw, 68px);

        }
    }
`

export const ButtonOutlined = styled(Link)`
    padding: 23px 100px;
    border: 2px solid var(--color-black);
    background-color: transparent;
    color: var(--color-black);
    box-sizing: border-box;
    display: block;
    width: fit-content;
    transition: border .12s linear,  padding .12s linear;
    &:hover{
        border: 6px solid var(--color-black);
        padding: 19px 96px;
    }
    @media (max-width: 768px){
        line-height: 122%;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(14px, ${24 / 768 * 100}vw, 24px);
        padding: clamp(16px, ${18 / 768 * 100}vw, 18px) clamp(48px, ${72 / 768 * 100}vw, 72px);
        width: fit-content;

        &:hover{
            border: 6px solid var(--color-black);
            padding: clamp(12px, ${14 / 768 * 100}vw, 14px) clamp(44px, ${68 / 768 * 100}vw, 68px);

        }
    }
`
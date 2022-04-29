import { Link } from "gatsby";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 clamp(40px, 12.5vw, 240px);
    position: relative;

    @media(max-width: 1440px){
        padding: 0 40px;
    }
    
    @media (max-width: 480px) {
        padding: 0 16px;
    }
`

export const ButtonBlue = styled(Link)`
    padding: 23px 100px;
    border: 2px solid var(--color-blue);
    background-color: var(--color-blue);
    color: var(--color-white);
    display: block;
    width: fit-content;
`

export const ButtonBlack = styled(Link)`
    padding: 23px 100px;
    border: 2px solid var(--color-black);
    background-color: var(--color-black);
    color: var(--color-yellow);
    display: block;
    width: fit-content;

`

export const ButtonOutlined = styled(Link)`
    padding: 23px 100px;
    border: 2px solid var(--color-white);
    background-color: transparent;
    color: var(--color-white);
    display: block;
    width: fit-content;
`
import React from "react"
import styled from "styled-components"
import { ButtonBlue } from "../../../styles/style"
import { useForm } from "react-hook-form";
import { Link } from "gatsby";

export default function NewsletterForm({ title, firstNamePlaceholder, emailPlaceholdere, agreementText, buttonText }) {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
            <label className="input">
                <span>First name</span>
                <input {...register("firstName")} placeholder={firstNamePlaceholder} />
            </label>
            <label className="input">
                <span>Email Adress</span>
                <input {...register("email")} placeholder={emailPlaceholdere} />
            </label>
            <label className="checkbox">
                <input type='checkbox' />
                <span dangerouslySetInnerHTML={{ __html: agreementText }} />
            </label>
            <ButtonBlue as='button' type="submit">{buttonText}</ButtonBlue>
        </Wrapper>
    )
}

const Wrapper = styled.form`

    .title{    
        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            margin-bottom: 32px;
            font-weight: 700;
            font-size: clamp(27px, ${40 / 768 * 100}vw, 40px);
            line-height: 130%;
            text-transform: unset;
        }
    }

    label{
        display: block;

        &.input{
            margin-bottom: 40px;

            @media (max-width: 500px) {
                margin-bottom: 32px;
            }

            span{
                display: none;
            }

            input{
                padding: 16px 40px;
                font-weight: 400;
                font-size: 20px;
                line-height: 30px;
                color: var(--color-black);
                width: 100%;

                &::placeholder{
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 30px;
                    color: #697075;
                }
            }
        }

        &.checkbox{
            margin-bottom: 24px;
            display: flex;
            align-items: center;

            input{
                position: relative;
                appearance: none;
                background-color: var(--color-white);
                display: block;
                padding: 0;
                width: 40px;
                height: 40px;


                &::after {
                    content: '✓';
                    transition: 120ms transform ease-in-out;
                    color: var(--color-blue);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%) scale(0);
                    border-radius: 3px;
                    font-weight: 700;
                    z-index: 3;
                }

                &:checked {
                    &::after {
                        transform: translateX(-50%) translateY(-50%) scale(2.5);
                    }
                }

            }

            span{
                margin-left: 12px;
                position: relative;

                &::before{

                }

                p{
                    color: var(--color-white);
                }

                a{
                    color: var(--color-light-blue);
                    font-weight: inherit;
                    font-size: inherit;
                    line-height: inherit;
                    letter-spacing: inherit;
                    text-transform: inherit;
                }
            }
        }
    }
`
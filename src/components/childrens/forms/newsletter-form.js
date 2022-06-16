import React from "react"
import styled from "styled-components"
import { ButtonBlue } from "../../../styles/style"
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion'

export default function NewsletterForm({ title, firstNamePlaceholder, emailPlaceholdere, agreementText, buttonText, emailErrorText, agreementErrorText }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
            <label className="input">
                <span>First name</span>
                <input {...register("firstName")} placeholder={firstNamePlaceholder} />
            </label>
            <label className="input">
                <span>Email Adress</span>
                <input className={errors.email ? 'error' : null} {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder={emailPlaceholdere} />
                {errors.email && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        {emailErrorText}
                    </motion.p>
                )}
            </label>
            <label className="checkbox">    
                <input className={errors.checkbox ? 'error' : null} type='checkbox' {...register("checkbox", { required: true })} />
                <span dangerouslySetInnerHTML={{ __html: agreementText }} />
                {errors.checkbox && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        {agreementErrorText}
                    </motion.p>
                )}
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

    .errorText{
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        left: 0;
        font-weight: 400;
        font-size: 13px;
        line-height: 146%;
        letter-spacing: 0.005em;
        color: #FF6870;
    }

    label{
        position: relative;
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

                &.error{
                    background-color: #FFC5C5;
                }

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

            &.error{
                span{
                    background-color: #FFC5C5;
                }
            }

            input{
                position: relative;
                appearance: none;
                background-color: var(--color-white);
                display: block;
                padding: 0;
                width: 40px;
                height: 40px;

                &.error{
                    background-color: #FFC5C5;
                }

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
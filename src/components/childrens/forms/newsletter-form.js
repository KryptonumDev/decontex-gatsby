import React, { useState } from "react"
import styled from "styled-components"
import { ButtonBlue } from "../../../styles/style"
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion'
import axios from "axios"

export default function NewsletterForm({ lang, title, firstNamePlaceholder, emailPlaceholdere, agreementText, buttonText, emailErrorText, agreementErrorText, successfulSendTitle, successfulSendText, sendAgainButtonText, errorSendText }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [isSended, changeIsSended] = useState(null)
    const [sendedCount, changeSendedCount] = useState(0)

    const onSubmit = data => {
        axios.post('https://hook.eu1.make.com/4dqmz50s1oe1a9nlbp58hks17b97m391', {
            name: data.firstName,
            email: data.email,
            language: lang
        })
            .then((res) => {
                if (res.status === 200) {
                    changeIsSended('success')
                    changeSendedCount(sendedCount + 1)
                    reset()
                } else {
                    changeIsSended('error')
                    changeSendedCount(sendedCount + 1)
                }
            })
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
                <input type='email' className={errors.email ? 'error' : null} {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder={emailPlaceholdere} />
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
            <ButtonBlue disabled={sendedCount >= 3} as='button' type="submit">{buttonText}</ButtonBlue>
            {isSended === 'error'
                ? <motion.p
                    initial={{ opacity: 0, bottom: -6 }}
                    animate={{ opacity: 1, bottom: 0 }}
                    exit={{ opacity: 1, bottom: -6 }}
                    transition={{ type: 'spring', duration: 0.4 }}
                    className="errorText submit"
                >
                    {errorSendText}
                </motion.p>
                : null}
            <Plate className={isSended === 'success' ? 'active' : ''}>
                <div className="main" dangerouslySetInnerHTML={{ __html: successfulSendTitle }} />
                <div className="sub" dangerouslySetInnerHTML={{ __html: successfulSendText }} />
                <ButtonBlue type="button" disabled={sendedCount >= 3} onClick={() => { changeIsSended(null) }} as='button'>{sendAgainButtonText}</ButtonBlue>
            </Plate>
        </Wrapper>
    )
}

const Plate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    box-sizing: border-box;
    padding: 16px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--color-black);
    opacity: 0;
    pointer-events: none;
    transform: translateX(100%);
    transition: .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    .main{
        margin-bottom: clamp(12px, ${16 / 768 * 100}vw, 24px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 900;
            font-size: clamp(27px, ${44 / 768 * 100}vw, 64px);
            line-height: 112%;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            color: var(--color-white);
        }
    }

    .sub{
        margin-bottom: clamp(24px, ${40 / 768 * 100}vw, 60px);
        h1,h2,h3,h4,h5,h6,p{
            font-weight: 700;
            font-size: clamp(17px, ${24 / 768 * 100}vw, 40px);
            line-height: 120%;
            color: var(--color-white);
        }
    }

    &.active{
        transform: unset;
        opacity: 1;
        pointer-events: all;
    }

    button{
        margin: 0 !important;
        &:disabled{
            filter: grayscale(1);
            cursor: not-allowed;
            
            &:hover{
                background-color: var(--color-blue);
            }
        }
    }
`

const Wrapper = styled.form`
    position: relative;

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

        &.submit{
            transform: translateY(150%);
        }
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
                min-width: 40px;
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

    button{
        &:disabled{
            filter: grayscale(1);
            cursor: not-allowed;
            
            &:hover{
                background-color: var(--color-blue);
            }
        }
    }
`
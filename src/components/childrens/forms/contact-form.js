import React, { useState } from "react"
import styled from "styled-components"
import { ButtonBlue } from "../../../styles/style"
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion'
import axios from "axios"

export default function ContactForm({ data:
    { switchTitle, switchVariant1, switchVariant2,
        emailPlaceholder, firstNamePlaceholder, messagePlaceholder,
        phonePlaceholder, agreementText, submitText,
        firstNameErrorText, emailErrorText, messageErrorText,
        agreementErrorText, successfulSendTitle, successfulSendText,
        sendAgainButtonText, errorSendText }, lang }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [isSended, changeIsSended] = useState(null)
    const [sendedCount, changeSendedCount] = useState(0)


    const onSubmit = data => {

        axios.post('https://hook.eu1.make.com/ztq7nnfn16qimbgi3qsqaf2uwgax5c14', {
            name: data.firstName,
            phone: data.phone,
            email: data.email,
            type: data.switch,
            message: data.message,
            language: lang,
        })
            .then((res) => {
                if (res.status === 200) {
                    changeIsSended('success')
                    changeSendedCount(sendedCount + 1)
                    reset()
                } else {
                    changeIsSended('error')
                    changeSendedCount(sendedCount + 1)
                    reset()
                }
            })

        console.log(data)
    }

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="form-title" dangerouslySetInnerHTML={{ __html: switchTitle }} />
            <div className="flex">
                <label className="radio">
                    <span>{switchVariant1}</span>
                    <input defaultChecked {...register("switch", { required: true })} type="radio" value={switchVariant1} />
                </label>
                <label className="radio">
                    <span>{switchVariant2}</span>
                    <input {...register("switch", { required: true })} type="radio" value={switchVariant2} />
                </label>
            </div>
            <label className="input">
                <span>First name</span>
                <input className={errors.firstName ? 'error' : null} {...register("firstName", { required: true })} placeholder={firstNamePlaceholder} />
                {errors.firstName && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        {firstNameErrorText}
                    </motion.p>
                )}
            </label>
            <label className="input">
                <span>Phone</span>
                <input type='tel' {...register("phone")} placeholder={phonePlaceholder} />
            </label>
            <label className="input">
                <span>Email Adress</span>
                <input type='email' className={errors.email ? 'error' : null} {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder={emailPlaceholder} />
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
            <label className="text-area">
                <span>Message</span>
                <textarea className={errors.message ? 'error' : null} rows='6' {...register("message", { required: true })} placeholder={messagePlaceholder} />
                {errors.message && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        {messageErrorText}
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
            <Button as='button' type="submit">{submitText}</Button>
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
                <ButtonBlue tabIndex={isSended === 'success' ? '0' : '-1'} type="button" disabled={sendedCount >= 3} onClick={() => { changeIsSended(null) }} as='button'>{sendAgainButtonText}</ButtonBlue>
            </Plate>
        </Wrapper>
    )
}

const Plate = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    box-sizing: border-box;
    padding: 16px;
    left: -3px;
    right: -3px;
    top: -3px;
    bottom: -3px;
    background-color: var(--color-black);
    opacity: 0;
    pointer-events: none;
    transform: translateX(100%);
    transition: .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    

    @media (max-width:1024px) {
        justify-content: center;
    }

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
        &:disabled{
            filter: grayscale(1);
            cursor: not-allowed;
            
            &:hover{
                background-color: var(--color-blue);
            }
        }

        @media (max-width:1024px) {
            margin: 0 auto!important;
        }
    }
`

const Button = styled(ButtonBlue)`
    margin-left: 0 !important;
`

const Wrapper = styled.form`
    width: 100%;
    position: relative;
    overflow: hidden;

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

    .form-title{
        h1,h2,h3,h4,h5,h6,p, span{
            color: var(--color-white);
            font-weight: 700;
            font-size: clamp(17px, ${17 / 768 * 100}vw, 32px);
            line-height: 130%;
            text-align: center;
            text-transform: unset;
        }
    }

    .flex{
        display: grid;
        grid-template-columns: auto auto;
        gap: clamp(40px, ${56 / 768 * 100}vw, 56px);
        margin-top: clamp(16px, ${32 / 768 * 100}vw, 32px);
        margin-bottom: clamp(30px, ${64 / 768 * 100}vw, 64px);
    }

    label{
        display: block;
        position: relative;

        &.input{
            margin-bottom: clamp(16px, ${32 / 768 * 100}vw, 40px);

            span{
                display: none;
            }

            input{
                padding: 16px clamp(16px, ${40 / 768 * 100}vw, 40px);
                font-weight: 400;
                font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                line-height: 130%;
                color: var(--color-black);
                width: 100%;

                &.error{
                    background-color: #FFC5C5;
                }

                &::placeholder{
                    font-weight: 400;
                    font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                    line-height: 130%;
                    color: #697075;
                }
            }
        }

        &.checkbox{
            margin-bottom: 48px;
            display: flex;
            align-items: center;

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
                color: var(--color-white);
                margin-left: 12px;
                position: relative;
                text-align: left;

                &::before{

                }

                h1,h2,h3,h4,h5,h6,p{
                    font-weight: 400;
                    font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                    line-height: 130%;
                    letter-spacing: 0.005em;
                    color: var(--color-white);

                    @media (max-width: 480px) {
                        font-size: 14px;
                        line-height: 20px;
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

        &.radio{
            position: relative;

            span{
                color: var(--color-white);
                font-weight: 700;
                font-size: clamp(17px, ${24 / 768 * 100}vw, 24px);
                line-height: 130%;
                letter-spacing: 0.0125em;
                text-transform: uppercase;
                padding: 0 34px 12px 34px;
                display: block;
                cursor: pointer;

                @media (max-width: 768px) {
                    padding: 0 0 12px 0;
                }
            }

            input{
                appearance: none;
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                height: 2px;
                background-color: transparent;
                transition: background-color var(--animation-fast);
                display: block;

                &:checked{
                    background-color: var(--color-blue);
                }
            }
        }

        &.text-area{
            margin-bottom: 40px;
            
            span{
                display: none;
            }

            textarea{
                padding: 16px clamp(16px, ${40 / 768 * 100}vw, 40px);
                font-weight: 400;
                font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                line-height: 130%;
                color: var(--color-black);
                width: 100%;

                &.error{
                    background-color: #FFC5C5;
                }

                &::placeholder{
                    font-weight: 400;
                    font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                    line-height: 130%;
                    color: #697075;
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
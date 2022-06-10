import React from "react"
import styled from "styled-components"
import { ButtonBlue } from "../../../styles/style"
import { useForm } from "react-hook-form";
import { Link } from "gatsby";

export default function ContactForm({ data: { switchTitle, switchVariant1, switchVariant2, emailPlaceholder, firstNamePlaceholder, messagePlaceholder, phonePlaceholder, agreementText, submitText } }) {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="form-title" dangerouslySetInnerHTML={{ __html: switchTitle }} />
            <div className="flex">
                <label className="radio">
                    <span>{switchVariant1}</span>
                    <input defaultChecked type="radio" name="type" value={switchVariant1} />
                </label>
                <label className="radio">
                    <span>{switchVariant2}</span>
                    <input type="radio" name="type" value={switchVariant2} />
                </label>
            </div>
            <label className="input">
                <span>First name</span>
                <input {...register("firstName")} placeholder={firstNamePlaceholder} />
            </label>
            <label className="input">
                <span>Email Adress</span>
                <input {...register("phone")} placeholder={phonePlaceholder} />
            </label>
            <label className="input">
                <span>Email Adress</span>
                <input {...register("email")} placeholder={emailPlaceholder} />
            </label>
            <label className="text-area">
                <span>Email Adress</span>
                <textarea rows='6' {...register("email")} placeholder={messagePlaceholder} />
            </label>
            <label className="checkbox">
                <input type='checkbox' />
                <span dangerouslySetInnerHTML={{ __html: agreementText }} />
            </label>
            <Button as='button' type="submit">{submitText}</Button>
        </Wrapper>
    )
}

const Button = styled(ButtonBlue)`
    margin-left: 0 !important;
`

const Wrapper = styled.form`
    width: 100%;

    .form-title{
        h1,h2,h3,h4,h5,h6,p{
            color: var(--color-white);
            font-weight: 700;
            font-size: clamp(21px, ${40 / 768 * 100}vw, 40px);
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

                &::placeholder{
                    font-weight: 400;
                    font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                    line-height: 130%;
                    color: #697075;
                }
            }
        }

        &.checkbox{
            margin-bottom: clamp(24px, ${32 / 768 * 100}vw, 32px);
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
                color: var(--color-white);
                margin-left: 12px;
                position: relative;

                &::before{

                }

                h1,h2,h3,h4,h5,h6,p{
                    font-weight: 400;
                    font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                    line-height: 130%;
                    letter-spacing: 0.005em;
                    color: var(--color-white);

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

                &::placeholder{
                    font-weight: 400;
                    font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
                    line-height: 130%;
                    color: #697075;
                }
            }
        }
    }
`
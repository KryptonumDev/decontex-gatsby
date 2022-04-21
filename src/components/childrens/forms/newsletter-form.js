import React from "react"
import styled from "styled-components"
import { ButtonBlue } from "../../../styles/style"
import { useForm } from "react-hook-form";
import { Link } from "gatsby";
import { StructuredText } from "react-datocms";

export default function NewsletterForm({ title }) {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <StructuredText data={title}/>
            <label className="input">
                <span>First name</span>
                <input {...register("firstName")} placeholder='First name' />
            </label>
            <label className="input">
                <span>Email Adress</span>
                <input {...register("email")} placeholder='Email Adress' />
            </label>
            <label className="checkbox">
                <input type='checkbox' />
                <span>I agree to the <Link to='#'>Privacy Policy</Link></span>
            </label>
            <ButtonBlue as='button' type="submit">Sign up</ButtonBlue>
        </Wrapper>
    )
}

const Wrapper = styled.form`

    h1,h2,h3,h4,h5,h6,p{
        color: var(--color-white);
        margin-bottom: 40px;
        font-weight: 700;
        font-size: 40px;
        line-height: 52px;
        text-transform: uppercase;
    }

    label{
        display: block;

        &.input{
            margin-bottom: 40px;

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
                color: var(--color-white);
                margin-left: 12px;
                position: relative;

                &::before{

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
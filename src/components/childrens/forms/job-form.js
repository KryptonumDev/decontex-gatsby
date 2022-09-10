import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonBlue } from '../../../styles/style'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import axios from 'axios'

export default function JobForm({
  data: {
    emailPlaceholder,
    firstNamePlaceholder,
    phonePlaceholder,
    agreementText,
    submitText,
    emailErrorText,
    attachmentPlaceholder,
    agreementErrorText,
    successfulSendTitle,
    successfulSendText,
    sendAgainButtonText,
    errorSendText
  },
  lang
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const [isSended, changeIsSended] = useState(null)
  const [sendedCount, changeSendedCount] = useState(0)

  const [attachments, addAttachment] = useState([])

  const onSubmit = (data) => {
    let formData = new FormData()

    // attachments.forEach((el, index) => {
    //     formData.append('file[]', el, 'attachment #' + (index + 1))
    // })

    formData.append('name', data.firstName)
    formData.append('phone', data.phone)
    formData.append('email', data.email)
    formData.append('lan', lang)

    axios
      .post(
        'https://hook.eu1.make.com/h0nsbikhzf2idnvukdwcd7t4xdh9vqv3',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
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

  const dropHandler = (ev) => {
    ev.preventDefault()

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      ;[...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile()
        }
      })
    }
  }

  const dragOverHandler = (ev) => {
    ev.preventDefault()
  }

  const changeHandler = (ev) => {
    if (ev.target.files.length + attachments.length > 3) {
      alert('Max 3 files accepted.')
      ev.preventDefault()
    } else {
      addAttachment([...attachments, ...ev.target.files])
    }
  }

  const deleteElement = (el) => {
    addAttachment(attachments.filter((inEl) => inEl !== el))
  }

  const checkCount = (e) => {
    if (e.files) {
      let counts = e.files.length + attachments.length
      if (counts > 3) {
        alert('Max 3 files accepted.')
        e.preventDefault()
      }
      e.files.forEach((el) => {
        if (el.size > 5242880) {
          alert('Max file size 5MB.')
          e.preventDefault()
        }
      })
    }
  }

  return (
    <Wrapper
      id='job-form'
      onSubmit={handleSubmit(onSubmit)}>
      <label className='input'>
        <span>First name</span>
        <input
          {...register('firstName')}
          placeholder={firstNamePlaceholder}
        />
      </label>
      <label className='input'>
        <span>Phone</span>
        <input
          type='tel'
          {...register('phone')}
          placeholder={phonePlaceholder}
        />
      </label>
      <label className='input'>
        <span>Email Adress</span>
        <input
          type='email'
          onSelect={(e) => {
            checkCount(e)
          }}
          className={errors.email ? 'error' : null}
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
          placeholder={emailPlaceholder}
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, bottom: -8 }}
            animate={{ opacity: 1, bottom: -4 }}
            exit={{ opacity: 1, bottom: -8 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className='errorText'>
            {emailErrorText}
          </motion.p>
        )}
      </label>
      {/* <label className="attachment">
                <div className="placeholder">
                    <svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 40C8.46667 40 5.875 38.9583 3.725 36.875C1.575 34.7917 0.5 32.2333 0.5 29.2V7.7C0.5 5.56667 1.25833 3.75 2.775 2.25C4.29167 0.75 6.11667 0 8.25 0C10.4167 0 12.25 0.75 13.75 2.25C15.25 3.75 16 5.58333 16 7.75V27.45C16 28.7167 15.5667 29.7917 14.7 30.675C13.8333 31.5583 12.7667 32 11.5 32C10.2333 32 9.16667 31.525 8.3 30.575C7.43333 29.625 7 28.5 7 27.2V7.6H9V27.35C9 28.0833 9.24167 28.7083 9.725 29.225C10.2083 29.7417 10.8 30 11.5 30C12.2 30 12.7917 29.75 13.275 29.25C13.7583 28.75 14 28.15 14 27.45V7.7C14 6.1 13.4417 4.75 12.325 3.65C11.2083 2.55 9.85 2 8.25 2C6.65 2 5.29167 2.55 4.175 3.65C3.05833 4.75 2.5 6.1 2.5 7.7V29.3C2.5 31.7333 3.38333 33.7917 5.15 35.475C6.91667 37.1583 9.03333 38 11.5 38C14 38 16.125 37.15 17.875 35.45C19.625 33.75 20.5 31.6667 20.5 29.2V7.6H22.5V29.15C22.5 32.1833 21.425 34.75 19.275 36.85C17.125 38.95 14.5333 40 11.5 40Z" fill="#F3F3F3" />
                    </svg>
                    <span>{attachmentPlaceholder}</span>
                    <span className="max">Max 5 MB</span>
                    <input onChange={e => changeHandler(e)} ondrop={e => dropHandler(e)} ondragover={e => dragOverHandler(e)} type='file' multiple />
                </div>
            </label> */}
      {/* <ol>
                {attachments.map((el, index) => (
                    <li><button type='button' onClick={() => { deleteElement(el) }}>{index + 1}. {el.name}</button></li>
                ))}
            </ol> */}
      <label className='checkbox'>
        <input
          className={errors.checkbox ? 'error' : null}
          type='checkbox'
          {...register('checkbox', { required: true })}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: agreementText
          }}
        />
        {errors.checkbox && (
          <motion.p
            initial={{ opacity: 0, bottom: -8 }}
            animate={{ opacity: 1, bottom: -4 }}
            exit={{ opacity: 1, bottom: -8 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className='errorText'>
            {agreementErrorText}
          </motion.p>
        )}
      </label>
      <Button as='button' type='submit'>
        {submitText}
      </Button>
      {isSended === 'error' ? (
        <motion.p
          initial={{ opacity: 0, bottom: -8 }}
          animate={{ opacity: 1, bottom: -4 }}
          exit={{ opacity: 1, bottom: -8 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className='errorText submit'>
          {errorSendText}
        </motion.p>
      ) : null}
      <Plate
        className={isSended === 'success' ? 'active' : ''}>
        <div
          className='main'
          dangerouslySetInnerHTML={{
            __html: successfulSendTitle
          }}
        />
        <div
          className='sub'
          dangerouslySetInnerHTML={{
            __html: successfulSendText
          }}
        />
        <ButtonBlue
          tabIndex={isSended === 'success' ? '0' : '-1'}
          type='button'
          disabled={sendedCount >= 3}
          onClick={() => {
            changeIsSended(null)
          }}
          as='button'>
          {sendAgainButtonText}
        </ButtonBlue>
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
  background: #07438a;
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: 1024px) {
    justify-content: center;
  }

  .main {
    margin-bottom: clamp(12px, ${(16 / 768) * 100}vw, 24px);
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 900;
      font-size: clamp(21px, ${(44 / 768) * 100}vw, 64px);
      line-height: 112%;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      color: var(--color-white);
    }
  }

  .sub {
    margin-bottom: clamp(24px, ${(40 / 768) * 100}vw, 60px);
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 700;
      @media (max-width: 640px) {
        font-weight: 600;
      }
      font-size: clamp(17px, ${(24 / 768) * 100}vw, 40px);
      line-height: 120%;
      color: var(--color-white);
    }
  }

  &.active {
    transform: unset;
    opacity: 1;
    pointer-events: all;
  }

  button {
    &:disabled {
      filter: grayscale(1);
      cursor: not-allowed;

      &:hover {
        background-color: var(--color-blue);
      }
    }

    @media (max-width: 1024px) {
      margin: 0 auto !important;
    }
  }
`

const Button = styled(ButtonBlue)`
  margin-left: 0 !important;
`

const Wrapper = styled.form`
  width: 100%;
  position: relative;

  ol {
    margin-bottom: clamp(32px, ${(48 / 768) * 100}vw, 64px);
    margin-top: 12px;
    display: grid;
    grid-gap: 12px;

    li {
      button {
        background-color: transparent;
        border: unset;
        cursor: pointer;
        font-weight: 400;
        font-size: clamp(12px, ${(16 / 768) * 100}vw, 20px);
        line-height: 140%;
        letter-spacing: 0.005em;
        color: #c4c4c4;
      }
    }
  }

  .errorText {
    position: absolute;
    display: inline-block;
    transform: translateY(100%);
    left: 0;
    font-weight: 400;
    font-size: 13px;
    line-height: 146%;
    letter-spacing: 0.005em;
    color: #ff6870;

    &.submit {
      transform: translateY(150%);
    }
  }

  .form-title {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span {
      color: var(--color-white);
      font-weight: 700;
      font-size: clamp(17px, ${(17 / 768) * 100}vw, 32px);
      line-height: 130%;
      text-align: center;
      text-transform: unset;
    }
  }

  .flex {
    display: grid;
    grid-template-columns: auto auto;
    gap: clamp(40px, ${(56 / 768) * 100}vw, 56px);
    margin-top: clamp(16px, ${(32 / 768) * 100}vw, 32px);
    margin-bottom: clamp(30px, ${(64 / 768) * 100}vw, 64px);
  }

  label {
    display: block;
    position: relative;

    &.attachment {
      span {
        font-weight: 500;
        font-size: clamp(16px, ${(27 / 768) * 100}vw, 32px);
        line-height: 131%;
        color: #f3f3f3;
      }

      .placeholder {
        position: relative;
        display: flex;
        align-items: center;
        padding: clamp(12px, ${(16 / 768) * 100}vw, 20px)
          clamp(24px, ${(36 / 768) * 100}vw, 40px);
        border: 2px dashed #f3f3f3;
        svg {
          margin-right: 16px;

          @media (max-width: 640px) {
            transform: scale(0.7);
            margin-right: 8px;
          }
        }

        .max {
          position: absolute;
          bottom: 0;
          right: 0;
          transform: translateY(calc(100% + 10px));
          font-weight: 700;
          font-size: clamp(
            13px,
            ${(17 / 768) * 100}vw,
            20px
          );
          line-height: 140%;
          text-align: right;
          letter-spacing: 0.005em;
          color: #f3f3f3;
        }
      }

      input {
        position: absolute;
        opacity: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    }

    &.input {
      margin-bottom: clamp(
        32px,
        ${(32 / 768) * 100}vw,
        40px
      );

      span {
        display: none;
      }

      input {
        padding: clamp(10px, ${(12 / 768) * 100}vw, 16px)
          clamp(16px, ${(40 / 768) * 100}vw, 40px);
        font-weight: 400;
        font-size: clamp(14px, ${(17 / 768) * 100}vw, 20px);
        line-height: 130%;
        color: var(--color-black);
        width: 100%;

        &.error {
          background-color: #ffc5c5;
        }

        &::placeholder {
          font-weight: 400;
          font-size: clamp(
            14px,
            ${(17 / 768) * 100}vw,
            20px
          );
          line-height: 130%;
          color: #697075;
        }
      }
    }

    &.checkbox {
      margin-bottom: 48px;
      @media (max-width: 640px) {
        margin-bottom: 32px;
      }
      display: flex;
      align-items: center;

      input {
        position: relative;
        appearance: none;
        background-color: var(--color-white);
        display: block;
        padding: 0;
        min-width: 40px;
        height: 40px;
        @media (max-width: 640px) {
          min-width: 28px;
          height: 28px;
        }

        &.error {
          background-color: #ffc5c5;
        }

        &::after {
          content: '✓';
          transition: 120ms transform ease-in-out;
          color: var(--color-blue);
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%)
            scale(0);
          border-radius: 3px;
          font-weight: 700;
          z-index: 3;
        }

        &:checked {
          &::after {
            transform: translateX(-50%) translateY(-50%)
              scale(2.5);
          }
        }
      }

      span {
        color: var(--color-white);
        margin-left: 12px;
        position: relative;
        text-align: left;

        &::before {
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          font-weight: 400;
          font-size: clamp(
            14px,
            ${(17 / 768) * 100}vw,
            20px
          );
          line-height: 130%;
          letter-spacing: 0.005em;
          color: var(--color-white);

          @media (max-width: 480px) {
            font-size: 14px;
            line-height: 20px;
          }

          a {
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

    &.radio {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      span {
        color: var(--color-white);
        font-weight: 700;
        font-size: clamp(17px, ${(24 / 768) * 100}vw, 24px);
        line-height: 130%;
        letter-spacing: 0.0125em;
        text-transform: uppercase;
        padding: 0 34px 12px 34px;
        display: block;
        cursor: pointer;
        text-align: center;
        width: 100%;
        transition: border-color var(--animation-fast);
        border-bottom: 2px solid transparent;

        @media (max-width: 768px) {
          padding: 0 0 12px 0;
        }
      }

      input {
        appearance: none;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 0px;
        background-color: transparent;
        display: block;

        &:checked + span {
          border-color: var(--color-blue);
        }
      }
    }

    &.text-area {
      margin-bottom: 40px;

      span {
        display: none;
      }

      textarea {
        padding: 16px
          clamp(16px, ${(40 / 768) * 100}vw, 40px);
        font-weight: 400;
        font-size: clamp(14px, ${(17 / 768) * 100}vw, 20px);
        line-height: 130%;
        color: var(--color-black);
        width: 100%;

        &.error {
          background-color: #ffc5c5;
        }

        &::placeholder {
          font-weight: 400;
          font-size: clamp(
            14px,
            ${(17 / 768) * 100}vw,
            20px
          );
          line-height: 130%;
          color: #697075;
        }
      }
    }
  }

  button {
    &:disabled {
      filter: grayscale(1);
      cursor: not-allowed;

      &:hover {
        background-color: var(--color-blue);
      }
    }
  }
`

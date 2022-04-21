import React from 'react'
import AnswerComponent from './answer'
import QuestionComponent from './question'
import WrapperComponent from './wrapper'

export const Answer = ({ children }) => (
    <AnswerComponent>
        {children}
    </AnswerComponent>
)

export const Question = ({ children }) => (
    <QuestionComponent>
        {children}
    </QuestionComponent>
)

export const QuestionWrapper = ({ children }) => (
    <WrapperComponent>
        {children}
    </WrapperComponent>
)
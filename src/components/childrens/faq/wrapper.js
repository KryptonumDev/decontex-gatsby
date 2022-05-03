import React from 'react'

export default function QuestionWrapper({ children, isOpen }) {
    return (
        <details open={isOpen}>
            {children}
        </details>
    )
}
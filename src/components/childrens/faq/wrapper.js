import React from 'react'

export default function QuestionWrapper({ children }) {
    return (
        <details >
            {children}
        </details>
    )
}
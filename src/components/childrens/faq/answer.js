import React from 'react'

export default function Answer({ children }) {
    return (
        <div
            itemProp='acceptedAnswer'
            itemType='https://schema.org/Answer'>
            <span itemProp='text'>
                {children}
            </span>
        </div>
    )
}
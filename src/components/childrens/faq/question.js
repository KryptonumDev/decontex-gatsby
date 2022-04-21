import React from 'react'

export default function Question({ children }) {
    return (
        <summary
            itemProp='mainEntity'
            itemType='https://schema.org/Question'>
            <span itemProp='name'>
                {children}
            </span>
        </summary>
    )
}
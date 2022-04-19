
import React from 'react'
import Layout from './src/components/parents/layout'
import './src/styles/fonts.css'
import './src/styles/style.css'

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
)
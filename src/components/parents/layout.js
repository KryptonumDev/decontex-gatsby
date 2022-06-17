import React from "react"
import Coockie from "./cookie-banner"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children, location }) {

    return (
        <React.Fragment>
            <Header location={location} />
            {children}
            <Footer location={location} />
            <Coockie location={location}/>
        </React.Fragment>
    )
}
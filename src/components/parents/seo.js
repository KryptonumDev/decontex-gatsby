import React from "react"
import { Helmet } from "react-helmet"
import parse from 'html-react-parser';

export default function Seo({ data, lang }) {

    const fullHead = parse(data.fullHead);

    return (
        <Helmet htmlAttributes={{ lang: lang }}>
            <title>{data.title}</title>
            {fullHead}
        </Helmet>
    )
}
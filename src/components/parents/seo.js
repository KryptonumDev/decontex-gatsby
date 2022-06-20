import React from "react"
import { Helmet } from "react-helmet"
import parse from 'html-react-parser';

export default function Seo({ data, lang }) {
    let fullHead

    if (data) {
        fullHead = parse(data.fullHead)
    }

    return (
        <Helmet htmlAttributes={{ lang: lang }}>
            {data?.title
                ? <title>{data.title}</title>
                : null}
            {fullHead}
            <meta name="google-site-verification" content="6ECIlKWTKRV13uT8My_fm4eN2kHfjUuz74nBH7kNXjE" />
        </Helmet>
    )
}
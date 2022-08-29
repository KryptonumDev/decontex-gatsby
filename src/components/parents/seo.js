import React from "react"
import { Helmet } from "react-helmet"
import { urls } from "../../constants/url"

export default function Seo({ data, lang, alternates, type, template }) {

    const currPageData = alternates?.nodes.filter(el => el.language.slug === lang)[0]

    const canonical = (() => {
        let href
        if (type === 'post') {
            href = 'https://decontex.com' + urls[template][currPageData.language.slug] + currPageData.page.url // not work at moment type, template
        } else {
            href = 'https://decontex.com' + urls[currPageData.template.templateName][currPageData.language.slug]
        }
        href = href?.slice(-1) === '/' ? href : href + '/'
        return href
    })()

    const location = new URL(canonical)

    return (
        <Helmet htmlAttributes={{ lang: lang }}>
            <meta name="google-site-verification" content="6ECIlKWTKRV13uT8My_fm4eN2kHfjUuz74nBH7kNXjE" />

            {canonical
                ? <meta property="og:url" content={canonical} />
                : null}

            <meta property="og:site_name" content={data.opengraphSiteName} />

            {canonical
                ? <link rel="canonical" href={canonical} />
                : null}

            {data?.title
                ? <title>{data.title}</title>
                : null}
            {data?.title
                ? <meta property="twitter:title" content={data.title} />
                : null}
            {data?.title
                ? <meta property="og:title" content={data.title} />
                : null}

            {data?.metaDesc
                ? <meta name="description" content={data.metaDesc} />
                : null}
            {data?.metaDesc
                ? <meta property="twitter:description" content={data.metaDesc} />
                : null}
            {data?.metaDesc
                ? <meta property="og:description" content={data.metaDesc} />
                : null}

            {data.opengraphImage?.localFile?.publicURL
                ? <meta property="og:image" content={location.origin + data.opengraphImage.localFile.publicURL} />
                : null}

            {data.opengraphImage?.publicUrl?.publicURL
                ? <meta property="twitter:image" content={location.origin + data.opengraphImage.localFile.publicURL} />
                : null}



            {alternates.nodes.map(el => (
                <link rel="alternate" hreflang={el.language.slug === 'en' ? 'x-default' : el.language.slug} href={location.origin + urls[el.template.templateName][el.language.slug]} />
            ))}
        </Helmet>
    )
}
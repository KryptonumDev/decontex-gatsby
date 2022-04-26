import React, { useEffect } from "react"
import { useInView } from 'react-intersection-observer';

export default function ({ el, index, setActiveImg, activeImg }) {

    const { ref, inView, entry } = useInView()

    useEffect(() => {
        if (activeImg !== el.outfitViewId && inView === true) {
            console.log('change')
            console.log(el.outfitViewId)
            setActiveImg(el.outfitViewId)
        }
    }, [inView])

    return (
        <div ref={ref} key={el.icon.sourceUrl} className="item">
            <img src={el.icon.sourceUrl} alt={el.icon.altText} />
            <div>
                <div className="title" dangerouslySetInnerHTML={{ __html: el.title }} />
                <div className="text" dangerouslySetInnerHTML={{ __html: el.subTitle }} />
                <div>{inView}</div>
            </div>
        </div>
    )
}
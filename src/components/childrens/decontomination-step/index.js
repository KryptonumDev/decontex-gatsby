import React, { useEffect } from "react"
import { StructuredText } from "react-datocms";
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
        <div ref={ref} key={el.icon.url} className="item">
            <img src={el.icon.url} alt={el.icon.alt} />
            <div>
                <div className="title">
                    <StructuredText data={el.title} />
                </div>
                <div className="text">
                    <StructuredText data={el.subTitle} />
                    {inView}
                </div>
            </div>
        </div>
    )
}
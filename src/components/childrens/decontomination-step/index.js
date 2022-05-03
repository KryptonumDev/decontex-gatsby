import React, { useEffect } from "react"
import { useInView } from 'react-intersection-observer';

export default function ({ el, index, setActiveImg, activeImg, activeArr, changeActiveArr }) {

    const { ref, inView, entry } = useInView()

    useEffect(() => {
        let locArr = [...activeArr]
        if (!locArr.includes(index + 1) && inView) {
            if (index + 1 > locArr[locArr.length - 1]) {
                locArr.push(index + 1)
            } else {
                locArr.unshift(index + 1)
            }
        } else {
            if (index + 1 === locArr[locArr.length - 1]) {
                locArr.pop()
            } else {
                locArr.shift()
            }
        }
        changeActiveArr(locArr)
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
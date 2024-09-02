import React, { useRef } from 'react'
import styles from './LineCarousel.module.css'
import { DefaultSelectType } from '../../Selects/BasicSelect/BasicSelect'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type Props = {
    data: DefaultSelectType[]
}

const LineCarousel = ({data}: Props) => {
    const scrollRef = useRef<HTMLUListElement>(null)

    const handleScroll = (direction: "next"|"previous") => {
        if(scrollRef.current){
            if(direction === "next"){
                const scrollLenght = scrollRef.current.scrollLeft + scrollRef.current.clientWidth
                scrollRef.current.scrollTo({left: scrollLenght, behavior: "smooth"})
            }else{
                const scrollLenght = scrollRef.current.scrollLeft - scrollRef.current.clientWidth
                scrollRef.current.scrollTo({left: scrollLenght, behavior: "smooth"})
            }
        }
    }  

    return (
        <div className={styles.wrapper}>
            <div className={styles.flexLineController} onClick={() => handleScroll("previous")}>
                <PiCaretLeftBold />
            </div>
            <ul ref={scrollRef} className={styles.lineList}>
                {data.map(lineItem => (
                    <li key={lineItem.id} className={styles.lineItem}>{lineItem.text}</li>
                ))}
            </ul>
            <div className={styles.flexLineController} onClick={() => handleScroll("next")}>
                <PiCaretRightBold />
            </div>
        </div>
    )
}

export default LineCarousel
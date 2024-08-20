import React, { useRef, useState } from 'react'
import styles from './GlideCarousel.module.css'
import { Image } from '../../../types/projectType'
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

type Props = {
    mainData: Image
    data: Image[]
    maxHeight?: number
    thumbnailBarPosition?: 'vertical'|'horizontal'
}

const GlideCarousel = ({mainData, data, maxHeight, thumbnailBarPosition='horizontal'}: Props) => {
    const [mainImage, setMainImage] = useState<Image>(mainData)
    const thumbsRef = useRef<{id: number, element: HTMLDivElement}[]>([])

    const handleChange = ((direction: "next"|"previous") => {
        const startIndex = data.findIndex(item => item.id === mainImage.id)
        if(direction === "next"){
            if(startIndex + 1 < data.length){
                const item = data[startIndex + 1]
                setMainImage(item)
                thumbsRef.current.find(thumb => thumb.id === item.id)?.element.scrollIntoView({behavior: 'smooth'})
            }else{
                const item = data[0]
                setMainImage(item)
                thumbsRef.current.find(thumb => thumb.id === item.id)?.element.scrollIntoView({behavior: 'smooth'})
            }
        }else{
            if(startIndex - 1 >= 0){
                const item = data[startIndex - 1]
                setMainImage(item)
                thumbsRef.current.find(thumb => thumb.id === item.id)?.element.scrollIntoView({behavior: 'smooth'})
            }else{
                const item = data[data.length - 1]
                setMainImage(item)
                thumbsRef.current.find(thumb => thumb.id === item.id)?.element.scrollIntoView({behavior: 'smooth'})
            }
        }
    })

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.container} ${thumbnailBarPosition === 'horizontal' ? styles.thumbnailBarHorizontal : styles.thumbnailBarVertical}`}>
                <div className={styles.containerMainImage}>
                    <img 
                        className={`${styles.mainImage} ${thumbnailBarPosition === 'horizontal' ? styles.mainImageHorizontal : styles.mainImageVertical}`} 
                        src={mainImage.url} 
                        // style={{maxHeight: `${maxHeight}px` || '500px'}} 
                        alt="" 
                    />
                </div>
                <div className={`${styles.containerOtherImages} ${thumbnailBarPosition === 'vertical' ? styles.containerOtherImagesVertical : null}`}>
                    <div className={styles.flexController} onClick={() => handleChange("previous")}>
                        <PiArrowLeft className={`${styles.flexControllerIcon} ${thumbnailBarPosition === 'vertical' ? styles.flexControllerIconVertical : null}`} />
                    </div>
                    <div className={
                        `${styles.containerOtherImagesScroll} 
                        ${thumbnailBarPosition === 'horizontal' ? styles.containerOtherImagesScrollHorizontal : styles.containerOtherImagesScrollVertical}`
                        }>
                        {data.map((img, index) => (
                            <div 
                                ref={element => {
                                    if(element) {
                                        thumbsRef.current = [...thumbsRef.current, {id: img.id, element}]
                                    }
                                }}
                                key={index} 
                                className={styles.flexOtherImage} 
                                onClick={() => setMainImage(img)}
                            >
                                {img.id === mainImage.id && <div className={styles.flexOtherImageOver}></div>}
                                <img className={styles.otherImage} src={img.url} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className={styles.flexController} onClick={() => handleChange("next")}>
                        <PiArrowRight className={`${styles.flexControllerIcon} ${thumbnailBarPosition === 'vertical' ? styles.flexControllerIconVertical : null}`}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlideCarousel
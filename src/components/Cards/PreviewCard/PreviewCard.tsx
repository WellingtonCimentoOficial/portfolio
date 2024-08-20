import React, { useState } from 'react'
import styles from "./PreviewCard.module.css"
import { ProjectType } from '../../../types/projectType'
import { PiHeart, PiGithubLogo, PiGithubLogoFill, PiEye, PiEyeFill } from "react-icons/pi";


type Props = {
    data: ProjectType
    setState: (data: ProjectType) => void
}

const PreviewCard = ({ data, setState}: Props) => {
    const title = data.title.length > 15 ? data.title.slice(0, 15) + '...' : data.title
    const description = data.description.length > 23 ? data.description.slice(0, 23) + '...' : data.description

    const [githubIsViewed, setGithubIsViewed] = useState<boolean>(false)
    const [isViewed, setIsViewed] = useState<boolean>(false)

    const handleClick = () => {
        setState(data)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.containerSection} onClick={handleClick}>
                    <div className={styles.containerOver}>
                        <div className={styles.header}>
                            <h3 className={styles.description}>{description}</h3>
                            <div className={styles.containerControllers}>
                                <div className={styles.containerHeaderIcon}>
                                    <PiHeart className={styles.headerIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerImage}>
                        <img className={styles.flexImage} src={data.images.main.url} alt="" />
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.containerBodyHeader}>
                        <div className={styles.containerLogo}>
                            <img className={styles.imageLogo} src={data.images.main.url} alt="" />
                        </div>
                        <span className={styles.projectTitle} onClick={handleClick}>{title}</span>
                    </div>
                    <div className={styles.containerIcons}>
                        <div className={styles.containerIcon}>
                            <a href="/" className={styles.flexIconWrapper} onMouseEnter={() => setGithubIsViewed(true)} onMouseOut={() => setGithubIsViewed(false)}>
                                {githubIsViewed ? 
                                    <PiGithubLogoFill className={styles.icon} style={{fill: "var(--principal-color)"}} /> :
                                    <PiGithubLogo className={styles.icon} />
                                }
                            </a>
                            <span className={styles.iconText}>101k</span>
                        </div>
                        <div className={styles.containerIcon}>
                            <a href="/" className={styles.flexIconWrapper} onMouseEnter={() => setIsViewed(true)} onMouseOut={() => setIsViewed(false)}>
                                {isViewed ? 
                                    <PiEyeFill className={styles.icon} style={{fill: "var(--principal-color)"}} /> :
                                    <PiEye className={styles.icon} />
                                }
                            </a>
                            <span className={styles.iconText}>101k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewCard
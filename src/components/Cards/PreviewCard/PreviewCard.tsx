import React, { useState } from 'react'
import styles from "./PreviewCard.module.css"
import { ProjectType } from '../../../types/projectType'
import { PiHeart, PiGithubLogo, PiGithubLogoFill, PiEye, PiEyeFill } from "react-icons/pi";


type Props = {
    data: ProjectType
}

const PreviewCard = ({ data }: Props) => {
    const title = data.title.length > 15 ? data.title.slice(0, 15) + '...' : data.title
    const description = data.description.length > 23 ? data.description.slice(0, 23) + '...' : data.description

    const [githubIsViewed, setGithubIsViewed] = useState<boolean>(false)
    const [isViewed, setIsViewed] = useState<boolean>(false)

    const defaultIconProps = {
        className: styles.icon,
        onMouseEnter: () => setGithubIsViewed(oldValue => !oldValue),
        onMouseOut: () => setGithubIsViewed(oldValue => !oldValue)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <a href='/' className={styles.containerSection}>
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
                </a>
                <div className={styles.body}>
                    <div className={styles.containerBodyHeader}>
                        <div className={styles.containerLogo}>
                            <img className={styles.imageLogo} src={data.images.main.url} alt="" />
                        </div>
                        <a href='/' className={styles.projectTitle}>{title}</a>
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
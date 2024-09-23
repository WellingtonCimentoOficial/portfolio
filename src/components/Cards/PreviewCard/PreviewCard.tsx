import styles from "./PreviewCard.module.css"
import { ProjectType } from '../../../types/projectType'
import { PiHeart } from "react-icons/pi";
import { SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss3 } from "react-icons/si";
import { Link } from "react-router-dom";
import { usePath } from "../../../hooks/usePath";

type Props = {
    data: ProjectType
    setState: (data: ProjectType) => void
}

const PreviewCard = ({ data, setState}: Props) => {
    const title = data.title.length > 15 ? data.title.slice(0, 15) + '...' : data.title
    const description = data.description.length > 23 ? data.description.slice(0, 23) + '...' : data.description

    const {path} = usePath()

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
                            <img className={styles.imageLogo} src={data.images.logo.url} alt="" />
                        </div>
                        <Link to={path(data.id, data.title)} className={styles.projectTitle}>{title}</Link>
                    </div>
                    <div className={styles.containerIcons}>
                        {data.statistics.html > 0 && 
                            <div className={styles.containerIcon}>
                                <div className={styles.flexIconWrapper}>
                                    <SiHtml5 className={styles.icon} style={{fill: "#E34F26"}} />
                                </div>
                                {/* <span className={styles.iconText}>101k</span> */}
                            </div>
                        }
                        {data.statistics.javascript > 0 && 
                            <div className={styles.containerIcon}>
                                <div className={styles.flexIconWrapper}>
                                    <SiJavascript className={styles.icon} style={{fill: "#F7DF1E"}} />
                                </div>
                                {/* <span className={styles.iconText}>101k</span> */}
                            </div>
                        }
                        {data.statistics.css > 0 && 
                            <div className={styles.containerIcon}>
                                <div className={styles.flexIconWrapper}>
                                    <SiCss3 className={styles.icon} style={{fill: "#1572B6"}} />
                                </div>
                                {/* <span className={styles.iconText}>101k</span> */}
                            </div>
                        }
                        {data.statistics.typescript > 0 && 
                            <div className={styles.containerIcon}>
                                <div className={styles.flexIconWrapper}>
                                    <SiTypescript className={styles.icon} style={{fill: "#3178C6"}} />
                                </div>
                                {/* <span className={styles.iconText}>101k</span> */}
                            </div>
                        }
                        {data.statistics.python > 0 && 
                            <div className={styles.containerIcon}>
                                <div className={styles.flexIconWrapper}>
                                    <SiPython className={styles.icon} style={{fill: "#3776AB"}} />
                                </div>
                                {/* <span className={styles.iconText}>101k</span> */}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewCard
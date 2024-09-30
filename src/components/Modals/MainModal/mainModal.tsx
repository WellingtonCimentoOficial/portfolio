import React, { useEffect } from 'react'
import styles from './mainModal.module.css'
import { PiPlus, PiLinkBold } from "react-icons/pi";
import { mainModalType } from '../../../types/mainModalType';
import { Link } from 'react-router-dom';
import { usePreventScroll } from '../../../hooks/usePreventScroll';


type Props = mainModalType & {
    children?: React.ReactNode
}

const MainModal = ({setCloseWindowState, children, title, type, href='/'}: Props) => {
    const { preventScroll } = usePreventScroll()

    useEffect(() => {
        preventScroll(true)
        return () => preventScroll(false)
    }, [preventScroll])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    {type === 'text' ? (
                        <span className={styles.title}>{title}</span>
                    ):(
                        <Link to={href} className={`${styles.title} ${styles.titleAnchor}`}>
                            {title}
                            <PiLinkBold className={styles.titleIcon} />
                        </Link>
                    )}
                    <div className={styles.containerClose} onClick={() => setCloseWindowState(true)}>
                        <PiPlus className={styles.closeIcon} />
                    </div>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainModal
import React, { useEffect } from 'react'
import styles from './IconToast.module.css'
import { PiCheckBold, PiPlusBold } from "react-icons/pi";

export type IconToastType = {
    title: string,
    message: string
}

type Props = IconToastType & {
    success?: boolean
    setState: React.Dispatch<React.SetStateAction<boolean | null>>
}

const IconToast = ({title, message, success, setState}: Props) => {

    useEffect(() => {
        const timeout = setTimeout(() => setState(null), 10000)
        return () => clearTimeout(timeout)
    }, [setState])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={`${styles.iconContainer} ${success ? styles.successBackground : styles.errorBackground}`}>
                    {success ? (
                        <PiCheckBold className={styles.icon} />
                    ):(
                        <PiPlusBold className={styles.icon} style={{transform: "rotate(45deg)"}} />
                    )}
                </div>
                <div className={styles.containerSection}>
                    <div className={styles.header}>
                        <span className={`${styles.title} ${success ? styles.successColor : styles.errorColor}`}>{title}</span>
                    </div>
                    <div className={styles.body}>
                        <span className={styles.description}>{message}</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.loading} ${success ? styles.successBackground : styles.errorBackground}`}></div>
        </div>
    )
}

export default IconToast
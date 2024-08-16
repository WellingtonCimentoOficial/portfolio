import React from 'react'
import styles from './SimpleCard.module.css'

type Props = {
    icon: JSX.Element
    title: string
    description: string
    mark?: boolean
}

const SimpleCard = ({title, description, icon, mark}: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    {React.cloneElement(icon, {className: styles.icon})}
                    {mark && <div className={`${styles.mark} ${styles.markTop}`}></div>}
                    {mark && <div className={`${styles.mark} ${styles.markLeft}`}></div>}
                    {mark && <div className={`${styles.mark} ${styles.markRight}`}></div>}
                    {mark && <div className={`${styles.mark} ${styles.markBottom}`}></div>}
                </div>
                <div className={styles.body}>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SimpleCard
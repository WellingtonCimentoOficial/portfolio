import React from 'react'
import styles from './TitleDescLayout.module.css'

type Props = {
    title: string
    description: string
    children: React.ReactNode
    color?: string
}

const TitleDescLayout: React.FC<Props> = ({title, description, children, color}: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.title} style={{color: color || undefined}}>{title}</h2>
                <span className={styles.description} style={{color: color || undefined}}>{description}</span>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default TitleDescLayout
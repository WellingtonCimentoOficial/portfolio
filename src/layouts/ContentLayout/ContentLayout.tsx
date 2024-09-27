import React from 'react'
import styles from './ContentLayout.module.css'
import TextContentArea from '../../components/ContentAreas/TextContentArea/TextContentArea'

type Props = {
    title: string
    children: React.ReactNode
}

const ContentLayout = ({title, children}: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <div className={styles.body}>
                    <TextContentArea>
                        {children}
                    </TextContentArea>
                </div>
            </div>
        </div>
    )
}

export default ContentLayout
import React from 'react'
import styles from './WidthLayout.module.css'

type Props = {
    children: React.ReactNode
}

const WidthLayout: React.FC<Props> = ({children}: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default WidthLayout
import React from 'react'
import styles from './TextContentArea.module.css'

type Props = {
    children: React.ReactNode
}

const TextContentArea = ({children}: Props) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default TextContentArea
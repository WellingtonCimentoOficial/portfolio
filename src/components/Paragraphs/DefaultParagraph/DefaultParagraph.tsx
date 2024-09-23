import React from 'react'
import styles from './DefaultParagraph.module.css'

type Props = {
    children: React.ReactNode
}

const DefaultParagraph = ({children}: Props) => {
    return (
        <p className={styles.paragraph}>{children}</p>
    )
}

export default DefaultParagraph
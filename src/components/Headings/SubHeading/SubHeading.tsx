import React from 'react'
import styles from './SubHeading.module.css'

type Props = {
    children: React.ReactNode
}

const SubHeading = ({children}: Props) => {
    return (
        <h3 className={styles.heading}>{children}</h3>
    )
}

export default SubHeading
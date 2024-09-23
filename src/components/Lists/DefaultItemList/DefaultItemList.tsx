import React from 'react'
import styles from './DefaultItemList.module.css'

type Props = {
    children: React.ReactNode
}

const DefaultItemList = ({children}: Props) => {
    return (
        <li className={styles.item}>{children}</li>
    )
}

export default DefaultItemList
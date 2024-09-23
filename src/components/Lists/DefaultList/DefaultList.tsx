import React from 'react'
import styles from './DefaultList.module.css'

type Props = {
    children: React.ReactNode
    ordered?: boolean
}

const DefaultList = ({children, ordered}: Props) => {
    return ordered ? (
        <ol className={styles.ordered}>{children}</ol>
    ):(
        <ul className={styles.disordered}>{children}</ul>
    )
}

export default DefaultList
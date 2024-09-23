import React from 'react'
import styles from './DefaultLink.module.css'

type Props = {
    children: React.ReactNode
    href: string
}

const DefaultLink = ({href, children}: Props) => {
    return (
        <a className={styles.link} href={href}>{children}</a>
    )
}

export default DefaultLink
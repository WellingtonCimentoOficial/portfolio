import React from 'react'
import styles from './DefaultLink.module.css'
import { Link } from 'react-router-dom'

type Props = {
    children: React.ReactNode
    href: string
}

const DefaultLink = ({href, children}: Props) => {
    return (
        <Link className={styles.link} to={href}>{children}</Link>
    )
}

export default DefaultLink
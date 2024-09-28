import React, { forwardRef } from 'react'
import styles from './DefaultLink.module.css'
import { Link, LinkProps } from 'react-router-dom'

const DefaultLink = forwardRef<HTMLAnchorElement, LinkProps>(({className, children, ...rest}, ref) => {
    return (
        <Link ref={ref} className={styles.link} {...rest}>{children}</Link>
    )
})

export default DefaultLink
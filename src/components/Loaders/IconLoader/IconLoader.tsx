import React from 'react'
import styles from './IconLoader.module.css'
import IconLogo from '../../Logos/IconLogo/IconLogo'

type Props = {}

const IconLoader = (props: Props) => {
    return (
        <section className={styles.container}>
            <IconLogo className={styles.icon} />
        </section>
    )
}

export default IconLoader
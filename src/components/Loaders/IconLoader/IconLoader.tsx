import React from 'react'
import styles from './IconLoader.module.css'
import IconLogo from '../../Logos/IconLogo/IconLogo'

type Props = {
    transparency?: boolean
}

const IconLoader = ({transparency=false}: Props) => {
    return (
        <section className={styles.container} style={{backgroundColor: transparency ? "rgba(0, 0, 0, 0.500)" : undefined}}>
            <IconLogo className={styles.icon} />
        </section>
    )
}

export default IconLoader
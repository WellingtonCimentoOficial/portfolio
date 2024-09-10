import React from 'react'
import styles from "./FullLogo.module.css"
import IconLogo from '../IconLogo/IconLogo'

type Props = {}

const FullLogo = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <IconLogo className={styles.titleLogo} />
            <span className={styles.titleText}>Portfólio</span>
        </div>
    )
}

export default FullLogo
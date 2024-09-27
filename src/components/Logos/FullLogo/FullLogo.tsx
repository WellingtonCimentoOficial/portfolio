import React from 'react'
import styles from "./FullLogo.module.css"
import IconLogo from '../IconLogo/IconLogo'

type Props = {}

const FullLogo = (props: Props) => {
    const name = process.env.REACT_APP_NAME
    return (
        <div className={styles.wrapper}>
            <IconLogo className={styles.titleLogo} />
            <span className={styles.titleText}>{name}</span>
        </div>
    )
}

export default FullLogo
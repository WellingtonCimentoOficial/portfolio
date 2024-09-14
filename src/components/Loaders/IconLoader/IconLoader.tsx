import React, { useCallback, useEffect } from 'react'
import styles from './IconLoader.module.css'
import IconLogo from '../../Logos/IconLogo/IconLogo'

type Props = {
    transparency?: boolean
}

const IconLoader = ({transparency=false}: Props) => {
    const handleDocument = useCallback((value: "hidden"|"auto") => {
        document.body.style.overflowY = value
        document.documentElement.style.overflowY = value
        document.body.style.pointerEvents = (value === "hidden" ? "none" : value)
        document.documentElement.style.pointerEvents = (value === "hidden" ? "none" : value)
        document.documentElement.style.overflowY = value
        document.body.style.userSelect = value
        document.documentElement.style.userSelect = value
    }, [])

    useEffect(() => {
        handleDocument("hidden")
        return () => handleDocument("auto")
    }, [handleDocument])
    return (
        <section className={styles.container} style={{backgroundColor: transparency ? "rgba(0, 0, 0, 0.500)" : undefined}}>
            <IconLogo className={styles.icon} />
        </section>
    )
}

export default IconLoader
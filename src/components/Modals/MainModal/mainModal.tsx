import React, { useEffect, useRef } from 'react'
import styles from './mainModal.module.css'
import { PiPlus } from "react-icons/pi";
import { mainModalType } from '../../../types/mainModalType';
import { useScrollBlock } from '../../../hooks/useBlockScroll';


type Props = mainModalType & {
    children?: React.ReactNode
}

const MainModal = ({setCloseWindowState, children, title}: Props) => {
    const { scrollBlock } = useScrollBlock()
    const windowScrollRef = useRef<{top: number, left: number}>({top: window.scrollY, left: window.scrollX})

    useEffect(() => {
        const handleScroll = () => scrollBlock(windowScrollRef.current.top, windowScrollRef.current.left)

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [scrollBlock])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>{title}</span>
                    <div className={styles.containerClose} onClick={() => setCloseWindowState(true)}>
                        <PiPlus className={styles.closeIcon} />
                    </div>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainModal
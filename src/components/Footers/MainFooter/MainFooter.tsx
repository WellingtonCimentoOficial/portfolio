import React from 'react'
import styles from './MainFooter.module.css'
import WidthLayout from '../../../layouts/WidthLayout/WidthLayout'

type Props = {}

const MainFooter = (props: Props) => {
    const currentYear = new Date().getFullYear()

    return (
        <div className={styles.wrapper}>
            <WidthLayout>
                <div className={styles.container}>
                    <span>Todos os direitos reservados {currentYear}</span>
                </div>
            </WidthLayout>
        </div>
    )
}

export default MainFooter
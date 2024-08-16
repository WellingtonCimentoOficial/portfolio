import React from 'react'
import styles from './MainFooter.module.css'
import WidthLayout from '../../../layouts/WidthLayout/WidthLayout'

type Props = {}

const MainFooter = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <WidthLayout>
                <div className={styles.container}>
                    <span>All rights reserved.</span>
                </div>
            </WidthLayout>
        </div>
    )
}

export default MainFooter
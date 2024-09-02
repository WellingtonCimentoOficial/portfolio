import React, { useState } from 'react'
import styles from './BarFilter.module.css'
import BasicSelect, { DefaultSelectType } from '../../Selects/BasicSelect/BasicSelect'
import LineCarousel from '../../Carousels/LineCarousel/LineCarousel';

type Props = {}

const BarFilter = (props: Props) => {
    const selectData: DefaultSelectType[] = [
        {id: 0, text: "Popular"},
        {id: 1, text: "Favoritos"},
    ]
    const lineData: DefaultSelectType[] = [
        {id: 0, text: "HTML"},
        {id: 1, text: "Javascript"},
        {id: 2, text: "Css"},
        {id: 3, text: "Python"},
        {id: 4, text: "TypeScript"},
    ]

    const [teste, setTeste] = useState<DefaultSelectType>(selectData[0])
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.flexItemStart}>
                    <BasicSelect data={selectData} current={teste} setState={setTeste} />
                </div>
                <div className={styles.flexItemCenter}>
                    <LineCarousel data={lineData} />
                </div>
                <div className={styles.flexItemEnd}>
                    <BasicSelect data={selectData} current={teste} setState={setTeste} />
                </div>
            </div>
        </div>
    )
}

export default BarFilter
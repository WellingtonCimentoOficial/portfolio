import React from 'react'
import styles from './InlineSelect.module.css'
import { DefaultSelectType } from '../BasicSelect/BasicSelect'

type Props = {
    data: DefaultSelectType[]
    current: DefaultSelectType | null
    setState: React.Dispatch<React.SetStateAction<DefaultSelectType | null>>
}

const InlineSelect = ({data, current, setState}: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {data.map((item) => (
                    <div className={`${styles.flexItem} ${item.id === current?.id ? styles.focus : null}`} key={item.id} onClick={() => setState(item)}>
                        <span className={styles.text}>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InlineSelect
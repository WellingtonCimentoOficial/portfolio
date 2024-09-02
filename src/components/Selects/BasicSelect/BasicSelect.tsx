import React, { useState } from 'react'
import styles from './BasicSelect.module.css'
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

export type DefaultSelectType = {id: number, text: string}

type Props = {
    data: DefaultSelectType[]
    current: DefaultSelectType
    setState: React.Dispatch<React.SetStateAction<DefaultSelectType>>
}

const BasicSelect = ({data, current, setState}: Props) => {
    const [show, setShow] = useState<boolean>(false)
    
    const handleClick = (item: DefaultSelectType) => {
        setState(item)
        setShow(false)
    }

    return (
        <div className={styles.wrapper} tabIndex={1} onBlur={() => setShow(false)}>
            <div className={styles.container}>
                <div className={styles.header} onClick={() => setShow(oldValue => !oldValue)}>
                    <span className={styles.title}>{current.text}</span>
                    {show ? (
                        <PiCaretUpBold className={styles.icon} />
                    ):(
                        <PiCaretDownBold className={styles.icon} />
                    )}
                </div>
                {show &&
                    <div className={styles.body}>
                        <ul className={styles.list}>
                            {data.map(item => (
                                <li key={item.id} className={styles.listItem} onClick={() => handleClick(item)}>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default BasicSelect
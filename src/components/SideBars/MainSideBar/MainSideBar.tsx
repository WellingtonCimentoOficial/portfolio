import React from 'react'
import styles from './MainSideBar.module.css'
import { NavLink } from 'react-router-dom'
import { usePath } from '../../../hooks/usePath'

export type MainSideBarType = {
    id: number,
    text: string,
}

type Props = {
    data: MainSideBarType[]
}

const MainSideBar = ({data}: Props) => {
    const { path } = usePath()
    return (
        <div className={styles.wrapper}>
            <nav className={styles.container}>
                <ul className={styles.list} >
                    {data.map((item) => (
                        <li className={styles.listLi} key={item.id}>
                            <NavLink to={path(item.id, item.text)} className={({isActive}) => `${styles.navlink} ${isActive ? styles.active : null}`}>{item.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MainSideBar
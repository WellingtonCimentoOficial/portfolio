import React from 'react'
import styles from './MainHeader.module.css'
import WidthLayout from '../../../layouts/WidthLayout/WidthLayout'
import MainButton from '../../Buttons/MainButton/MainButton'

type Props = {}
type MenuType = {
    name: string
    href: string
}

const MainHeader = (props: Props) => {

    const menu: MenuType[] = [
        {
            name: 'Habilidades',
            href: 'softskills'
        },
        {
            name: 'Experiência',
            href: 'techstack'
        },
        {
            name: 'Contato',
            href: 'contact'
        },
        {
            name: 'Sobre',
            href: ''
        },
    ]

    const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>): void => {
        e.preventDefault()
        const section = document.getElementById(id)
        const offset = 70

        if(section){
            window.scrollTo({
                top: section.getBoundingClientRect().top + window.scrollY - offset, 
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className={styles.wrapper}>
            <WidthLayout>
                <div className={styles.container}>
                    <div className={styles.flexItem}>
                        <h1 className={styles.title}>Portifólio</h1>
                    </div>
                    <nav className={styles.navigationContainer}>
                        <ul className={styles.navigationList}>
                            {menu.map(((item, index) => (
                                <li key={index} className={styles.navigationListLi}>
                                    <a className={styles.navigationListLiLink} href={item.href} onClick={(e) => scrollToSection(item.href, e)}>{item.name}</a>
                                </li>
                            )))}
                            <div onClick={(e) => scrollToSection("projects", e)}>
                                <MainButton type='anchor' filltype='borderonly' href='/'> 
                                    Projetos
                                </MainButton>
                            </div>
                        </ul>
                    </nav>
                </div>
            </WidthLayout>
        </div>
    )
}

export default MainHeader
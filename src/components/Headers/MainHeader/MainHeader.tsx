import React, { useEffect, useRef, useState } from 'react'
import styles from './MainHeader.module.css'
import WidthLayout from '../../../layouts/WidthLayout/WidthLayout'
import MainButton from '../../Buttons/MainButton/MainButton'
import { Link } from 'react-router-dom'
import { PiListBold, PiPlusBold } from "react-icons/pi";
import FullLogo from '../../Logos/FullLogo/FullLogo'

type Props = {}
type MenuType = {
    name: string
    href: string
}

const MainHeader = (props: Props) => {
    const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)
    const [startShowEffect, setStartShowEffect] = useState<boolean>(false)
    const navigationContainerRef = useRef<HTMLDListElement>(null)

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

    useEffect(() => {
        const handleScreen = () => {
            if(window.innerWidth > 900){
                setStartShowEffect(false)
            }else{
                setStartShowEffect(true)
            }
        }

        handleScreen()

        window.addEventListener("resize", handleScreen)

        return () => window.removeEventListener("resize", handleScreen)
    }, [])

    useEffect(() => {
        if(showMenuMobile && startShowEffect && navigationContainerRef.current){
            navigationContainerRef.current.style.display = "block"
            document.body.style.overflowY = "hidden"
            document.documentElement.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "auto"
            document.documentElement.style.overflowY = "auto"
        }
    }, [showMenuMobile, startShowEffect])

    return (
        <div className={styles.wrapper}>
            <WidthLayout>
                <div className={styles.container}>
                    <div className={styles.containerBurgerMenu} onClick={() => setShowMenuMobile(oldValue => !oldValue)}>
                        {showMenuMobile ?(
                            <PiPlusBold className={styles.burgerIcon} style={{fill: "white", transform: "rotate(45deg)"}}/>
                        ):(
                            <PiListBold className={styles.burgerIcon} />
                        )
                    }
                    </div>
                    <div className={styles.flexItem}>
                        <Link to='/' className={styles.title}>
                            <FullLogo />
                        </Link>
                    </div>
                    <nav ref={navigationContainerRef} className={`${styles.navigationContainer} ${showMenuMobile && startShowEffect ? styles.showEffect : startShowEffect ? styles.hiddenEffect : null}`}>
                        <ul className={styles.navigationList}>
                            {menu.map(((item, index) => (
                                <li key={index} className={styles.navigationListLi} onClick={() => showMenuMobile && startShowEffect && setShowMenuMobile(false)}>
                                    <a className={styles.navigationListLiLink} href={item.href} onClick={(e) => scrollToSection(item.href, e)}>{item.name}</a>
                                </li>
                            )))}
                            <div onClick={(e) => scrollToSection("projects", e)}>
                                <div onClick={() => showMenuMobile && startShowEffect && setShowMenuMobile(false)}>
                                    <MainButton type='anchor' filltype='borderonly' href='/'> 
                                        Projetos
                                    </MainButton>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
            </WidthLayout>
        </div>
    )
}

export default MainHeader
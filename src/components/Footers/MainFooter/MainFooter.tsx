import React from 'react'
import styles from './MainFooter.module.css'
import WidthLayout from '../../../layouts/WidthLayout/WidthLayout'
import FullLogo from '../../Logos/FullLogo/FullLogo'
import { Link } from 'react-router-dom'

type Props = {}

type DataType = {
    id: number
    title: string
    data: {
        id: number
        text: string
        path: string
    }[]
}

const MainFooter = (props: Props) => {
    const currentYear = new Date().getFullYear()

    const data: DataType[] = [
        {
            id: 0,
            title: "Navegar",
            data: [
                {
                    id: 0,
                    text: "Habilidades",
                    path: "/"
                },
                {
                    id: 1,
                    text: "Experiência",
                    path: "/"
                },
                {
                    id: 2,
                    text: "Projetos",
                    path: "/"
                },
                {
                    id: 3,
                    text: "Sobre",
                    path: "/"
                },
            ]
        },
        {
            id: 2,
            title: "Tecnologias",
            data: [
                {
                    id: 6,
                    text: "Python",
                    path: "/"
                },
                {
                    id: 7,
                    text: "Django",
                    path: "/"
                },
                {
                    id: 8,
                    text: "JavaScript",
                    path: "/"
                },
                {
                    id: 9,
                    text: "TypeScript",
                    path: "/"
                },
                {
                    id: 10,
                    text: "React JS",
                    path: "/"
                },
                {
                    id: 11,
                    text: "PostgreSQL",
                    path: "/"
                },
            ]
        },
        {
            id: 3,
            title: "Redes Sociais",
            data: [
                {
                    id: 12,
                    text: "Instagram",
                    path: "https://www.instagram.com/wellington_cimento/"
                },
                {
                    id: 15,
                    text: "Linkedin",
                    path: "https://www.linkedin.com/in/wellingtoncimento/"
                },
                {
                    id: 16,
                    text: "Github",
                    path: "https://github.com/WellingtonCimentoOficial"
                }
            ]
        },
        {
            id: 1,
            title: "Contato",
            data: [
                {
                    id: 0,
                    text: "Enviar E-mail",
                    path: "mailto:contato@wellingtoncimento.com"
                },
            ]
        },
    ]
    
    return (
        <div className={styles.wrapper}>
            <WidthLayout>
                <div className={styles.container}>``
                    <div className={styles.header}>
                        <Link to="/" className={styles.headerLogoTitle}><FullLogo /></Link>
                    </div>
                    <div className={styles.body}>
                        {data.map((item) => (
                            <div className={styles.sectionContainer} key={item.id}>
                                <div className={styles.sectionContainerHeader}>
                                    <span className={styles.title}>{item.title}</span>
                                </div>
                                <ul className={styles.sectionContainerBody}>
                                    {item.data.map(itemData => (
                                        <li key={itemData.id}><Link to={itemData.path}>{itemData.text}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.containerTwo}>
                    <span>Todos os direitos reservados {currentYear}</span>
                </div>
            </WidthLayout>
        </div>
    )
}

export default MainFooter
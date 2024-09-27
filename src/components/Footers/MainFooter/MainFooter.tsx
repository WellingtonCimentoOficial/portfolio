import React from 'react'
import styles from './MainFooter.module.css'
import FullLogo from '../../Logos/FullLogo/FullLogo'
import { Link } from 'react-router-dom'
import WidthLayout from '../../../layouts/WidthLayout/WidthLayout'
import { v4 as uuidv4 } from 'uuid';

type Props = {}

type DataType = {
    id: string
    title: string
    data: {
        id: string
        text: string
        path: string
    }[]
}

type SocialMediaType = Omit<DataType, 'data'> & {
    data: (DataType['data'][number] & {icon: string})[]
}

const MainFooter = (props: Props) => {
    const currentYear = new Date().getFullYear()

    const data: DataType[] = [
        {
            id: uuidv4(),
            title: "Navegar",
            data: [
                {
                    id: uuidv4(),
                    text: "Habilidades",
                    path: "/"
                },
                {
                    id: uuidv4(),
                    text: "Experiência",
                    path: "/"
                },
                {
                    id: uuidv4(),
                    text: "Projetos",
                    path: "/"
                },
                {
                    id: uuidv4(),
                    text: "Sobre",
                    path: "/"
                },
            ]
        },
        {
            id: uuidv4(),
            title: "Tecnologias",
            data: [
                {
                    id: uuidv4(),
                    text: "Python",
                    path: "/"
                },
                {
                    id: uuidv4(),
                    text: "Django",
                    path: "/"
                },
                {
                    id: uuidv4(),
                    text: "JavaScript",
                    path: "/"
                },
                {
                    id: uuidv4(),
                    text: "TypeScript",
                    path: "/"
                },
                {
                    id: uuidv4(),
                    text: "React JS",
                    path: "/"
                },
                {
                    id: uuidv4(),
                    text: "PostgreSQL",
                    path: "/"
                },
            ]
        },
        {
            id: uuidv4(),
            title: "Regulamentos",
            data: [
                {
                    id: uuidv4(),
                    text: "Termos de Uso",
                    path: "/terms-of-use"
                },
                {
                    id: uuidv4(),
                    text: "Privacidade",
                    path: "/privacy-policy"
                },
            ]
        },
        {
            id: uuidv4(),
            title: "Contato",
            data: [
                {
                    id: uuidv4(),
                    text: "Enviar E-mail",
                    path: "mailto:contato@wellingtoncimento.com"
                },
            ]
        },
    ]

    const socialMedias: SocialMediaType = {
        id: uuidv4(),
        title: "Redes Sociais",
        data: [
            {
                id: uuidv4(),
                text: "Instagram",
                icon: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1727399057/instagram-icon_pccvpu.png",
                path: "https://www.instagram.com/wellington_cimento/"
            },
            {
                id: uuidv4(),
                text: "Linkedin",
                icon: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1727399057/linkedin-icon_hk0jb3.png",
                path: "https://www.linkedin.com/in/wellingtoncimento/"
            },
            {
                id: uuidv4(),
                text: "Github",
                icon: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1727399057/github-icon_gh84hq.png",
                path: "https://github.com/WellingtonCimentoOficial"
            },
        ]
    }
    
    return (
        <div className={styles.wrapper}>
            <WidthLayout>
                <div className={styles.container}>``
                    <div className={styles.header}>
                        <Link to="/" className={styles.headerLogoTitle}><FullLogo /></Link>
                    </div>
                    <div className={styles.body}>
                        <>
                            {data.map((item) => (
                                <div className={styles.sectionContainer} key={item.id}>
                                    <div className={styles.sectionContainerHeader}>
                                        <span className={styles.title}>{item.title}</span>
                                    </div>
                                    <ul className={styles.sectionContainerBody}>
                                        {item.data.map(itemData => (
                                            <li key={itemData.id}>
                                                <Link to={itemData.path} target='_blank'>{itemData.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className={styles.sectionContainer}>
                                <div className={styles.sectionContainerHeader}>
                                    <span className={styles.title}>{socialMedias.title}</span>
                                </div>
                                <ul className={styles.sectionContainerSocialMediaBody}>
                                    {socialMedias.data.map(media => (
                                        <li key={media.id}>
                                            <Link to={media.path} target='_blank'>
                                                <img className={styles.mediaIcon} src={media.icon} alt={media.text} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
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
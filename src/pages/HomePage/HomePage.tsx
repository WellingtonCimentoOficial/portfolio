import React, { useCallback, useContext, useEffect, useState } from 'react'
import styles from './HomePage.module.css'
import MainButton from '../../components/Buttons/MainButton/MainButton'
import TitleDescLayout from '../../layouts/TitleDescLayout/TitleDescLayout'
import cvPdf from '../../assets/curriculo.pdf'
import SimpleCard from '../../components/Cards/SimpleCard/SimpleCard'
import {
    PiHandshakeThin, PiMegaphoneThin, PiCheckThin,
    PiCardsThreeThin, PiBrainThin, PiBriefcaseThin, PiCloudThin,
    PiClockCountdownThin
} from "react-icons/pi";
import ContactForm from '../../components/Forms/ContactForm/ContactForm'
import { FaGithub } from "react-icons/fa6";
import { projectData } from '../../datas/projectsData'
import PreviewCard from '../../components/Cards/PreviewCard/PreviewCard'
import { ProjectType } from '../../types/projectType'
import ProjectModal from '../../components/Modals/ProjectModal/ProjectModal'
import BasicSelect, { DefaultSelectType } from '../../components/Selects/BasicSelect/BasicSelect'
import InlineSelect from '../../components/Selects/InlineSelect/InlineSelect'
import { LoadingContext } from '../../contexts/LoadingContext'

type Props = {}
type defaultType = {
    title: string
    description: string
}
type TechStackType = defaultType & {
    data: {
        id: number,
        image: string,
        description: string
    }[]
}
type SoftSkillsType = defaultType & {
    data: {
        title: string,
        description: string
        icon: JSX.Element
        isRelevant: boolean
    }[]
}

const HomePage = (props: Props) => {
    const projectsSection: defaultType = {
        title: "Projetos",
        description: "Uma coleção dos meus projetos pessoais que demonstram minhas habilidades e paixão por desenvolver soluções criativas e funcionais."
    }

    const techStackSection: TechStackType = {
        title: "Tech Stack",
        description: "Tecnologias que eu utilizo para construir soluções robustas, escaláveis e inovadoras. A combinação certa de ferramentas do mercado, transformando suas ideias em produtos digitais de alta qualidade.",
        data: [
            {
                id: 0,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677974/atom_eydxg7.png",
                description: "React",
            },
            {
                id: 1,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677973/css-3_yx7nz6.png",
                description: "CSS3",
            },
            {
                id: 2,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677977/django_ibacgu.png",
                description: "Django",
            },
            {
                id: 3,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677981/html_zf6pww.png",
                description: "Html",
            },
            {
                id: 4,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677985/js_qs7tfy.png",
                description: "JavaScript",
            },
            {
                id: 5,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677983/mysql_dvepbh.png",
                description: "MySQL",
            },
            {
                id: 6,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677986/postgre_yjvw3k.png",
                description: "PostgreSQL",
            },
            {
                id: 7,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677989/python_nwuu3m.png",
                description: "Python",
            },
            {
                id: 8,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677990/typescript_t2vwfo.png",
                description: "TypeScript",
            },
            {
                id: 9,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677978/docker_oioaks.png",
                description: "Docker",
            },
            {
                id: 10,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677979/git_esktrj.png",
                description: "Git",
            },
            {
                id: 11,
                image: "https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677982/github_ut6tbh.png",
                description: "Github",
            },
        ]
    }

    const softSkillsSection: SoftSkillsType = {
        title: "Soft Skills",
        description: "Competências essenciais que complementam minhas habilidades técnicas, facilitando a comunicação, a colaboração e a resolução de problemas. Essas qualidades me permitem trabalhar de forma eficaz em equipe, adaptar-me rapidamente a novas situações e manter um foco constante na entrega de resultados de alta qualidade.",
        data: [
            {
                title: "Trabalho em equipe",
                description: "Habilidade para colaborar de forma eficaz com os outros para atingir objetivos comuns",
                icon: <PiHandshakeThin />,
                isRelevant: true
            },
            {
                title: "Comunicação",
                description: "Capacidade de transmitir informações de maneira clara e concisa",
                icon: <PiMegaphoneThin />,
                isRelevant: false
            },
            {
                title: "Resolução de Problemas",
                description: "Competência para encontrar soluções eficazes para desafios complexos",
                icon: <PiCheckThin />,
                isRelevant: true
            },
            {
                title: "Pensamento Crítico",
                description: "Análise lógica e objetiva para avaliar informações e tomar decisões bem fundamentadas",
                icon: <PiCloudThin />,
                isRelevant: false
            },
            {
                title: "Ética de Trabalho",
                description: "Compromisso com a excelência e a realização de tarefas com integridade.e",
                icon: <PiBriefcaseThin />,
                isRelevant: false
            },
            {
                title: "Criatividade",
                description: "Capacidade de pensar fora da caixa e propor ideias inovadoras",
                icon: <PiBrainThin />,
                isRelevant: true
            },
            {
                title: "Iniciativa",
                description: "Proatividade para tomar decisões e agir sem esperar instruções detalhadas",
                icon: <PiClockCountdownThin />,
                isRelevant: false
            },
            {
                title: "Adaptabilidade",
                description: "Flexibilidade para se adaptar rapidamente a novas situações e mudanças",
                icon: <PiCardsThreeThin />,
                isRelevant: true
            },
        ]
    }

    const contactSection: defaultType = {
        title: "Contato",
        description: "Pronto para novas oportunidades e desafios? Entre em contato para discutir como posso contribuir com suas equipes e projetos."
    }

    const selectDataOne: DefaultSelectType[] = [
        { id: 0, text: "Todos" },
        { id: 1, text: "Favoritos" },
    ]
    const selectDataTwo: DefaultSelectType[] = [
        { id: 0, text: "Relevância" },
    ]
    const selectDataThree: DefaultSelectType[] = [
        { id: 0, text: "Todas" },
        { id: 2, text: "Linha de comando" },
        { id: 1, text: "Gráfica" },
    ]

    const [projects, setProjects] = useState<ProjectType[]>(projectData)
    const [modalData, setModalData] = useState<ProjectType | null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [filterOne, setFilterOne] = useState<DefaultSelectType>(selectDataOne[0])
    const [filterTwo, setFilterTwo] = useState<DefaultSelectType>(selectDataTwo[0])
    const [filterThree, setFilterThree] = useState<DefaultSelectType>(selectDataThree[0])
    const { setIsLoading } = useContext(LoadingContext)

    const handleModal = (data: ProjectType) => {
        setModalData(data)
        setShowModal(true)
    }

    const handleFilters = useCallback(() => {
        const projectDataFiltered = projectData.filter(project => {
            const matchesFavorite = filterOne.id === 0 || project.isFavorite === true
            const matchesInterface = filterThree.id === 0 || project.isGUI === (filterThree.id === 1 ? true : false)

            return matchesFavorite && matchesInterface
        })
        const projectDataSorted = projectDataFiltered.sort((a, b) => {
            return (b.isHighlighted ? 1 : 0) - (a.isHighlighted ? 1 : 0)
        })
        setProjects(projectDataSorted)
    }, [filterOne, filterThree])

    useEffect(() => {
        setIsLoading(true)
        handleFilters()
        setIsLoading(false)
    }, [filterThree, filterOne, setIsLoading, handleFilters])

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.containerSection} ${styles.containerMainSection}`}>
                <section className={styles.containerOne}>
                    <div className={styles.containerOneItem}>
                        <span className={styles.containerOneItemTitleOne}>Pronto para <span className={styles.highlight}>destacar</span> sua <span className={styles.highlight}>marca online</span>?</span>
                        {/* <span className={styles.containerOneItemTitleTwo}>Transforme sua ideia em sua realidade digital. Vamos juntos!👊🏻</span> */}
                        <span className={styles.containerOneItemText}>
                            Transforme sua ideia em realidade digital utilizando tecnologias de ponta como Python, Django, React com TypeScript, banco de dados PostgreSQL e Docker. Vamos juntos criar soluções inovadoras e eficientes!
                        </span>
                        <div className={styles.containerOneItemButtons}>
                            <MainButton 
                                type='anchor' 
                                href='https://github.com/WellingtonCimentoOficial' 
                                disableHoverEffect 
                                filltype='borderonly' 
                                icon={<FaGithub />} 
                                backgroundColor='black' 
                                color='white'
                                target='_blank'
                            >
                                GitHub
                            </MainButton>
                            <MainButton type='anchor' href={cvPdf} target="_blank" disableHoverEffect>Baixar CV</MainButton>
                        </div>
                    </div>
                    <div className={styles.containerOneimage}>
                        <img className={styles.containerOneImageImg} src="https://res.cloudinary.com/dmkxkaumk/image/upload/v1726677991/vecteezy_vector-illustration-of-a-person-concept-people-will_5426311_xonha4.png" alt="" />
                    </div>
                </section>
            </div>
            <section id='projects' className={`${styles.containerSection} ${styles.containerProjects}`}>
                <TitleDescLayout title={projectsSection.title} description={projectsSection.description}>
                    <div className={styles.containerProjectsFilters}>
                        <div className={styles.containerProjectsFiltersFlexItemStart}>
                            <span className={styles.containerProjectsFiltersFlexItemText}>Mostrar:</span>
                            <BasicSelect data={selectDataOne} current={filterOne} setState={setFilterOne} />
                        </div>
                        <div className={styles.containerProjectsFiltersGroup}>
                            <div className={styles.containerProjectsFiltersFlexItemCenter}>
                                <InlineSelect data={selectDataThree} current={filterThree} setState={setFilterThree} />
                            </div>
                            <div className={styles.containerProjectsFiltersFlexItemEnd}>
                                <span className={styles.containerProjectsFiltersFlexItemText}>Ordenar por:</span>
                                <BasicSelect data={selectDataTwo} current={filterTwo} setState={setFilterTwo} />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.containerSectionBody} ${styles.containerProjectsBody}`}>
                        {projects.map(project => (
                            <PreviewCard key={project.id} data={project} setState={handleModal} />
                        ))}
                        {projects.length === 0 &&
                            <span>😓😓😓 Infelizmente não encontramos nenhum item com esses parâmetros 😓😓😓</span>
                        }
                    </div>
                </TitleDescLayout>
            </section>
            <section id='techstack' className={`${styles.containerSection} ${styles.containerTechStack}`}>
                <TitleDescLayout title={techStackSection.title} description={techStackSection.description}>
                    <div className={`${styles.containerSectionBody} ${styles.containerTechStackBody}`}>
                        {techStackSection.data.map(item => (
                            <div key={item.id} className={styles.containerTechStackBodyItem}>
                                <img className={styles.containerTechStackBodyItemImage} src={item.image} alt={item.description} />
                            </div>
                        ))}
                    </div>
                </TitleDescLayout>
            </section>
            <section id='softskills' className={`${styles.containerSection} ${styles.containerSoftSkills}`}>
                <TitleDescLayout title={softSkillsSection.title} description={softSkillsSection.description}>
                    <div className={`${styles.containerSectionBody} ${styles.containerSoftSkillsBody}`}>
                        {(() => {
                            const quantityPerRow = 4
                            return (
                                Array.from(Array(softSkillsSection.data.length / quantityPerRow)).map((_, indexArr) => (
                                    <div className={styles.containerSoftSkillsBodyItem} key={indexArr}>
                                        {softSkillsSection.data.slice(indexArr * quantityPerRow, (indexArr + 1) * quantityPerRow).map((skill, index) => (
                                            <SimpleCard
                                                key={indexArr * index}
                                                title={skill.title}
                                                description={skill.description}
                                                icon={skill.icon}
                                                mark={skill.isRelevant} />
                                        ))}
                                    </div>
                                ))
                            )
                        })()}
                    </div>
                </TitleDescLayout>
            </section>
            <section id='contact' className={`${styles.containerSection} ${styles.containerContact}`}>
                <TitleDescLayout title={contactSection.title} description={contactSection.description}>
                    <div className={`${styles.containerSectionBody} ${styles.containerContactBody}`}>
                        <ContactForm />
                    </div>
                </TitleDescLayout>
            </section>
            {modalData && showModal &&
                <ProjectModal
                    title={modalData.title}
                    href={`/project/${modalData.id}/${modalData.title.toLowerCase().split(" ").join("-")}`}
                    type='anchor'
                    data={modalData}
                    setCloseWindowState={(value) => setShowModal(!value)}
                />
            }
        </div>
    )
}

export default HomePage
import React, {useEffect, useState } from 'react'
import styles from './HomePage.module.css'
import WidthLayout from '../../layouts/WidthLayout/WidthLayout'
import MainButton from '../../components/Buttons/MainButton/MainButton'
import myimage from '../../assets/vecteezy_vector-illustration-of-a-person-concept-people-will_5426311.png'
import TitleDescLayout from '../../layouts/TitleDescLayout/TitleDescLayout'
import reactImage from '../../assets/atom.png'
import cssImage from '../../assets/css-3.png'
import djangoImage from '../../assets/django.png'
import htmlImage from '../../assets/html.png'
import jsImage from '../../assets/js.png'
import mySqlImage from '../../assets/mysql.png'
import postgresSqlImage from '../../assets/postgre.png'
import pythonImage from '../../assets/python.png'
import typeScriptImage from '../../assets/typescript.png'
import dockerImage from '../../assets/docker.png'
import gitHubImage from '../../assets/github.png'
import gitImage from '../../assets/git.png'
import cvPdf from '../../assets/curriculo.pdf'
import SimpleCard from '../../components/Cards/SimpleCard/SimpleCard'
import { PiHandshakeThin, PiMegaphoneThin, PiCheckThin,
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
import LineCarousel from '../../components/Carousels/LineCarousel/LineCarousel'

type Props = {}
type defaultType = {
    title: string
    description: string
}
type TechStackType = defaultType & {
    data: string[]
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
        data: [reactImage, cssImage, djangoImage, htmlImage, jsImage, mySqlImage, postgresSqlImage, pythonImage, typeScriptImage, dockerImage, gitImage, gitHubImage]
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
        {id: 0, text: "Popular"},
        {id: 1, text: "Favoritos"},
    ]
    const selectDataTwo: DefaultSelectType[] = [
        {id: 0, text: "Relevância"},
    ]
    const lineData: DefaultSelectType[] = [
        {id: 0, text: "HTML"},
        {id: 1, text: "Javascript"},
        {id: 2, text: "Css"},
        {id: 3, text: "Python"},
        {id: 4, text: "TypeScript"},
    ]

    const [projects, setProjects] = useState<ProjectType[]>(projectData)
    const [modalData, setModalData] = useState<ProjectType|null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [filterOne, setFilterOne] = useState<DefaultSelectType>(selectDataOne[0])
    const [filterTwo, setFilterTwo] = useState<DefaultSelectType>(selectDataTwo[0])

    const handleModal = (data: ProjectType) => {
        setModalData(data)
        setShowModal(true)
    }

    useEffect(() => {
        setProjects(oldValue => {
            if(filterOne.id === 1){
                const valueUpdated = oldValue.filter(project => project.isFavorite)
                return valueUpdated
            }
            return projectData
        })
    }, [filterOne])

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.containerSection} ${styles.containerMainSection}`}>
                <WidthLayout>
                    <section className={styles.containerOne}>
                        <div className={styles.containerOneItem}>
                            <span className={styles.containerOneItemTitleOne}>Pronto para <span className={styles.highlight}>destacar</span> sua <span className={styles.highlight}>marca online</span>?</span>
                            {/* <span className={styles.containerOneItemTitleTwo}>Transforme sua ideia em sua realidade digital. Vamos juntos!👊🏻</span> */}
                            <span className={styles.containerOneItemText}>
                            Transforme sua ideia em realidade digital utilizando tecnologias de ponta como Python, Django, React com TypeScript, banco de dados PostgreSQL e Docker. Vamos juntos criar soluções inovadoras e eficientes!
                            </span>
                            <div className={styles.containerOneItemButtons}>
                                <MainButton type='anchor' href='https://github.com/WellingtonCimentoOficial' disableHoverEffect filltype='borderonly' icon={<FaGithub />} backgroundColor='black' color='white'>
                                    GitHub
                                </MainButton>
                                <MainButton type='anchor' href={cvPdf} target="_blank" disableHoverEffect>Baixar CV</MainButton>
                            </div>
                        </div>
                        <div className={styles.containerOneimage}>
                            <img className={styles.containerOneImageImg} src={myimage} alt="" />
                        </div>
                    </section>
                </WidthLayout>
            </div>
            <section id='projects' className={`${styles.containerSection} ${styles.containerProjects}`}>
                <WidthLayout>
                    <TitleDescLayout title={projectsSection.title} description={projectsSection.description}>
                        <div className={styles.containerProjectsFilters}>
                            <div className={styles.containerProjectsFiltersFlexItemStart}>
                                <BasicSelect data={selectDataOne} current={filterOne} setState={setFilterOne} />
                            </div>
                            <div className={styles.containerProjectsFiltersGroup}>
                                <div className={styles.containerProjectsFiltersFlexItemCenter}>
                                    <LineCarousel data={lineData} />
                                </div>
                                <div className={styles.containerProjectsFiltersFlexItemEnd}>
                                    <BasicSelect data={selectDataTwo} current={filterTwo} setState={setFilterTwo} />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.containerSectionBody} ${styles.containerProjectsBody}`}>
                            {projects.map(project => (
                                <PreviewCard key={project.id} data={project} setState={handleModal} />
                            ))}
                        </div>
                    </TitleDescLayout>
                </WidthLayout>
            </section>
            <section id='techstack' className={`${styles.containerSection} ${styles.containerTechStack}`}>
                <WidthLayout>
                    <TitleDescLayout title={techStackSection.title} description={techStackSection.description}>
                        <div className={`${styles.containerSectionBody} ${styles.containerTechStackBody}`}>
                            {techStackSection.data.map((image, index) => (
                                <div key={index} className={styles.containerTechStackBodyItem}>
                                    <img className={styles.containerTechStackBodyItemImage} src={image} alt="" />
                                </div>
                            ))}
                        </div>
                    </TitleDescLayout>
                </WidthLayout>
            </section>
            <section id='softskills' className={`${styles.containerSection} ${styles.containerSoftSkills}`}>
                <WidthLayout>
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
                </WidthLayout>
            </section>
            <section id='contact' className={`${styles.containerSection} ${styles.containerContact}`}>
                <WidthLayout>
                    <TitleDescLayout title={contactSection.title} description={contactSection.description}>
                        <div className={`${styles.containerSectionBody} ${styles.containerContactBody}`}>
                            <ContactForm />
                        </div>
                    </TitleDescLayout>
                </WidthLayout>
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
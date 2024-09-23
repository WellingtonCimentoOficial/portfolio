import React, { useEffect, useState } from 'react'
import styles from './ProjectPage.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectType } from '../../types/projectType'
import { projectData } from '../../datas/projectsData'
import { FaGithub } from "react-icons/fa6";
import LineSeparator from '../../components/Separators/LineSeparator'
import TextContentArea from '../../components/ContentAreas/TextContentArea/TextContentArea'
import DefaultParagraph from '../../components/Paragraphs/DefaultParagraph/DefaultParagraph'
import SubHeading from '../../components/Headings/SubHeading/SubHeading'
import DefaultLink from '../../components/Links/DefaultLink/DefaultLink'
import DefaultList from '../../components/Lists/DefaultList/DefaultList'
import DefaultItemList from '../../components/Lists/DefaultItemList/DefaultItemList'
import BasicSelect, { DefaultSelectType } from '../../components/Selects/BasicSelect/BasicSelect'
import { usePath } from '../../hooks/usePath'

type Props = {}

const ProjectPage = (props: Props) => {
    const { projectId } = useParams()
    const [projects, setProjects] = useState<DefaultSelectType[]>([])
    const [project, setProject] = useState<ProjectType | null>(null)
    const [projectSelected, setProjectSelected] = useState<DefaultSelectType | null>(null)
    const { path } = usePath()
    const navigate = useNavigate()

    useEffect(() => {
        if(typeof projectId === 'string' && !isNaN(parseInt(projectId))){
            const currentProject = projectData.find(item => item.id === parseInt(projectId))
            if(currentProject){
                setProject(currentProject)
                setProjectSelected({id: currentProject.id, text: currentProject.title})
            }
        }
    }, [projectId])

    useEffect(() => {
        const formattedData = projectData.map(item => {
            return {id: item.id, text: item.title}
        })
        setProjects(formattedData)
    }, [])

    useEffect(() => {
        if(projectSelected){
            const url = path(projectSelected.id, projectSelected.text)
            navigate(url)
        }
    }, [projectSelected, navigate, path])

    return (
        project && (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {projectSelected &&
                        <div className={styles.projectsSelect}>
                            <span className={styles.projectsSelectLabel}>Mudar de página</span>
                            <BasicSelect data={projects} current={projectSelected} setState={setProjectSelected} />
                        </div>
                    }
                    <div className={styles.header}>
                        <div className={styles.headerTitleContainer}>
                            <h2 className={styles.headerTitle}>{project.title}</h2>
                            <div className={styles.version}>1.0.0</div>
                        </div>
                        <a className={styles.headerIconContainer} href={project.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.headerIcon} />
                        </a>
                    </div>
                    <div className={styles.body}>
                        <TextContentArea>
                            <LineSeparator />
                            <DefaultParagraph>Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".</DefaultParagraph>
                            <DefaultParagraph>We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need minimal Spring configuration.</DefaultParagraph>
                            <DefaultParagraph>If you’re looking for information about a specific version, or instructions about how to upgrade from an earlier release, check out the project release notes section on our wiki.</DefaultParagraph>
                            <SubHeading>Features</SubHeading>
                            <DefaultList>
                                <DefaultItemList>Create stand-alone Spring applications</DefaultItemList>
                                <DefaultItemList>Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)</DefaultItemList>
                                <DefaultItemList>Provide opinionated 'starter' dependencies to simplify your build configuration</DefaultItemList>
                                <DefaultItemList>Automatically configure Spring and 3rd party libraries whenever possible</DefaultItemList>
                                <DefaultItemList>Provide production-ready features such as metrics, health checks, and externalized configuration</DefaultItemList>
                                <DefaultItemList>Absolutely no code generation and no requirement for XML configuration</DefaultItemList>
                            </DefaultList>

                            <SubHeading>Getting Started</SubHeading>
                            <DefaultList>
                                <DefaultItemList>
                                    Super quick — try the <DefaultLink href="/">Quickstart Guide</DefaultLink>.
                                </DefaultItemList>
                                <DefaultItemList>
                                    More general — try <DefaultLink href="/">Building an Application with Spring Boot</DefaultLink>
                                </DefaultItemList>
                                <DefaultItemList>
                                    More specific — try <DefaultLink href="/">Building a RESTful Web Service</DefaultLink>.
                                </DefaultItemList>
                                <DefaultItemList>
                                    Or search through all our guides on the <DefaultLink href="/">Guides</DefaultLink> homepage.
                                </DefaultItemList>
                            </DefaultList>
                            <SubHeading>Talks and videos</SubHeading>
                            <DefaultList>
                                <DefaultItemList>
                                    <DefaultLink href="/">Mind the Gap: Jumping from Spring Boot 2.x to 3.x</DefaultLink>
                                </DefaultItemList>
                                <DefaultItemList>
                                    <DefaultLink href="/">Demystifying Spring Internals</DefaultLink>
                                </DefaultItemList>
                                <DefaultItemList>
                                    <DefaultLink href="/">Ahead Of Time and Native in Spring Boot 3.0</DefaultLink>
                                </DefaultItemList>
                                <DefaultItemList>
                                    <DefaultLink href="/">Improve Your Developer Experience with Spring Boot Dev Services</DefaultLink>
                                </DefaultItemList>
                            </DefaultList>
                        </TextContentArea>
                    </div>
                </div>
            </div>
        )
    )
}

export default ProjectPage
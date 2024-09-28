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
    const { projectPath } = usePath()
    const navigate = useNavigate()

    useEffect(() => {
        if(typeof projectId === 'string' && !isNaN(parseInt(projectId))){
            const projectsFormatted = projectData.map(item => {
                return {id: item.id, text: item.title}
            })
            const currentProject = projectData.find(item => item.id === parseInt(projectId))
            if(currentProject){
                setProject(currentProject)
                setProjectSelected({id: currentProject.id, text: currentProject.title})
            }
            setProjects(projectsFormatted)
        }
    }, [projectId])

    useEffect(() => {
        if(projectSelected && project && projectSelected.id !== project.id){
            const url = projectPath(projectSelected.id, projectSelected.text)
            navigate(url)
        }
    }, [projectSelected, project, navigate, projectPath])

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
                        <DefaultLink className={styles.headerIconContainer} to={project.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.headerIcon} />
                        </DefaultLink>
                    </div>
                    <div className={styles.body}>
                        <TextContentArea>
                            <LineSeparator />
                            {project.description.split('\n').map((description, index) => (
                                <DefaultParagraph key={index}>{description}</DefaultParagraph>
                            ))}
                            {project.details.features.length > 0 &&
                                <>
                                    <SubHeading>Funcionalidades</SubHeading>
                                    <DefaultList>
                                        {project.details.features.map(feature => (
                                            <DefaultItemList key={feature.id}>{feature.text}</DefaultItemList>
                                        ))}
                                    </DefaultList>
                                </>
                            }

                            <SubHeading>Getting Started</SubHeading>
                            <DefaultList>
                                <DefaultItemList>
                                    Super quick — try the <DefaultLink to="/">Quickstart Guide</DefaultLink>.
                                </DefaultItemList>
                                <DefaultItemList>
                                    More general — try <DefaultLink to="/">Building an Application with Spring Boot</DefaultLink>
                                </DefaultItemList>
                                <DefaultItemList>
                                    More specific — try <DefaultLink to="/">Building a RESTful Web Service</DefaultLink>.
                                </DefaultItemList>
                                <DefaultItemList>
                                    Or search through all our guides on the <DefaultLink to="/">Guides</DefaultLink> homepage.
                                </DefaultItemList>
                            </DefaultList>
                            <SubHeading>Talks and videos</SubHeading>
                            <DefaultList>
                                <DefaultItemList>
                                    <DefaultLink to="/">Mind the Gap: Jumping from Spring Boot 2.x to 3.x</DefaultLink>
                                </DefaultItemList>
                                <DefaultItemList>
                                    <DefaultLink to="/">Demystifying Spring Internals</DefaultLink>
                                </DefaultItemList>
                                <DefaultItemList>
                                    <DefaultLink to="/">Ahead Of Time and Native in Spring Boot 3.0</DefaultLink>
                                </DefaultItemList>
                                <DefaultItemList>
                                    <DefaultLink to="/">Improve Your Developer Experience with Spring Boot Dev Services</DefaultLink>
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
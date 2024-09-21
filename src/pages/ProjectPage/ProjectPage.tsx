import React, { useEffect, useState } from 'react'
import styles from './ProjectPage.module.css'
import { useParams } from 'react-router-dom'
import { ProjectType } from '../../types/projectType'
import { projectData } from '../../datas/projectsData'
import GlideCarousel from '../../components/Carousels/GlideCarousel/GlideCarousel'
import WidthLayout from '../../layouts/WidthLayout/WidthLayout'

type Props = {}

const ProjectPage = (props: Props) => {
    const { projectId } = useParams()
    const [project, setProject] = useState<ProjectType | null>(null)

    useEffect(() => {
        if(typeof projectId === 'string' && !isNaN(parseInt(projectId))){
            const currentProject = projectData.find(item => item.id === parseInt(projectId))
            if(currentProject){
                setProject(currentProject)
            }
        }
    }, [projectId])

    return (
        project && (
            <div className={styles.wrapper}>
                <WidthLayout>
                    <div className={styles.container}>
                        <section className={styles.sectionCarousel}>
                            <GlideCarousel mainData={project.images.main} data={project.images.others} />
                        </section>
                    </div>
                </WidthLayout>
            </div>
        )
    )
}

export default ProjectPage
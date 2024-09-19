import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectType } from '../../types/projectType'
import { projectData } from '../../datas/projectsData'

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
        <div>{project?.title}</div>
    )
}

export default ProjectPage
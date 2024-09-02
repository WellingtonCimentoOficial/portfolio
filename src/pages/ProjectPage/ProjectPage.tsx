import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const ProjectPage = (props: Props) => {
    const { projectId } = useParams()
    return (
        <div>ProjectPage {projectId}</div>
    )
}

export default ProjectPage
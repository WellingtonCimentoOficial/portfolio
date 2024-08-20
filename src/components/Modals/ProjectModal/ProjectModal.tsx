import React from 'react'
import MainModal from '../MainModal/mainModal'
import { ProjectType } from '../../../types/projectType'
import { mainModalType } from '../../../types/mainModalType'
import styles from './ProjectModal.module.css'
import GlideCarousel from '../../Carousels/GlideCarousel/GlideCarousel'

type Props = mainModalType & {
    data: ProjectType
}


const ProjectModal = (props: Props) => {
    return (
        <MainModal {...props}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.carousel}>
                        <GlideCarousel 
                            mainData={props.data.images.main} 
                            data={props.data.images.others} 
                            thumbnailBarPosition='vertical'                            
                        />
                    </div>
                </div>
            </div>
        </MainModal>
    )
}

export default ProjectModal
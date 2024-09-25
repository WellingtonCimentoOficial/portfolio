import React, { useEffect, useState } from 'react'
import MainHeader from '../../components/Headers/MainHeader/MainHeader'
import { Outlet } from 'react-router-dom'
import MainFooter from '../../components/Footers/MainFooter/MainFooter'
import MainSideBar, { MainSideBarType } from '../../components/SideBars/MainSideBar/MainSideBar'
import styles from './HeaderSideBarFooterLayout.module.css'
import WidthLayout from '../WidthLayout/WidthLayout'
import { projectData } from '../../datas/projectsData'
import DefaultLayout from '../DefaultLayout/DefaultLayout'

type Props = {}

const HeaderSideBarFooterLayout = (props: Props) => {
    const [mainSideBarData, setMainSideBarData] = useState<MainSideBarType[]>([])

    useEffect(() => {
        const formattedData = projectData.map(item => {
            return {id: item.id, text: item.title}
        })
        setMainSideBarData(formattedData)
    }, [])

    return (
        <DefaultLayout>
            <MainHeader />
            <WidthLayout>
                <div className={styles.container}>
                    <div className={styles.sideBarContainer}>
                        <MainSideBar data={mainSideBarData} />
                    </div>
                    <div className={styles.flexItem}>
                        <Outlet />
                    </div>
                </div>
            </WidthLayout>
            <MainFooter />
        </DefaultLayout>
    )
}

export default HeaderSideBarFooterLayout
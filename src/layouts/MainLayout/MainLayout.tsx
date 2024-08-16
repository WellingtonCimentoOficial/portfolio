import React from 'react'
import MainHeader from '../../components/Headers/MainHeader/MainHeader'
import MainFooter from '../../components/Footers/MainFooter/MainFooter'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <>
            <MainHeader />
            <Outlet />
            <MainFooter />
        </>
    )
}

export default MainLayout
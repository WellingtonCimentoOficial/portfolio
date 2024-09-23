import React from 'react'
import MainHeader from '../../components/Headers/MainHeader/MainHeader'
import MainFooter from '../../components/Footers/MainFooter/MainFooter'
import { Outlet } from 'react-router-dom'
import WidthLayout from '../WidthLayout/WidthLayout'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <>
            <MainHeader />
            <WidthLayout>
                <Outlet />
            </WidthLayout>
            <MainFooter />
        </>
    )
}

export default MainLayout
import React from 'react'
import MainHeader from '../../components/Headers/MainHeader/MainHeader'
import MainFooter from '../../components/Footers/MainFooter/MainFooter'
import { Outlet } from 'react-router-dom'
import WidthLayout from '../WidthLayout/WidthLayout'
import DefaultLayout from '../DefaultLayout/DefaultLayout'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <DefaultLayout>
            <MainHeader />
            <WidthLayout>
                <Outlet />
            </WidthLayout>
            <MainFooter />
        </DefaultLayout>
    )
}

export default MainLayout
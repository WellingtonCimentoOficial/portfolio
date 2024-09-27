import React, { useContext } from 'react'
import { CookiesContext } from '../../contexts/CookiesContext'
import CookiesModal from '../../components/Modals/CookiesModal/CookiesModal'

type Props = {
    children: React.ReactNode
}

const DefaultLayout = ({children}: Props) => {
    const { accepted } = useContext(CookiesContext)
    return (
        <>
            {children}
            {accepted === false && <CookiesModal />}
        </>
    )
}

export default DefaultLayout
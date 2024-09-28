import React, { useContext } from 'react'
import { CookiesContext } from '../../../contexts/CookiesContext'
import styles from "./CookiesModal.module.css"
import MainButton from '../../Buttons/MainButton/MainButton'
import DefaultLink from '../../Links/DefaultLink/DefaultLink'

type Props = {}

const CookiesModal = (props: Props) => {
    const { setAccepted } = useContext(CookiesContext)
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.flexHeader}>
                    <h2 className={styles.title}>Politica de cookies</h2>
                    <p className={styles.text}>Este site utiliza cookies para melhorar sua experiência. Ao clicar em "Aceitar", você concorda com os nossos <DefaultLink to='/terms-of-use' target="_blank" rel="noopener noreferrer">Termos de Uso</DefaultLink> e <DefaultLink to='/privacy-policy' target="_blank" rel="noopener noreferrer">Política de Privacidade</DefaultLink>.</p>
                </div>
                <div className={styles.flexBody}>
                    <MainButton 
                        type='button' 
                        filltype='borderonly'
                        disableHoverEffect
                        onClick={() => setAccepted(null)}
                    >
                        Recusar
                    </MainButton>
                    <MainButton 
                        type='button'
                        disableHoverEffect
                        onClick={() => setAccepted(true)}
                    >
                        Aceitar
                    </MainButton>
                </div>
            </div>
        </div>
    )
}

export default CookiesModal
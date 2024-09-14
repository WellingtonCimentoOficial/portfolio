import React, { useCallback, useContext, useEffect, useState } from 'react'
import styles from './ContactForm.module.css'
import MainButton from '../../Buttons/MainButton/MainButton'
import { useSendEmail } from '../../../hooks/useSendEmail'
import { LoadingContext } from '../../../contexts/LoadingContext'
import { useRecaptcha } from '../../../hooks/useRecaptcha'

type Props = {}

const ContactForm = (props: Props) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const { sendEmail } = useSendEmail()
    const {isLoading, setIsLoading} = useContext(LoadingContext)
    const { initializeRecaptcha, getRecaptchaToken } = useRecaptcha()

    const handleSendEmail = useCallback(async (token: string) => {
        console.log(firstName, lastName, email, message)
        // const success = await sendEmail({firstName, lastName, email, message, recaptchaToken: token})
        // if(success){
        //     setFirstName('')
        //     setLastName('')
        //     setEmail('')
        //     setMessage('')
        // }
        // if(firstName.length > 3 && lastName.length > 3 && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && message.length > 10){
        // }
        setIsLoading(false)
    }, [email, firstName, lastName, message, setIsLoading, sendEmail])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        getRecaptchaToken()
    }

    useEffect(() => {
        initializeRecaptcha({
            sitekey: process.env.REACT_APP_RECAPTCHA_TOKEN ?? '', 
            container: "recaptcha", 
            callback: handleSendEmail
        })
    }, [initializeRecaptcha, handleSendEmail])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form action="post" className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.header}>
                        <div className={styles.headerItem}>
                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="first">*Obrigatório*</label>
                                <input className={styles.input} minLength={3} required type="text" name="first" id="first" placeholder='Digite seu primeiro nome' value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="last">*Obrigatório*</label>
                                <input className={styles.input} minLength={3} required type="text" name="last" id="last" placeholder='Digite seu último nome' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="email">*Obrigatório*</label>
                            <input className={styles.input} required type="email" name="email" id="email" placeholder='Digite seu e-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="message">*Obrigatório*</label>
                            <textarea className={styles.input} minLength={10} required name="message" id="message" placeholder='Digite sua mensagem' value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                        </div>
                    </div>
                    <div id="recaptcha"></div>
                    <div className={styles.footer}>
                        <MainButton disabled={isLoading} id='submit' type='button' submit>Enviar</MainButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
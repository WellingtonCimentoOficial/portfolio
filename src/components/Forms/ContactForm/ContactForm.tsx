import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import styles from './ContactForm.module.css'
import MainButton from '../../Buttons/MainButton/MainButton'
import { useSendEmail } from '../../../hooks/useSendEmail'
import { LoadingContext } from '../../../contexts/LoadingContext'
import { useRecaptcha } from '../../../hooks/useRecaptcha'
import IconToast from '../../Toasts/IconToast/IconToast'

type Props = {}

const ContactForm = (props: Props) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [success, setSuccess] = useState<boolean|null>(null)
    const { sendEmail } = useSendEmail()
    const {isLoading, setIsLoading} = useContext(LoadingContext)
    const { initializeRecaptcha, getRecaptchaToken } = useRecaptcha()
    const updatedStateValuesRef = useRef<{firstName: string, lastName: string, email: string, message: string}>({ firstName: '', lastName: '', email: '', message: ''})

    const handleSendEmail = useCallback(async (token: string) => {
        if(updatedStateValuesRef.current.firstName.length > 3 && 
            updatedStateValuesRef.current.lastName.length > 3 && 
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(updatedStateValuesRef.current.email) && 
            updatedStateValuesRef.current.message.length > 10
        ){
            const success = await sendEmail({
                firstName: updatedStateValuesRef.current.firstName, 
                lastName: updatedStateValuesRef.current.lastName, 
                email: updatedStateValuesRef.current.email, 
                message: updatedStateValuesRef.current.message, 
                recaptchaToken: token
            })
            if(success){
                setFirstName('')
                setLastName('')
                setEmail('')
                setMessage('')
                setSuccess(true)
            }else{
                setSuccess(false)
            }
        }
        setIsLoading(false)
    }, [updatedStateValuesRef, setIsLoading, sendEmail])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        getRecaptchaToken()

    }

    useEffect(() => { // USANDO REF POIS A FUNÇÃO HANDLESENDEMAIL NÃO ESTAVA VALORES EM BRANCO DO STATE
        updatedStateValuesRef.current.firstName = firstName
        updatedStateValuesRef.current.lastName = lastName
        updatedStateValuesRef.current.email = email
        updatedStateValuesRef.current.message = message
    }, [firstName, lastName, email, message])

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
                <form className={styles.form} onSubmit={handleSubmit}>
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
            {success !== null &&
                <IconToast 
                    title={success ? 'Mensagem enviada' : 'Mensagem não enviada'} 
                    description={success ? 'Sua mensagem foi enviada com sucesso, aguarde até ser respondido' : 'Ocorreu um problema no envio da mensagem'} 
                    success={success} 
                    setState={setSuccess}
                />
            }
        </div>
    )
}

export default ContactForm
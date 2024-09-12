import React, { useContext, useState } from 'react'
import styles from './ContactForm.module.css'
import MainButton from '../../Buttons/MainButton/MainButton'
import { useSendEmail } from '../../../hooks/useSendEmail'
import { LoadingContext } from '../../../contexts/LoadingContext'

type Props = {}

const ContactForm = (props: Props) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const { sendEmail } = useSendEmail()
    const {setIsLoading} = useContext(LoadingContext)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        if(firstName && lastName && email && message){
            const success = await sendEmail({firstName, lastName, email, message})
            if(success){
                setFirstName('')
                setLastName('')
                setEmail('')
                setMessage('')
            }
        }
        setIsLoading(false)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form action="post" className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.header}>
                        <div className={styles.headerItem}>
                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="first">*Obrigatório*</label>
                                <input className={styles.input} required type="text" name="first" id="first" placeholder='Digite seu primeiro nome' value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="last">*Obrigatório*</label>
                                <input className={styles.input} required type="text" name="last" id="last" placeholder='Digite seu último nome' value={lastName} onChange={(event) => setLastName(event.target.value)} />
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
                            <textarea className={styles.input} required name="message" id="message" placeholder='Digite sua mensagem' value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <MainButton type='button' submit>Enviar</MainButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
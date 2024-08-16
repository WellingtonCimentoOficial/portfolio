import React from 'react'
import styles from './ContactForm.module.css'
import MainButton from '../../Buttons/MainButton/MainButton'

type Props = {}

const ContactForm = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form action="post" className={styles.form}>
                    <div className={styles.header}>
                        <div className={styles.headerItem}>
                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="first">*Obrigatório*</label>
                                <input className={styles.input} type="text" name="first" id="first" placeholder='Digite seu primeiro nome' />
                            </div>
                            <div className={styles.inputContainer}>
                                <label className={styles.label} htmlFor="last">*Obrigatório*</label>
                                <input className={styles.input} type="text" name="last" id="last" placeholder='Digite seu último nome' />
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="email">*Obrigatório*</label>
                            <input className={styles.input} type="email" name="email" id="email" placeholder='Digite seu e-mail' />
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="message">*Obrigatório*</label>
                            <textarea className={styles.input} name="message" id="message" placeholder='Digite sua mensagem'></textarea>
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
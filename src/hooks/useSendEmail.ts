import emailjs from "@emailjs/browser"
import { useCallback } from "react"

type SendEmailType = {
    firstName: string
    lastName: string
    email: string
    message: string
    recaptchaToken: string
}

type templateParamsType = {
    name: string,
    email: string,
    message: string
    'g-recaptcha-response': string
}

export const useSendEmail = () => {
    const sendEmail = useCallback(async ({firstName, lastName, email, message, recaptchaToken} : SendEmailType) => {
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID||''
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID||''

        const templateParams: templateParamsType = {
            name: `${firstName} ${lastName}`,
            email,
            message,
            'g-recaptcha-response': recaptchaToken
        }
        
        emailjs.init({
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        })
        
        const response = await emailjs.send(serviceID, templateID, templateParams)
        return response

    }, [])

    return {sendEmail}
}
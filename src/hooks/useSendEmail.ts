import emailjs from "@emailjs/browser"

type SendEmailType = {
    firstName: string
    lastName: string
    email: string
    message: string
}

export const useSendEmail = () => {
    const sendEmail = async ({firstName, lastName, email, message} : SendEmailType) => {
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID||''
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID||''

        const templateParams = {
            name: `${firstName} ${lastName}`,
            email,
            message,
        }
        
        emailjs.init({
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        })
        
        try {
            const response = await emailjs.send(serviceID, templateID, templateParams)
            if(response.status === 200){
                return true
            }
        } catch (error) {
            return false
        }

    }

    return {sendEmail}
}
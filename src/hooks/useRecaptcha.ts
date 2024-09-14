import { useCallback, useEffect, useState } from "react"
import { useScriptExists } from "./useScriptExists"
import { RecaptchaOptionsType } from "../types/recaptcha"

export const useRecaptcha = () => {
    const [isRecaptchaScriptLoaded, SetIsRecaptchaScriptLoaded] = useState<boolean>(false)
    const [hasRendered, setHasRendered] = useState<boolean>(false)
    const { ScriptExists } = useScriptExists()

    const src = 'https://www.google.com/recaptcha/api.js'

    const createScriptRecaptcha = async () => {
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.defer = true
        document.head.appendChild(script)

        script.onload = () => SetIsRecaptchaScriptLoaded(true)
    }

    const renderRecaptcha = async ({ sitekey, container, callback} : RecaptchaOptionsType) => {
        window.grecaptcha.ready(() => {
            window.grecaptcha.render(container, {sitekey, size: "invisible", callback})
        })
    }

    const initializeRecaptcha = useCallback(async ({sitekey, container, callback} : RecaptchaOptionsType) => {
        if(!ScriptExists(src) && sitekey !== ''){
            createScriptRecaptcha()
        }else if(isRecaptchaScriptLoaded && !hasRendered){
            renderRecaptcha({sitekey, container, callback})
            setHasRendered(true)
        }else{
            SetIsRecaptchaScriptLoaded(true)
        }
    }, [ScriptExists, isRecaptchaScriptLoaded, hasRendered])

    const getRecaptchaToken = useCallback(() => {
        window.grecaptcha.execute()
    }, [])

    useEffect(() => {
        SetIsRecaptchaScriptLoaded(ScriptExists(src))
    }, [ScriptExists])

    return { initializeRecaptcha, getRecaptchaToken, isRecaptchaScriptLoaded }
}
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

    const removeBagde = useCallback(() => {
        const style = document.createElement("style")
        style.innerHTML = ".grecaptcha-badge { visibility: hidden; }"

        document.head.appendChild(style)
    }, [])

    const renderRecaptcha = useCallback(async ({ sitekey, container, badge, callback} : RecaptchaOptionsType) => {
        window.grecaptcha.ready(() => {
            window.grecaptcha.render(container, {sitekey, size: "invisible", callback})
        })
        if(badge === "hidden"){
            removeBagde()
        }
    }, [removeBagde])

    const initializeRecaptcha = useCallback(async ({sitekey, container, badge, callback} : RecaptchaOptionsType) => {
        if(!ScriptExists(src) && sitekey !== ''){
            createScriptRecaptcha()
        }else if(isRecaptchaScriptLoaded && !hasRendered){
            renderRecaptcha({sitekey, container, badge, callback})
            setHasRendered(true)
        }else{
            SetIsRecaptchaScriptLoaded(true)
        }
    }, [ScriptExists, renderRecaptcha, isRecaptchaScriptLoaded, hasRendered])

    const getRecaptchaToken = useCallback(() => {
        window.grecaptcha.execute()
    }, [])

    useEffect(() => {
        SetIsRecaptchaScriptLoaded(ScriptExists(src))
    }, [ScriptExists])

    return { initializeRecaptcha, getRecaptchaToken, isRecaptchaScriptLoaded }
}
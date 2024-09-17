type RecaptchaDefaultType = {
    sitekey: string
    callback: (token: string) => void
}

export type RecaptchaOptionsType = RecaptchaDefaultType & {
    container: string
    badge?: "default"|"hidden"
    errorCallback?: () => void
}

export type RecaptchaRenderType = RecaptchaDefaultType & {
    size?: "invisible"
    "error-callback": () => void
}

interface RecaptchaInterface {
    ready: (callback: () => void) => void
    render: (container: string, options: RecaptchaRenderType) => void
    execute: () => void
}

declare global {
    interface Window {
        grecaptcha: RecaptchaInterface
    }
}

export {}
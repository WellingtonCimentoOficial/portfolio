export type RecaptchaOptionsType = {
    sitekey: string
    container: string
    size?: "invisible"
    callback: (token: string) => void
}

interface RecaptchaInterface {
    ready: (callback: () => void) => void
    render: (container: string, options: Options) => void
    execute: () => void
}

declare global {
    interface Window {
        grecaptcha: RecaptchaInterface
    }
}

export {}
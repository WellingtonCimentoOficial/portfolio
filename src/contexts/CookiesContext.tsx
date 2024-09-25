import { useState, createContext, useEffect } from "react";

type CookiesContextType = {
    accepted: boolean | null
    setAccepted: React.Dispatch<React.SetStateAction<boolean | null>>
}

type CookiesContextProviderProps = {
    children: React.ReactNode
}

const initalValue = {
    accepted: false,
    setAccepted: () => {}
}

type DataType = {
    value: number
    exp: string
}

export const CookiesContext = createContext<CookiesContextType>(initalValue)
export const CookiesContextProvider = ({children} : CookiesContextProviderProps) => {
    const [accepted, setAccepted] = useState<boolean | null>(null)

    useEffect(() => {
        if(accepted !== null){
            if(accepted){
                const currentDate = new Date()
                const timeToAdd = 3 * 24 * 60 * 60 * 1000 // Three days
                const expDate = new Date(currentDate.getTime() + timeToAdd)
                const data: DataType = {value: 1, exp: expDate.toISOString()}
                localStorage.setItem("cookiesConsent", JSON.stringify(data))
                setAccepted(true)
            }else{
                localStorage.removeItem("cookiesConsent")
                setAccepted(false)
            }
        }
    }, [accepted])

    useEffect(() => {
        const cookiesConsent = localStorage.getItem("cookiesConsent")
        try {
            if(cookiesConsent){
                const cookiesConsentJson: DataType = JSON.parse(cookiesConsent)
                const cookiesConsentExp = new Date(cookiesConsentJson.exp)
                const currentDate = new Date()
                if(cookiesConsentJson.value === 1 && currentDate.getTime() <= cookiesConsentExp.getTime()){
                    setAccepted(true)
                }else{
                    setAccepted(false)
                }
            }else{
                setAccepted(false)
            }
        } catch (error) {
            setAccepted(false)
        }
    }, [])

    return (
        <CookiesContext.Provider value={{accepted, setAccepted}}>
            {children}
        </CookiesContext.Provider>
    )
}
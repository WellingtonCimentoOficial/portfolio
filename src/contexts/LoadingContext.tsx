import { createContext, useState } from "react";
import IconLoader from "../components/Loaders/IconLoader/IconLoader";

type LoadingContextType = {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValue = {
    isLoading: false,
    setIsLoading: () => {}
}

type LoadingContextProviderProps = {
    children: React.ReactNode
}

export const LoadingContext = createContext<LoadingContextType>(initialValue)

export const LoadingContextProvider = ({ children } : LoadingContextProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
            {isLoading &&
                <IconLoader transparency />
            }
            {children}
        </LoadingContext.Provider>
    )

}
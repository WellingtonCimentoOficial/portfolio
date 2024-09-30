import { useCallback } from "react"

export const usePreventScroll = () => {
    const preventScroll = useCallback((prevent: boolean) => {
        if(prevent){
            document.body.style.overflow = "hidden"
            document.body.style.height = "100%"
            document.documentElement.style.overflow = "hidden"
            if(window.innerWidth <= 900){
                document.documentElement.style.height = "100%"
            }
        }else{
            document.body.style.overflowY = ""
            document.body.style.height = ""
            document.documentElement.style.height = ""
            document.documentElement.style.overflowY = ""
        }
    }, [])

    return {preventScroll}
}
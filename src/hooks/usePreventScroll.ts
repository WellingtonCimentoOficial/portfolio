import { useCallback } from "react"

export const usePreventScroll = () => {
    const preventScroll = useCallback((prevent: boolean) => {
        if(prevent){
            document.body.style.overflowY = "hidden"
            document.body.style.height = "100%"
            document.documentElement.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = ""
            document.body.style.height = ""
            document.documentElement.style.overflowY = ""
        }
    }, [])

    return {preventScroll}
}
import { useCallback } from "react"

export const useScrollBlock = () => {
    const scrollBlock = useCallback((top: number, left: number) => {
        window.scroll({top, left, behavior: 'auto'})
    }, [])

    return {scrollBlock}
}
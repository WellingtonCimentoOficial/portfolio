import { useCallback } from "react"

type Props = {
    element: HTMLElement,
    top: number,
    left: number
}

export const useScrollBlock = () => {
    const scrollBlock = useCallback((top: number, left: number) => {
        window.scroll({top, left, behavior: 'auto'})
    }, [])

    return {scrollBlock}
}
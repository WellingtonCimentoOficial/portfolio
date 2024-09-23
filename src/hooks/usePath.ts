import { useCallback } from "react"

export const usePath = () => {
    const path = useCallback((id: number, title: string) => {
        return `/project/${id}/${title.toLowerCase().split(" ").join("-")}`
    }, [])

    return {path}
}
import { useCallback } from "react"

export const usePath = () => {
    const projectPath = useCallback((id: number | string, title: string) => {
        return `/project/${id}/${title.toLowerCase().split(" ").join("-")}`
    }, [])

    return {projectPath}
}
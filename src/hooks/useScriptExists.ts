import { useCallback } from "react"

export const useScriptExists = () => {
    const ScriptExists = useCallback((src: string) => {
        const script = document.querySelector(`script[src="${src}"]`)
        return !!script
    }, [])
    return {ScriptExists}
}
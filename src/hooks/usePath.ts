export const usePath = () => {
    const path = (id: number, title: string) => {
        return `/project/${id}/${title.toLowerCase().split(" ").join("-")}`
    }

    return {path}
}
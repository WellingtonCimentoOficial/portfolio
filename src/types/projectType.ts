export type Image = {
    id: number
    url: string
}

type Statistics = {
    html: number
    css: number
    javascript: number
    typescript: number
    python: number
}

export interface ProjectType {
    id: number
    title: string
    description: string
    images: {
        logo: Image
        main: Image
        others: Image[]
    }
    github: string
    statistics: Statistics
}
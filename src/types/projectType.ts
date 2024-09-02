export type Image = {
    id: number
    url: string
}

type Statistics = {
    python: number
    typescript: number
    javascript: number
    html: number
    css: number
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
export type Image = {
    id: number
    url: string
}

type Statistics = {
    python: number,
    typescript: number,
    html: number,
    css: number
}

export interface ProjectType {
    id: number
    title: string
    description: string
    images: {
        main: Image,
        others: Image[]
    }
    github: string,
    statistics: Statistics
}
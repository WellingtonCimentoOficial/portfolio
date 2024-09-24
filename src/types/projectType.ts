type Content = {
    id: string,
    text: string
}

export type Image = {
    id: string
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
    id: number | string
    title: string
    description: string
    images: {
        logo: Image
        main: Image
        others: Image[]
    }
    github: string
    statistics: Statistics
    isFavorite: boolean
    isGUI: boolean
    isHighlighted: boolean
    details: {
        features: Content[],
        gettingStarted: Content[],
        talksAndVideos: Content[]
    }
}
export interface Image {
    height: number
    width: number
    url: string
}

export interface Album {
    // Required
    name: string
    id: string
    images: Image[]

    // Optional
    artistNames: string[]
    uri: string
    href: string
}

export interface Track {
    // Required
    preview_url: string
    name: string
    id: string
    images: Image[]
    artistNames: string[]

    // Optional
    popularity: number
    type: string
    available_markets: string[]
    duration_ms: number
    uri: string
    href: string
}

export interface Artist {
    // Required
    id: string
    name: string
    followers: number
    images: Image[]

    // Optional
    popularity: number
    type: string
    uri: string
    href: string
    genres: string[]
}

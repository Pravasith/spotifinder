


export interface Image {
    height: number
    width: number
    url: string
}

export interface Artist {
    // Mandatory
    name: string
    id: string
    images: Image[]
    followers: {
        href: null | string,
        total: number
    }

    // Optional
    genres?: string[]
    href?: string
    popularity?: number
    type?: 'artist'
    uri?: string
    external_urls?: {
        spotify: string
    }
}

export interface Album {
    // Mandatory
    name: string
    id: string
    images: Image[]
    artists: string[]

    // Optional
    album_type?: string
    available_markets?: string[]
    external_urls?: {
        spotify: string
    }
    href?: string
    release_date?: string
    release_date_precision?: string
    total_tracks?: number
    type?: 'album'
    uri?: string
}

export interface Track {
    // Mandatory
    album: {
        // Mandatory
        name: string
        id: string
        images: Image[]

        // Optional
        uri?: string
        href?: string
    }
    preview_url: string
    name: string
    id: string
    artists: string[]

    // Optional
    popularity?: number
    type?: 'track'
    available_markets?: string[]
    duration_ms?: number
    uri?: string
    href?: string
}



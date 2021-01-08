
export interface IArtistData {
    artistData: {

        getArtist: {
            name: string,
            id: string,
            genres: string[],
            followers: number,
            images: {
                url: string
            }[]
            albums: {
                name: string,
                id: string,
                images: {
                    url: string
                }[],
                albumTracks: {
                    name: string,
                    id: string,
                    duration_ms: number,
                    preview_url: string
                }[]
            }[],
            popularTracks: {
                name: string,
                id: string,
                preview_url: string
                album: {
                    images: {
                        url: string
                    }[]
                }
            }[]
        },

        getRelatedArtists: {
            name: string,
            id: string,
            images: {
                url: string
            }[]
        }[]
    
    }
}

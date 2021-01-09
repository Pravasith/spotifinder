
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
                preview_url: string,
                duration_ms: number,
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


export interface IAlbumData {
    albumData : {
        getAlbum: {
            name: string,
            album_type: string,
            copyrights: string,
            release_date: string,
            albumTracks: {
                name: string,
                preview_url: string,
                id: string,
            }[]
            artists: {
                name: string,
                id: string,
                albums: {
                    name: string,
                    id: string,
                    album_type: string,
                    images: {
                        url: string
                    }[],
                    albumTracks: {
                        name: string,
                        id: string,
                        preview_url: string
                    }[]
                }
            }[]
        }
    }
}

import { gql } from "@apollo/client"

export const GENERIC_SPOTIFY = `
    name,
    id,
    images{
        url, width
    }
`

export const SEARCH_SPOTIFY = gql`
    query SearchSpotify($query: String!) {
        search(
            searchQuery: $query,
            searchFilter: ["track", "artist", "album"]
            limit: 5
        ){
            artists{${ GENERIC_SPOTIFY }},
            albums{
                ${ GENERIC_SPOTIFY },
                artistNames
            },
            tracks{
                ${ GENERIC_SPOTIFY },
                artistNames
            }

        }
    }
`


export const GET_ARTIST = gql`
    query ($id: String!)  {

        getArtist(artistId: $id){
            name,
            id,
            images{
                url
            },
            genres,
            followers,
            albums{
                name,
                id,
                album_type,
                images{
                    url
                },
                albumTracks{
                    name,
                    id,
                    preview_url,
                    duration_ms
                }
            },
            popularTracks{
                name,
                id,
                preview_url,
                duration_ms,
                album{
                    images{
                        url
                    }
                }
            }
        }
            
        getRelatedArtists(artistId: $id){
            name,
            id,
            images{
                url
            }
        }
    
    }
`



export const GET_ALBUM = gql`
    query ($albumId: String!)  {
        getAlbum(albumId: $albumId){
            name,
            album_type,
            copyrights,
            release_date,
            images{
                url,
            }
            albumTracks{
                name,
                preview_url,
                duration_ms,
                id,
            }
            artists{
                name,
                id,
                albums{
                    name,
                    id,
                    album_type,
                    images{
                        url
                    }
                }
            }
        }
    }
`
  